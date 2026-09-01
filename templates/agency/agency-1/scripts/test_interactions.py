#!/usr/bin/env python3
"""Test interactive elements: nav, mobile menu, filters, forms, carousel."""

from playwright.sync_api import sync_playwright


def test_interactions():
    errors = []
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.on("pageerror", lambda e: errors.append(f"uncaught: {e}"))
        page.on("requestfailed", lambda r: errors.append(f"{r.method} {r.url} — {r.failure}"))

        page.goto("http://localhost:5173/")
        page.wait_for_load_state("networkidle")

        # Nav links
        for href in ["/work", "/services", "/studio", "/journal", "/contact"]:
            page.locator(f'nav a[href="{href}"]').first.click()
            page.wait_for_load_state("networkidle")
            assert page.url.endswith(href)
            print(f"  ✓ Nav {href}")
            page.goto("http://localhost:5173/")
            page.wait_for_load_state("networkidle")

        # Mobile menu open/close
        page.set_viewport_size({"width": 390, "height": 844})
        page.locator('nav button[aria-label="Open menu"]').click()
        page.wait_for_timeout(300)
        assert page.locator("#mobile-menu").is_visible()
        page.keyboard.press("Escape")
        page.wait_for_timeout(200)
        assert not page.locator("#mobile-menu").is_visible()
        print("  ✓ Mobile menu open/close/Esc")

        page.set_viewport_size({"width": 1440, "height": 900})
        page.goto("http://localhost:5173/work")
        page.wait_for_load_state("networkidle")

        # Work filters
        for cat in ["All", "Branding", "Digital", "Motion"]:
            page.locator(f'button:has-text("{cat}")').click()
            page.wait_for_timeout(150)
            count = page.locator('[role="status"]').inner_text().strip()
            print(f"  ✓ Filter {cat}: {count}")

        # Case study navigation
        page.locator('a[data-cursor="view"]').first.click()
        page.wait_for_load_state("networkidle")
        assert "/work/" in page.url
        print("  ✓ Case study link")

        # Services accordion
        page.goto("http://localhost:5173/services")
        page.wait_for_load_state("networkidle")
        buttons = page.locator('button[aria-expanded]').all()
        if buttons:
            buttons[0].click()
            page.wait_for_timeout(200)
            assert buttons[0].get_attribute("aria-expanded") == "true"
            buttons[0].click()
            page.wait_for_timeout(150)
        print("  ✓ Services accordion")

        # Contact form invalid -> valid -> success
        page.goto("http://localhost:5173/contact")
        page.wait_for_load_state("networkidle")
        page.locator('button[type="submit"]').click()
        page.wait_for_timeout(150)
        assert page.locator('p:text("Your name is required")').is_visible()
        page.locator('#name').fill("Test User")
        page.locator('#email').fill("test@example.com")
        page.locator('#message').fill("This is a test message for the form.")
        page.locator('#budget').select_option("25–75k")
        page.locator('button[type="submit"]').click()
        page.wait_for_timeout(1200)
        assert page.locator('h2:text("Thanks")').is_visible()
        print("  ✓ Contact form validation + success")

        # Reset form
        page.locator('button:has-text("Send another message")').click()
        page.wait_for_timeout(200)
        assert page.locator('#name').input_value() == ""
        print("  ✓ Form reset")

        browser.close()

    if errors:
        print("ERRORS:")
        for e in errors:
            print(f"  - {e}")
        return False
    return True


if __name__ == "__main__":
    import sys
    sys.exit(0 if test_interactions() else 1)