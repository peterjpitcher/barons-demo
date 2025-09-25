'use client';

import { useState } from 'react';
import { bookingAreas, bookingOccasions } from '@/data/siteContent';

const timeSlots = ['09:00', '11:30', '13:00', '15:00', '17:30', '19:30', '21:00'];

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    console.info('[Booking enquiry]', payload);
    setSubmitted(true);
    event.currentTarget.reset();
    window.setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="booking-name" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Name
          </label>
          <input
            id="booking-name"
            name="name"
            type="text"
            required
            placeholder="Alex guest"
            className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 text-sm text-primary shadow-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="booking-email" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Email
          </label>
          <input
            id="booking-email"
            name="email"
            type="email"
            required
            placeholder="alex@example.com"
            className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 text-sm text-primary shadow-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="booking-phone" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Phone
          </label>
          <input
            id="booking-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="01483 762363"
            className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 text-sm text-primary shadow-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="booking-party" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Party size
          </label>
          <input
            id="booking-party"
            name="partySize"
            type="number"
            min={1}
            max={20}
            required
            placeholder="4"
            className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 text-sm text-primary shadow-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="booking-date" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Date
          </label>
          <input
            id="booking-date"
            name="date"
            type="date"
            required
            className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 text-sm text-primary shadow-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="booking-time" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Time
          </label>
          <select
            id="booking-time"
            name="time"
            required
            className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 text-sm text-primary shadow-sm"
            defaultValue=""
          >
            <option value="" disabled>
              Choose a seating
            </option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="booking-area" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Preferred area
          </label>
          <select
            id="booking-area"
            name="area"
            required
            className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 text-sm text-primary shadow-sm"
            defaultValue=""
          >
            <option value="" disabled>
              Select an area
            </option>
            {bookingAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="booking-occasion" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Occasion
          </label>
          <select
            id="booking-occasion"
            name="occasion"
            className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 text-sm text-primary shadow-sm"
            defaultValue="Casual lunch"
          >
            {bookingOccasions.map((occasion) => (
              <option key={occasion} value={occasion}>
                {occasion}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2 flex flex-col gap-2">
          <label htmlFor="booking-notes" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Notes for the team
          </label>
          <textarea
            id="booking-notes"
            name="notes"
            rows={4}
            placeholder="Allergies, accessibility needs, celebrations..."
            className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 text-sm text-primary shadow-sm"
          />
        </div>
      </div>
      <label className="flex items-start gap-3 text-xs text-muted">
        <input type="checkbox" name="clubOptIn" className="mt-1" />
        Keep me posted with Barons Club perks and local events.
      </label>
      <button type="submit" className="button-accent inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold">
        {submitted ? 'Request received — team will confirm soon' : 'Check availability'}
      </button>
      <p className="text-xs text-muted">
        Submissions route to the CRM in production; confirmations and deposits will be automated from there.
      </p>
    </form>
  );
}
