'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useStyle } from '@/context/StyleContext';

const benefits = [
  '33% off food Monday to Thursday across the Barons Family',
  'Birthday treats and member-only tasting events',
  'Priority access to pod launches, supper clubs and festive bookings',
];

const heroImage = 'https://assets.baronspubs.com/uploads/sites/2/2025/09/3-1600x900.jpg';
const heroAlt = 'Friends celebrating with cocktails in the garden pods';

export function BaronsClubSignup() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const { theme } = useStyle();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder for CRM integration
    console.info('[Barons Club signup]', { email });
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border surface-card shadow-sm">
      <div className="grid gap-0 lg:grid-cols-[1.15fr,1fr]">
        <div className="px-6 py-12 sm:px-8 sm:py-14">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Barons Club</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-primary">Loyalty, levelled up</h2>
          <p className="mt-3 text-sm text-muted">
            The Barons Club replaces the Diners Card with digital membership, instant rewards and personalised updates.
            Sign up below to see how the finished experience will feel.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div className="relative flex items-center justify-center px-6 py-12 sm:px-8 sm:py-14">
          <Image
            src={heroImage}
            alt={heroAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(210deg, ${theme.heroOverlay.from} 0%, ${theme.heroOverlay.to} 100%)`,
              opacity: 0.95,
            }}
          />
          <form
            onSubmit={handleSubmit}
            className="relative z-10 flex w-full max-w-md flex-col gap-5 rounded-2xl bg-white/95 p-7 shadow-lg"
          >
            <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Join now</p>
            <label className="text-sm font-semibold text-muted" htmlFor="club-email">
              Email address
            </label>
            <input
              id="club-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="rounded-lg border px-4 py-3 text-sm text-primary outline-none focus:ring-2"
              style={{
                borderColor: 'var(--surface-border)',
                backgroundColor: 'var(--surface)',
                boxShadow: 'none',
              }}
            />
            <button type="submit" className="button-accent inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold">
              {submitted ? 'Thanks for registering!' : 'Join the Barons Club'}
            </button>
            <p className="text-xs text-muted">
              GDPR-compliant consent copy will sit here. Members can choose venues and interests to personalise updates.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
