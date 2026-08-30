import * as THREE from './vendor/three.module.min.js';

// "What we make" scene. The index page ends on the roll; this one starts there and keeps
// going, morphing the same field of particles through the product forms the page argues for.
//
//   phase 0 roll -> 1 label -> 2 carton -> 3 notebook -> 4 wallpaper drop
//
// Every constant that governs the roll — W, H, R, camera z, the entry rotation — is copied
// from scene.js on purpose. Cross from one page to the other and the field should look like
// it never reset.
//
// The products are drawn as LINE ART, not clouds. A uniform scatter under additive blending
// saturates to a featureless white slab with no silhouette, which is what a solid-filled
// version of this looked like. So roughly half the particles are pinned to each form's
// outline and rendered bright, the rest fill the interior at low alpha, and everything is
// dimmed by depth so the far side of a box reads as the far side. The roll is exempt — it
// has to match the index page — so the line-art styling fades in as phase leaves 0.

const canvas = document.getElementById('bg');
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
camera.position.set(0, 0, 11.5);  // index leaves it at 9.4; pulled back for headline clearance

const COUNT = innerWidth < 700 ? 22000 : 60000;
const SHAPES = 5;
const EDGE_FRAC = 0.52;             // share of particles pinned to outlines

const W = 8.4, H = 4.7, R = 1.55;   // the index scene's sheet/roll dimensions

// the settled products are viewed under a fixed ~0.9rad three-quarter turn (see the render
// loop); flat forms authored in XY foreshorten to ribbons under it, so they are pre-rotated
// back by this much and presented near-frontal
const RY = -0.95, COS_RY = Math.cos(RY), SIN_RY = Math.sin(RY);

const shape = [];
for (let s = 0; s < SHAPES; s++) shape.push(new Float32Array(COUNT * 3));
const [roll, label, carton, book, drop] = shape;
const rand = new Float32Array(COUNT);
const edge = new Float32Array(COUNT);

for (let i = 0; i < COUNT; i++) {
  const i3 = i * 3;
  const u = Math.random(), v = Math.random(), w = Math.random();
  const er = Math.random(), sr = Math.random();
  rand[i] = Math.random();

  const isEdge = er < EDGE_FRAC;
  edge[i] = isEdge ? 1 : 0;

  // For the sheet-like forms the shape maps the unit square, so snapping (u,v) to the
  // square's boundary puts a particle on that form's outline — one remap, every shape.
  let uu = u, vv = v;
  if (isEdge) {
    const side = Math.floor(sr * 4);
    if      (side === 0) { vv = 0; }
    else if (side === 1) { vv = 1; }
    else if (side === 2) { uu = 0; }
    else                 { uu = 1; }
  }

  // --- 0 · the roll, verbatim from scene.js so the two pages line up ------------
  const t = (u - 0.5) * Math.PI * 2.35;
  const y = (v - 0.5) * H;
  roll[i3]     = y * 1.35;
  roll[i3 + 1] = Math.sin(t) * (R + u * 0.35);
  roll[i3 + 2] = Math.cos(t) * (R + u * 0.35);

  // --- 1 · a label: flat stock, one corner peeled up and curling back -----------
  {
    // confined to one corner — spread any wider and the sheet curls into a cone
    const peel = Math.max(0, (uu - 0.64) + (vv - 0.62)) * 2.8;
    const x = (uu - 0.5) * 3.6 - peel * 0.7;
    const z = peel * peel * 1.3 + Math.sin(x * 0.5) * 0.07;
    label[i3]     = x * COS_RY + z * SIN_RY;
    label[i3 + 1] = (vv - 0.5) * 2.5 + peel * 0.32;
    label[i3 + 2] = -x * SIN_RY + z * COS_RY;
  }

  // --- 2 · a carton: the twelve edges, lightly filled ---------------------------
  {
    const BX = 1.5, BY = 1.8, BZ = 1.1;
    let x, yy, z;
    if (isEdge) {
      const e = Math.min(11, Math.floor(u * 12));
      const run = v * 2 - 1;                       // position along the edge
      const axis = e % 3, corner = (e / 3) | 0;
      const s1 = (corner & 1) ? 1 : -1, s2 = (corner & 2) ? 1 : -1;
      if      (axis === 0) { x = run * BX; yy = s1 * BY;  z = s2 * BZ; }
      else if (axis === 1) { x = s1 * BX;  yy = run * BY; z = s2 * BZ; }
      else                 { x = s1 * BX;  yy = s2 * BY;  z = run * BZ; }
    } else {
      const face = Math.min(5, Math.floor(w * 6));
      const a = u * 2 - 1, b = v * 2 - 1;
      if      (face === 0) { x =  BX;    yy = b * BY; z = a * BZ; }
      else if (face === 1) { x = -BX;    yy = b * BY; z = a * BZ; }
      else if (face === 2) { x = a * BX; yy =  BY;    z = b * BZ; }
      else if (face === 3) { x = a * BX; yy = -BY;    z = b * BZ; }
      else if (face === 4) { x = a * BX; yy = b * BY; z =  BZ;    }
      else                 { x = a * BX; yy = b * BY; z = -BZ;    }
    }
    carton[i3] = x; carton[i3 + 1] = yy; carton[i3 + 2] = z;
  }

  // --- 3 · an open notebook: two leaves splayed off a spine ---------------------
  // pre-rotated about Y so the global three-quarter turn lands it near-frontal;
  // authored flat it just foreshortens into a blade
  {
    const TH = 0.62;                                        // half-angle the book opens to
    const side = uu < 0.5 ? -1 : 1;
    // a slice of the outline goes to the spine instead — without it the two leaves read as
    // one creased sheet, and the fold is the thing that says "book"
    const spine = isEdge && sr > 0.78;
    const along = spine ? 0 : (side < 0 ? (0.5 - uu) : (uu - 0.5)) * 2;  // 0 spine, 1 edge
    const leaf = along * 2.3;
    const page = (rand[i] - 0.5) * 0.30 * (0.35 + along);    // stack thickness
    const x = Math.cos(TH) * side * leaf;
    const z = Math.sin(TH) * leaf - 0.85 + Math.sin(along * 2.4) * 0.15 + page;
    book[i3]     = x * COS_RY + z * SIN_RY;
    book[i3 + 1] = (vv - 0.5) * 2.9;
    book[i3 + 2] = -x * SIN_RY + z * COS_RY;
  }

  // --- 4 · wallpaper: a tall drop hanging with a slow drape ---------------------
  // seen near-frontal, a depth-only wave is invisible and the sheet reads as a plain
  // rectangle — the sway has to move in x so it shows up in the silhouette
  {
    const yy = (vv - 0.5) * 4.6;
    const sway = Math.sin(yy * 0.82) * 0.42;
    const x = (uu - 0.5) * 1.9 + sway;
    const z = Math.cos(yy * 0.82) * 0.62;
    drop[i3]     = x * COS_RY + z * SIN_RY;
    drop[i3 + 1] = yy;
    drop[i3 + 2] = -x * SIN_RY + z * COS_RY;
  }
}

const geo = new THREE.BufferGeometry();
geo.setAttribute('position', new THREE.BufferAttribute(roll, 3)); // required by three; unused in shader
for (let s = 0; s < SHAPES; s++) geo.setAttribute('aS' + s, new THREE.BufferAttribute(shape[s], 3));
geo.setAttribute('aRand', new THREE.BufferAttribute(rand, 1));
geo.setAttribute('aEdge', new THREE.BufferAttribute(edge, 1));
geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 16);

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
    attribute vec3 aS0, aS1, aS2, aS3, aS4;
    attribute float aRand, aEdge;
    uniform float uPhase, uTime, uSize;
    varying float vRand, vLoose, vEdge, vStyle, vDepth;

    void main() {
      // Per-particle stagger, so each form assembles as a cascade rather than a snap. The
      // envelope has to close at every whole phase: a constant offset leaves the high-aRand
      // particles permanently short of their target, and the settled form is a smear.
      float wave = sin(fract(uPhase) * 3.14159265);
      float p = uPhase - aRand * 0.35 * wave;

      // each term is still zero while the one before it is finishing, so the chain is a
      // sequence of hand-offs, not a blend of everything at once
      vec3 pos = aS0;
      pos = mix(pos, aS1, smoothstep(0.0, 1.0, clamp(p,       0.0, 1.0)));
      pos = mix(pos, aS2, smoothstep(0.0, 1.0, clamp(p - 1.0, 0.0, 1.0)));
      pos = mix(pos, aS3, smoothstep(0.0, 1.0, clamp(p - 2.0, 0.0, 1.0)));
      pos = mix(pos, aS4, smoothstep(0.0, 1.0, clamp(p - 3.0, 0.0, 1.0)));

      // Scatter peaks mid-transition and returns to zero on every product, so a form breaks
      // apart into loose stock and re-settles as the next one. Driven by uPhase, NOT by the
      // staggered p: off p, a particle with a large aRand is still counted as in motion when
      // the field has settled, and the whole form sits permanently inside a cloud of haze.
      float loose = uPhase >= ${(SHAPES - 1).toFixed(1)} ? 0.0 : wave * (0.55 + aRand * 0.9);

      float ph = aRand * 43.0;
      pos += vec3(
        sin(uTime * 0.31 + ph) * 0.62,
        cos(uTime * 0.24 + ph * 1.7) * 0.48,
        sin(uTime * 0.19 + ph * 0.6) * 0.55
      ) * loose;

      // line-art styling is off on the roll (so it matches index) and fades in as the
      // products take over; it also relaxes mid-transition, when there is no outline to draw
      vStyle = smoothstep(0.0, 0.85, uPhase) * (1.0 - loose * 0.75);
      vLoose = loose;
      vEdge = aEdge;
      vRand = aRand;

      vec4 mv = modelViewMatrix * vec4(pos, 1.0);
      vDepth = clamp((-mv.z - 7.5) / 9.0, 0.0, 1.0);   // 0 near, 1 far

      gl_Position = projectionMatrix * mv;
      // the dust is big and soft; the drawn forms are small and tight, or the outline
      // smears into the same haze the fill does
      float dust = (1.5 + aRand * 3.0) * (1.0 + 0.5 * loose);
      float line = 1.0 + aRand * 0.9;
      gl_PointSize = uSize * mix(dust, line, vStyle) * (16.0 / -mv.z);
    }
  `,
  fragmentShader: /* glsl */`
    precision mediump float;
    uniform float uOpacity;
    varying float vRand, vLoose, vEdge, vStyle, vDepth;

    void main() {
      vec2 c = gl_PointCoord - 0.5;
      float m = 1.0 - smoothstep(0.16, 0.5, length(c));
      if (m <= 0.001) discard;

      vec3 sheetCol = vec3(0.96, 0.94, 0.88);          // warm ivory — the index page's sheet
      vec3 dustCol  = vec3(0.62, 0.63, 0.66);          // cold mineral grey, mid-transition
      vec3 fillCol  = vec3(0.44, 0.47, 0.50);          // recessed interior, well under the edge
      vec3 edgeCol  = vec3(0.84, 0.95, 0.45);          // lime outline, the brand accent

      // depth shading: the far side of a form is dimmer and cooler, which is the only cue
      // that says "box" rather than "rectangle"
      float shade = 1.0 - 0.65 * vDepth;
      vec3 drawn = mix(fillCol, edgeCol, vEdge) * mix(1.0, shade, vStyle);
      vec3 col = mix(mix(sheetCol, dustCol, vLoose), drawn, vStyle);
      if (vRand > 0.955) col = mix(col, vec3(0.78, 0.89, 0.29), 0.75 * (1.0 - vLoose) * (1.0 - vStyle));

      // additive dust wants low alpha or it blows out; the drawn form is composited
      // normally, so the outline can be opaque and the fill can sit right back
      float dustA = (0.17 + vRand * 0.36) * (1.0 - 0.25 * vLoose);
      float lineA = mix(0.17, 0.85, vEdge) * mix(1.0, shade, 0.5);
      float a = m * mix(dustA, lineA, vStyle) * uOpacity;
      gl_FragColor = vec4(col, a);
    }
  `,
});

const points = new THREE.Points(geo, mat);
scene.add(points);

// --- scroll + pointer state ---------------------------------------------------
let dim = 1, baseOpacity = 1;
let phase = 0, targetPhase = 0, tilt = 0, targetTilt = 0, mx = 0, my = 0, tmx = 0, tmy = 0;

// hold the roll through the hero, so the form you arrive on is the form you left.
// declared above resize(), which calls onScroll() on the way in.
const HOLD = 0.06;

function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  mat.uniforms.uSize.value = Math.min(1.5, Math.max(0.7, w / 1400));
  // sit the field right of centre so it never fights the left-aligned type
  points.position.x = w > 900 ? 2.5 : 0;
  points.position.y = w > 900 ? -0.5 : -1.6;   // clear of the headline
  dim = w > 900 ? 1 : 0.55;
  onScroll();
}
addEventListener('resize', resize);
resize();

function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const p = max > 0 ? scrollY / max : 0;

  const q = Math.min(1, Math.max(0, (p - HOLD) / (1 - HOLD)));
  const seg = q * (SHAPES - 1);
  const i = Math.min(SHAPES - 2, Math.floor(seg));
  const f = seg - i;
  // dwell on each product for the first third of its segment, then transition — otherwise
  // the field is permanently mid-morph and never actually reads as any of the products
  const e = f <= 0.34 ? 0 : f >= 0.9 ? 1 : (f - 0.34) / 0.56;
  targetPhase = i + e * e * (3 - 2 * e);

  targetTilt = p;
  baseOpacity = dim * (0.72 - Math.min(0.22, Math.max(0, (p - 0.06) * 0.4)));
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
  mat.uniforms.uTime.value = reduced ? 0 : clock.getElapsedTime();

  phase += (targetPhase - phase) * 0.06;
  tilt += (targetTilt - tilt) * 0.06;
  mx += (tmx - mx) * 0.05;
  my += (tmy - my) * 0.05;

  mat.uniforms.uPhase.value = phase;
  mat.uniforms.uOpacity.value = baseOpacity * (1 + 0.55 * Math.min(1, phase));

  // Additive is right for dust — overlapping grains read as light. It is wrong for a drawn
  // form: every dense area sums past white and the silhouette goes with it. So the products
  // composite normally instead. The swap happens mid-morph, where the field is scattered
  // and there is no edge to see it on.
  const normal = phase > 0.55;
  if (normal !== (mat.blending === THREE.NormalBlending)) {
    mat.blending = normal ? THREE.NormalBlending : THREE.AdditiveBlending;
    mat.needsUpdate = true;
  }

  // Entry orientation is the index page's exit orientation, so the roll lines up. Once the
  // morphs begin (k -> 1) it eases to a fixed three-quarter angle instead of sweeping with
  // scroll: a box seen face-on is just a rectangle, and every product needs the same read.
  const k = Math.min(1, phase);
  points.rotation.x = 0.28 * (1 - k) + 0.34 * k + tilt * 0.10 + my * 0.14;
  points.rotation.y = 1.08 * (1 - k) + 0.68 * k + tilt * 0.35 + mx * 0.24;
  points.rotation.z = -0.12 * (1 - k) + 0.05 * k;
  camera.position.z = 11.5 + tilt * 0.9;

  renderer.render(scene, camera);
});

document.body.classList.add('scene-ready');
