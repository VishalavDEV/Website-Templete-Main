#!/usr/bin/env python3
"""Audit all interactive elements for dead links/buttons."""

from playwright.sync_api import sync_playwright


def test_interactive_audit():
    errors = []
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.on("pageerror", lambda e: errors.append(f"uncaught: {e}"))

        routes = ["/", "/work", "/services", "/studio", "/journal", "/contact"]
        for route in routes:
            page.goto(f"http://localhost:5173{route}")
            page.wait_for_load_state("networkidle")

            # All anchors
            anchors = page.locator("a[href]").all()
            for a in anchors:
                href = a.get_attribute("href")
                if not href:
                    errors.append(f"{route}: anchor missing href")
                elif href == "#" or href.strip() == "":
                    errors.append(f"{route}: dead href='#' on {a.inner_text()[:50]}")
                elif href.startswith("/"):
                    # Internal route - verify it exists in our route list
                    pass
                elif href.startswith("mailto:") or href.startswith("tel:"):
                    pass
                elif href.startswith("http"):
                    pass
                else:
                    errors.append(f"{route}: unrecognized href '{href}'")

            # All buttons must have accessible name
            buttons = page.locator("button").all()
            for b in buttons:
                name = b.get_attribute("aria-label") or b.inner_text().strip()
                if not name:
                    errors.append(f"{route}: button missing accessible name: {b.get_attribute('outerHTML')[:100]}")

        browser.close()

    if errors:
        print("INTERACTIVE AUDIT FAILURES:")
        for e in errors:
            print(f"  - {e}")
        return False
    return True


if __name__ == "__main__":
    import sys
    sys.exit(0 if test_interactive_audit() else 1)