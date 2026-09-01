#!/usr/bin/env python3
"""Playwright test suite for Foldline site."""

import sys
import os

# Add scripts dir to path for with_server if needed
sys.path.insert(0, os.path.dirname(__file__))

from playwright.sync_api import sync_playwright


def test_routes():
    """Smoke test: all routes load without console errors."""
    errors = []
    warnings = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        page.on("console", lambda m: (errors if m.type == "error" else warnings).append(m.text)
                if m.type in ("error", "warning") else None)
        page.on("pageerror", lambda e: errors.append(f"uncaught: {e}"))
        page.on("requestfailed", lambda r: errors.append(f"{r.method} {r.url} — {r.failure}"))

        routes = [
            ("/", "Foldline \u2014 Design & Technology Studio"),
            ("/work", "Work \u2014 Foldline"),
            ("/services", "Services \u2014 Foldline"),
            ("/studio", "Studio \u2014 Foldline"),
            ("/journal", "Journal \u2014 Foldline"),
            ("/contact", "Contact \u2014 Foldline"),
        ]

        for route, expected_title in routes:
            page.goto(f"http://localhost:5173{route}")
            page.wait_for_load_state("networkidle")
            assert page.title() == expected_title, f"{route}: title '{page.title()}' != '{expected_title}'"
            # Check for h1
            h1 = page.locator("h1").first
            assert h1.count() > 0, f"{route}: missing h1"
            print(f"  ✓ {route}")

        browser.close()

    if errors:
        print("CONSOLE ERRORS:")
        for e in errors:
            print(f"  - {e}")
        return False
    return True


if __name__ == "__main__":
    ok = test_routes()
    sys.exit(0 if ok else 1)