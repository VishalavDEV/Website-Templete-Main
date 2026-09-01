import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Page } from "@/components/layout/Page";
import { SplitHeading } from "@/components/ui/SplitWords";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { btnPrimary, btnGhost } from "@/components/ui/Buttons";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

type FormData = {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialData: FormData = {
  name: "",
  email: "",
  company: "",
  budget: "",
  message: "",
};

const budgets = [
  "< 25k",
  "25–75k",
  "75–150k",
  "150k+",
];

function validate(data: FormData): FormErrors {
  const e: FormErrors = {};
  if (!data.name.trim()) e.name = "Your name is required";
  if (!data.email.trim()) e.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    e.email = "Enter a valid email address";
  if (!data.message.trim()) e.message = "Tell us about the project";
  return e;
}

export function ContactPage() {
  useDocumentTitle("Contact");
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const statusId = "form-status";

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((err) => ({ ...err, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(data);
    if (Object.keys(errs).length) {
      setErrors(errs);
      const first = Object.keys(errs)[0];
      (document.querySelector(`[name="${first}"]`) as HTMLElement | null)?.focus();
      return;
    }
    setStatus("sending");
    await new Promise((r) => window.setTimeout(r, 900));
    setStatus("success");
    setData(initialData);
  }

  function resetForm() {
    setData(initialData);
    setErrors({});
    setStatus("idle");
  }

  return (
    <Page curtain>
      <section className="container-x grid gap-12 py-20 sm:py-28 lg:grid-cols-12">
        {/* Left: context */}
        <div className="lg:col-span-5 lg:col-start-1">
          <SplitHeading
            as="h1"
            mode="mount"
            text="Tell us what you're making."
            className="display-xl max-w-[14ch]"
          />
          <Reveal delay={0.15}>
            <p className="body-lede mt-6">
              We take on a handful of engagements each year. If the brief is
              clear and the chemistry works, we move fast.
            </p>
          </Reveal>

          <Reveal delay={0.25} className="mt-10 space-y-5">
            <div>
              <dt className="meta-label">Email</dt>
              <dd className="mt-1">
                <a
                  href="mailto:hello@foldline.studio"
                  className="text-ink link-underline pb-0.5"
                >
                  hello@foldline.studio
                </a>
              </dd>
            </div>
            <div>
              <dt className="meta-label">Phone</dt>
              <dd className="mt-1">
                <a
                  href="tel:+14155550134"
                  className="text-ink link-underline pb-0.5"
                >
                  +1 (415) 555-0134
                </a>
              </dd>
            </div>
            <div>
              <dt className="meta-label">Studio</dt>
              <dd className="mt-1 max-w-[22ch] text-ink2">
                Pier 9, Studio 214, San Francisco, CA 94111
              </dd>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="mt-10 text-[0.9rem] text-ink2">
            <p>We typically reply within two business days.</p>
          </Reveal>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal className="bg-paper rounded-[18px] p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  role="status"
                  aria-live="polite"
                  id={statusId}
                  className="flex flex-col items-center text-center py-12"
                >
                  <svg
                    className="size-14 text-coral"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <h2 className="mt-4 display-md text-balance">
                    Thanks — we'll be in touch.
                  </h2>
                  <p className="mt-3 max-w-[42ch] text-ink2">
                    We read every brief. Expect a reply within two business
                    days.
                  </p>
                  <Magnetic strength={0.25} className="mt-8">
                    <button
                      type="button"
                      onClick={resetForm}
                      className={btnGhost}
                    >
                      Send another message
                    </button>
                  </Magnetic>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} noValidate>
                  <div
                    id={statusId}
                    role="alert"
                    aria-live="assertive"
                    className="sr-only"
                  >
                    {status === "error"
                      ? "Please fix the errors below"
                      : status === "sending"
                        ? "Sending…"
                        : ""}
                  </div>

                  <div>
                    <label htmlFor="name" className="block mb-2">
                      <span className="text-sm font-medium">Your name</span>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-err" : undefined}
                        className={`mt-1.5 w-full rounded-full border bg-transparent px-4 py-3 text-[0.95rem] transition-colors ${
                          errors.name
                            ? "border-coral focus:border-coral"
                            : "border-ink/20 focus:border-ink"
                        }`}
                      />
                      {errors.name && (
                        <p id="name-err" className="mt-1.5 text-sm text-coral">
                          {errors.name}
                        </p>
                      )}
                  </label>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="email" className="block mb-2">
                      <span className="text-sm font-medium">Email</span>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        autoComplete="email"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-err" : undefined}
                        className={`mt-1.5 w-full rounded-full border bg-transparent px-4 py-3 text-[0.95rem] transition-colors ${
                          errors.email
                            ? "border-coral focus:border-coral"
                            : "border-ink/20 focus:border-ink"
                        }`}
                      />
                      {errors.email && (
                        <p id="email-err" className="mt-1.5 text-sm text-coral">
                          {errors.email}
                        </p>
                      )}
                    </label>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="company" className="block mb-2">
                      <span className="text-sm font-medium">Company (optional)</span>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={data.company}
                        onChange={handleChange}
                        className="mt-1.5 w-full rounded-full border border-ink/20 bg-transparent px-4 py-3 text-[0.95rem] transition-colors focus:border-ink"
                      />
                    </label>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="budget" className="block mb-2">
                      <span className="text-sm font-medium">Budget range</span>
                      <select
                        id="budget"
                        name="budget"
                        value={data.budget}
                        onChange={handleChange}
                        className="mt-1.5 w-full rounded-full border border-ink/20 bg-transparent px-4 py-3 text-[0.95rem] transition-colors focus:border-ink appearance-none"
                      >
                        <option value="">Select…</option>
                        {budgets.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="message" className="block mb-2">
                      <span className="text-sm font-medium">
                        What's the project?
                      </span>
                      <textarea
                        id="message"
                        name="message"
                        value={data.message}
                        onChange={handleChange}
                        rows={5}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-err" : undefined}
                        className={`mt-1.5 w-full rounded-[18px] border bg-transparent px-4 py-3 text-[0.95rem] resize-none transition-colors ${
                          errors.message
                            ? "border-coral focus:border-coral"
                            : "border-ink/20 focus:border-ink"
                        }`}
                      />
                      {errors.message && (
                        <p id="message-err" className="mt-1.5 text-sm text-coral">
                          {errors.message}
                        </p>
                      )}
                    </label>
                  </div>

                  <div className="mt-8">
                    <Magnetic strength={0.25}>
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        aria-busy={status === "sending"}
                        className={`${btnPrimary} w-full sm:w-auto ${
                          status === "sending" ? "opacity-50 cursor-wait" : ""
                        }`}
                      >
                        {status === "sending" ? "Sending…" : "Send message"}
                      </button>
                    </Magnetic>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}