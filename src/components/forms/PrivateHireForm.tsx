'use client';

import { useState } from 'react';
import { hireBudgets, hireOccasions, hireTimings, privateSpaces } from '@/data/siteContent';

export function PrivateHireForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, unknown> = Object.fromEntries(formData.entries());
    payload['spaces'] = formData.getAll('spaces');
    console.info('[Private hire enquiry]', payload);
    setSubmitted(true);
    form.reset();
    window.setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="hire-name" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Name
          </label>
          <input
            id="hire-name"
            name="name"
            type="text"
            required
            placeholder="Georgia Cairns"
            className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 text-sm text-primary shadow-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="hire-email" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Email
          </label>
          <input
            id="hire-email"
            name="email"
            type="email"
            required
            placeholder="georgia@example.com"
            className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 text-sm text-primary shadow-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="hire-phone" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Phone
          </label>
          <input
            id="hire-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="01252 783553"
            className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 text-sm text-primary shadow-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="hire-occasion" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Occasion
          </label>
          <select
            id="hire-occasion"
            name="occasion"
            required
            defaultValue=""
            className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 text-sm text-primary shadow-sm"
          >
            <option value="" disabled>
              Select an occasion
            </option>
            {hireOccasions.map((occasion) => (
              <option key={occasion} value={occasion}>
                {occasion}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="hire-date" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Preferred date
          </label>
          <input
            id="hire-date"
            name="date"
            type="date"
            className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 text-sm text-primary shadow-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="hire-start" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Start time
          </label>
          <input
            id="hire-start"
            name="startTime"
            type="time"
            className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 text-sm text-primary shadow-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="hire-guests" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Guest numbers
          </label>
          <input
            id="hire-guests"
            name="guests"
            type="number"
            min={6}
            placeholder="28"
            className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 text-sm text-primary shadow-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="hire-budget" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Indicative budget
          </label>
          <select
            id="hire-budget"
            name="budget"
            defaultValue=""
            className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 text-sm text-primary shadow-sm"
          >
            <option value="" disabled>
              Select
            </option>
            {hireBudgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
      </div>
      <fieldset className="flex flex-col gap-3 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface-alt)] p-4">
        <legend className="text-xs font-semibold uppercase tracking-wide text-muted">Spaces of interest</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {privateSpaces.map((space) => (
            <label key={space.name} className="flex items-start gap-3 text-sm text-muted">
              <input type="checkbox" name="spaces" value={space.name} className="mt-1" />
              {space.name}
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset className="flex flex-col gap-3 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface-alt)] p-4">
        <legend className="text-xs font-semibold uppercase tracking-wide text-muted">Timing</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {hireTimings.map((timing) => (
            <label key={timing} className="flex items-center gap-3 text-sm text-muted">
              <input type="radio" name="timing" value={timing} />
              {timing}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="flex flex-col gap-2">
        <label htmlFor="hire-notes" className="text-xs font-semibold uppercase tracking-wide text-muted">
          Event details
        </label>
        <textarea
          id="hire-notes"
          name="notes"
          rows={4}
          placeholder="Tell us about the celebration, styling ideas, menu preferences..."
          className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 text-sm text-primary shadow-sm"
        />
      </div>
      <div className="space-y-2 text-xs text-muted">
        <label className="flex items-start gap-3">
          <input type="checkbox" name="marketingConsent" className="mt-1" />
          I consent to marketing communications.
        </label>
        <label className="flex items-start gap-3">
          <input type="checkbox" name="joinBaronsClub" className="mt-1" />
          I want to join the Barons Club.
        </label>
        <p className="pl-6 text-[11px] text-muted">
          Guests receive styling tips, sample menus and exclusive hire offers first.
        </p>
      </div>
      <button type="submit" className="button-accent inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold">
        {submitted ? 'Thanks — the team will respond within 24 hours' : 'Send enquiry'}
      </button>
      <p className="text-xs text-muted">
        Our events specialists will be in touch shortly with availability, styling ideas and next steps.
      </p>
    </form>
  );
}
