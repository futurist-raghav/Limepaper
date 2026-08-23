import * as THREE from './vendor/three.module.min.js';

// Hero scene: ~N particles of marble dust that settle into a sheet, then roll.
// Phase 0 = dust cloud, 1 = flat sheet, 2 = roll. Driven by page scroll.

const canvas = document.getElementById('bg');
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
camera.position.set(0, 0, 11.2);

// ponytail: fixed count buckets instead of a real perf probe — drop it if a low-end
// device still drags; adaptive count needs a frame-time sampler, not more constants.
const COUNT = innerWidth < 700 ? 22000 : 60000;

const dust = new Float32Array(COUNT * 3);
const sheet = new Float32Array(COUNT * 3);
const roll = new Float32Array(COUNT * 3);
const rand = new Float32Array(COUNT);

const W = 8.4, H = 4.7;            // sheet dimensions
const R = 1.55;                    // roll radius

for (let i = 0; i < COUNT; i++) {
  const i3 = i * 3;
  rand[i] = Math.random();

  // dust: a twisted disc of airborne stone powder — a form with edges, not a fog
  const rr = 4.1 * Math.pow(Math.random(), 0.62);
  const th = Math.random() * Math.PI * 2 + rr * 0.62;              // twist grows with radius
  const g = (Math.random() + Math.random() + Math.random() - 1.5);  // ~gaussian thickness
  dust[i3] = Math.cos(th) * rr;
  dust[i3 + 1] = g * (1.5 - rr * 0.2) + Math.sin(rr * 1.1) * 0.35;
  dust[i3 + 2] = Math.sin(th) * rr;

  // sheet: a grid plane with a slow curl along x
  const u = Math.random(), v = Math.random();
  const x = (u - 0.5) * W, y = (v - 0.5) * H;
  sheet[i3] = x;
  sheet[i3 + 1] = y + Math.sin(x * 0.42) * 0.14;
  sheet[i3 + 2] = Math.sin(x * 0.5 + y * 0.28) * 0.26;

  // roll: the same sheet wrapped around a horizontal cylinder
  const t = (u - 0.5) * Math.PI * 2.35;
  roll[i3] = y * 1.35;
  roll[i3 + 1] = Math.sin(t) * (R + u * 0.35);
  roll[i3 + 2] = Math.cos(t) * (R + u * 0.35);
}

const geo = new THREE.BufferGeometry();
geo.setAttribute('position', new THREE.BufferAttribute(dust, 3)); // required by three; unused in shader
geo.setAttribute('aDust', new THREE.BufferAttribute(dust, 3));
geo.setAttribute('aSheet', new THREE.BufferAttribute(sheet, 3));
geo.setAttribute('aRoll', new THREE.BufferAttribute(roll, 3));
geo.setAttribute('aRand', new THREE.BufferAttribute(rand, 1));
geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 14);

const mat = new THREE.ShaderMaterial({
  transparent: true,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
  uniforms: {
    uPhase: { value: 0 },
    uTime: { value: 0 },
    uSize: { value: 1 },
    uOpacity: { value: 1 },
  },
  vertexShader: /* glsl */`
    attribute vec3 aDust, aSheet, aRoll;
    attribute float aRand;
    uniform float uPhase, uTime, uSize;
    varying float vRand, vSettle;

    void main() {
      // per-particle stagger so the sheet forms as a cascade, not a snap
      float d = clamp((uPhase - aRand * 0.4) / 0.6, 0.0, 2.0);
      float s1 = smoothstep(0.0, 1.0, clamp(d, 0.0, 1.0));
      float s2 = smoothstep(0.0, 1.0, clamp(d - 1.0, 0.0, 1.0));

      vec3 pos = mix(mix(aDust, aSheet, s1), aRoll, s2);

      // airborne drift, damped out as the particle settles into the sheet
      float loose = 1.0 - s1;
      float ph = aRand * 43.0;
      pos += vec3(
        sin(uTime * 0.31 + ph) * 0.55,
        cos(uTime * 0.24 + ph * 1.7) * 0.42,
        sin(uTime * 0.19 + ph * 0.6) * 0.5
      ) * loose;

      vSettle = s1;
      vRand = aRand;

      vec4 mv = modelViewMatrix * vec4(pos, 1.0);
      gl_Position = projectionMatrix * mv;
      // airborne motes read large and soft; settled sheet grain reads fine and dense
      gl_PointSize = uSize * (1.5 + aRand * 3.0) * (1.0 - 0.42 * s1) * (16.0 / -mv.z);
    }
  `,
  fragmentShader: /* glsl */`
    precision mediump float;
    uniform float uOpacity;
    varying float vRand, vSettle;

    void main() {
      vec2 c = gl_PointCoord - 0.5;
      float m = 1.0 - smoothstep(0.16, 0.5, length(c));
      if (m <= 0.001) discard;

      vec3 dustCol  = vec3(0.62, 0.63, 0.66);          // cold mineral grey
      vec3 sheetCol = vec3(0.96, 0.94, 0.88);          // warm ivory
      vec3 col = mix(dustCol, sheetCol, vSettle);
      if (vRand > 0.955) col = mix(col, vec3(0.78, 0.89, 0.29), 0.75 * vSettle); // sparse lime flecks

      float a = m * (0.17 + vRand * 0.36) * (1.0 + 0.45 * vSettle) * uOpacity;
      gl_FragColor = vec4(col, a);
    }
  `,
});

const points = new THREE.Points(geo, mat);
scene.add(points);

// --- scroll + pointer state ---------------------------------------------------
let dim = 1;   // narrow screens keep the field as texture, not a competing element
let phase = 0, targetPhase = 0, tilt = 0, targetTilt = 0, mx = 0, my = 0, tmx = 0, tmy = 0;

function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  mat.uniforms.uSize.value = Math.min(1.5, Math.max(0.7, w / 1400));
  // sit the field right of centre so it never fights the left-aligned type
  points.position.x = w > 900 ? 1.6 : 0;
  points.position.y = w > 900 ? 0 : -1.6;   // on phones the field drops below the copy
  dim = w > 900 ? 1 : 0.55;                // and stays a texture, never competing with the copy
  onScroll();
}
addEventListener('resize', resize);
resize();

function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const p = max > 0 ? scrollY / max : 0;
  // dust -> sheet over the first ~28% of the page, sheet -> roll over the last ~35%
  targetPhase = Math.min(p / 0.28, 1) + Math.max(0, (p - 0.65) / 0.35);
  targetTilt = p;
  mat.uniforms.uOpacity.value = dim * (1 - Math.min(0.62, Math.max(0, (p - 0.08) * 1.1)));
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();

if (!reduced) {
  addEventListener('pointermove', (e) => {
    tmx = (e.clientX / innerWidth - 0.5);
    tmy = (e.clientY / innerHeight - 0.5);
  }, { passive: true });
}

const clock = new THREE.Clock();
let visible = true;
document.addEventListener('visibilitychange', () => { visible = !document.hidden; });

renderer.setAnimationLoop(() => {
  if (!visible) return;
  const t = clock.getElapsedTime();
  mat.uniforms.uTime.value = reduced ? 0 : t;

  phase += (targetPhase - phase) * 0.06;
  tilt += (targetTilt - tilt) * 0.06;
  mx += (tmx - mx) * 0.05;
  my += (tmy - my) * 0.05;

  mat.uniforms.uPhase.value = phase;

  points.rotation.x = -0.22 + tilt * 0.5 + my * 0.16;
  points.rotation.y = 0.18 + tilt * 0.9 + mx * 0.28;
  points.rotation.z = tilt * -0.12;
  camera.position.z = 11.2 - tilt * 1.8;

  renderer.render(scene, camera);
});

document.body.classList.add('scene-ready');
