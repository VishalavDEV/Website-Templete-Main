#!/usr/bin/env python3
"""Accessibility tests: axe-core + keyboard walk + focus visibility."""

from playwright.sync_api import sync_playwright


def test_a11y():
    errors = []
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        
        # Test in both light and dark + reduced motion
        for scheme in ["light", "dark"]:
            for reduced in [False, True]:
                ctx = browser.new_context(
                    color_scheme=scheme,
                    reduced_motion="reduce" if reduced else "no-preference",
                    viewport={"width": 1440, "height": 900},
                )
                page = ctx.new_page()
                page.on("pageerror", lambda e: errors.append(f"uncaught: {e}"))

                routes = ["/", "/work", "/services", "/studio", "/journal", "/contact"]
                for route in routes:
                    page.goto(f"http://localhost:5173{route}")
                    page.wait_for_load_state("networkidle")

                    # axe-core
                    page.add_script_tag(url="https://cdn.jsdelivr.net/npm/axe-core@4/axe.min.js")
                    result = page.evaluate("async () => await axe.run()")
                    violations = [(v["id"], v["impact"], len(v["nodes"])) for v in result["violations"]]
                    if violations:
                        for v in violations:
                            errors.append(f"[{scheme}/{reduced}] {route}: axe {v}")

                    # Keyboard focus visibility
                    for _ in range(35):
                        page.keyboard.press("Tab")
                    focusables = page.evaluate("""() => {
                        const el = document.activeElement;
                        if (!el || el === document.body) return null;
                        const s = getComputedStyle(el);
                        return {tag: el.tagName, name: (el.ariaLabel || el.innerText || '').slice(0,40),
                                outline: s.outlineStyle, ring: s.boxShadow !== 'none'};
                    }""")
                    if focusables and focusables["outline"] == "none" and not focusables["ring"]:
                        errors.append(f"[{scheme}/{reduced}] {route}: focus invisible on {focusables}")

                ctx.close()

        browser.close()

    if errors:
        print("A11Y FAILURES:")
        for e in errors:
            print(f"  - {e}")
        return False
    return True


if __name__ == "__main__":
    import sys
    sys.exit(0 if test_a11y() else 1)