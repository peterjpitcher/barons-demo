'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'christmas-lightbox-dismissed-at';
const RETENTION_MS = 7 * 24 * 60 * 60 * 1000;
const OPEN_DELAY_MS = 4000;

export function ChristmasLightbox() {
  const [hasMounted, setHasMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const now = Date.now();
    let dismissedAt: number | null = null;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        dismissedAt = Number.parseInt(stored, 10);
      }
    } catch {
      // If storage is blocked we simply show the lightbox once per session.
    }

    if (dismissedAt && now - dismissedAt < RETENTION_MS) {
      return;
    }

    const timer = window.setTimeout(() => {
      setOpen(true);
    }, OPEN_DELAY_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, [hasMounted]);

  const persistDismissal = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, Date.now().toString());
    } catch {
      // Ignore storage errors, retention just falls back to session scope.
    }
  };

  const handleDismiss = () => {
    setOpen(false);
    persistDismissal();
  };

  const handleCtaClick = () => {
    persistDismissal();
  };

  if (!hasMounted || !open) {
    return null;
  }

  return (
    <div className="christmas-lightbox fixed inset-0 z-[70] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="christmas-lightbox-title"
        className="lightbox-panel relative z-10 w-full max-w-lg rounded-3xl border border-white/40 bg-white/95 p-8 shadow-xl"
      >
        <button
          type="button"
          onClick={handleDismiss}
          className="absolute right-4 top-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted hover:text-primary"
          aria-label="Dismiss Christmas Day lunch offer"
        >
          Close
        </button>
        <p className="font-display text-xs uppercase tracking-[0.3em] text-accent">Christmas Day Lunch</p>
        <h2 id="christmas-lightbox-title" className="mt-3 font-display text-3xl font-semibold text-primary">
          Reserve your Christmas Day table
        </h2>
        <p className="mt-4 text-sm text-muted">
          Our Christmas Day lunch is £95 per person, paired with all the trimmings, welcome fizz and fireside desserts.
          Tables are limited across the day — secure yours now to avoid the waiting list.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/christmas"
            onClick={handleCtaClick}
            className="button-accent inline-flex flex-1 justify-center rounded-full px-5 py-3 text-sm font-semibold shadow-sm"
          >
            Book Christmas Day lunch
          </Link>
          <button
            type="button"
            onClick={handleDismiss}
            className="button-outline inline-flex flex-1 justify-center rounded-full px-5 py-3 text-sm font-semibold"
          >
            Remind me later
          </button>
        </div>
        <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-subtle">
          Offer remembered for seven days after closing.
        </p>
      </div>
    </div>
  );
}
