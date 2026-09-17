"""Render deck HTML files to PDF via headless Chromium. Run inside .deckenv."""
from pathlib import Path
from playwright.sync_api import sync_playwright

DECKS = ["investor", "business", "customer"]
HERE = Path(__file__).parent

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    for name in DECKS:
        html_path = HERE / f"{name}.html"
        page.goto(html_path.resolve().as_uri())
        page.pdf(
            path=str(HERE / f"Limepaper_{name.capitalize()}_Deck.pdf"),
            width="13.333in",
            height="7.5in",
            print_background=True,
            margin={"top": "0", "bottom": "0", "left": "0", "right": "0"},
        )
        print(f"rendered {name}")
    browser.close()
