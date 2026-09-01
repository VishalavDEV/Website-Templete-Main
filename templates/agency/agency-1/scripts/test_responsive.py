#!/usr/bin/env python3
"""Responsive visual tests: overflow checks + screenshots at 6 viewports."""

from playwright.sync_api import sync_playwright


VIEWPORTS = [
    ("desktop", 1440, 900),
    ("desktop-sm", 1280, 800),
    ("tablet-landscape", 1024, 768),
    ("tablet-portrait", 768, 1024),
    ("mobile", 390, 844),
    ("mobile-sm", 360, 800),
]

ROUTES = ["/", "/work", "/services", "/studio", "/journal", "/contact"]


def test_responsive():
    errors = []
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.on("pageerror", lambda e: errors.append(f"uncaught: {e}"))
        page.on("requestfailed", lambda r: errors.append(f"{r.method} {r.url} — {r.failure}"))

        for name, w, h in VIEWPORTS:
            page.set_viewport_size({"width": w, "height": h})
            for route in ROUTES:
                page.goto(f"http://localhost:5173{route}")
                page.wait_for_load_state("networkidle")
                page.wait_for_timeout(200)

                # Horizontal overflow check
                overflow = page.evaluate("""() => [...document.querySelectorAll('*')]
                    .filter(e => e.getBoundingClientRect().right > document.documentElement.clientWidth + 1)
                    .slice(0,5).map(e => e.tagName + '.' + e.className)""")
                if overflow:
                    errors.append(f"{name} {route}: horizontal overflow from {overflow}")

                # Screenshot
                import os
                os.makedirs("screenshots", exist_ok=True)
                page.screenshot(path=f"screenshots/{name}_{route.replace('/', 'home')}.png",
                                full_page=True, animations="disabled", caret="hide")

        browser.close()

    if errors:
        print("RESPONSIVE FAILURES:")
        for e in errors:
            print(f"  - {e}")
        return False
    return True


if __name__ == "__main__":
    import sys
    sys.exit(0 if test_responsive() else 1)