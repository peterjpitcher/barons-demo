'use client';

import { useState } from 'react';

const enquiryTypes = ['General enquiry', 'Booking follow-up', 'Private hire', 'Barons Club', 'Press'];
const contactPreferences = ['Email', 'Phone', 'Either'];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, unknown> = Object.fromEntries(formData.entries());
    console.info('[General enquiry]', payload);
    setSubmitted(true);
    form.reset();
    window.setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 text-sm text-primary shadow-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 text-sm text-primary shadow-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-phone" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Phone
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="Optional"
            className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 text-sm text-primary shadow-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-type" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Enquiry type
          </label>
          <select
            id="contact-type"
            name="type"
            defaultValue="General enquiry"
            className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 text-sm text-primary shadow-sm"
          >
            {enquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-preference" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Preferred contact method
          </label>
          <select
            id="contact-preference"
            name="preference"
            defaultValue="Email"
            className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 text-sm text-primary shadow-sm"
          >
            {contactPreferences.map((pref) => (
              <option key={pref} value={pref}>
                {pref}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-wide text-muted">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          placeholder="Tell us how we can help"
          className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 text-sm text-primary shadow-sm"
        />
      </div>
      <label className="flex items-start gap-3 text-xs text-muted">
        <input type="checkbox" name="clubOptIn" className="mt-1" />
        Keep me in the loop with news from The Barons Family.
      </label>
      <button type="submit" className="button-accent inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold">
        {submitted ? 'Message sent — thank you' : 'Send message'}
      </button>
      <p className="text-xs text-muted">
        In the production build this routes live into the CRM with auto responder and ticketing.
      </p>
    </form>
  );
}
