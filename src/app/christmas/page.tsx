import Link from 'next/link';
import type { Metadata } from 'next';
import { menuDownloads } from '@/data/menus';

export const metadata: Metadata = {
  title: 'Christmas at The Cricketers · Barons Family',
  description:
    'Discover festive dining, private parties and Christmas Day celebrations at The Cricketers. Reserve your table today.',
};

const reasonsToBook = [
  {
    title: 'Flexible festive dining',
    description: 'From cosy tables for two to full garden room takeovers, we tailor the experience around your guest list.',
  },
  {
    title: 'Seasonal menus & pairings',
    description:
      'Chef-led menus cover traditional roasts, vegan celebrations and sharing feasts. Our bar team pairs the fizz.',
  },
  {
    title: 'Dedicated event hosts',
    description:
      'Our coordinators handle timings, decorations and allergen notes so you can focus on the celebration.',
  },
];

const planningMilestones = [
  {
    title: 'Now – Secure your space',
    description: 'Choose dates across the festive diary and lock in arrival fizz or pre-orders with our planning team.',
  },
  {
    title: 'Four weeks out',
    description: 'Confirm final guest numbers and dietary notes. We will send a personalised itinerary for your party.',
  },
  {
    title: 'Event week',
    description: 'Drop off place cards or gifts, and let us manage setup on the day with a dedicated host greeting guests.',
  },
];

const festiveSlugSet = new Set([
  'christmas-celebration',
  'christmas-day-carvery',
  'festive-buffet',
  'festive-opening-hours',
]);

const festiveDownloads = menuDownloads.filter((download) => {
  const slug = download.href.replace('/pdf/', '').replace('.pdf', '');
  return festiveSlugSet.has(slug);
});

export default function ChristmasPage() {
  return (
    <div className="mx-auto mt-10 mb-24 w-full max-w-6xl space-y-16 px-4 sm:mt-12 sm:px-6">
      <section className="overflow-hidden rounded-3xl border surface-card shadow-lg">
        <div className="relative isolate grid gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-muted">Festive dining 2025</p>
            <h1 className="font-display text-4xl font-semibold text-primary sm:text-5xl">
              Christmas at The Cricketers
            </h1>
            <p className="text-base text-muted">
              Whether you are planning an office celebration, a family reunion or a festive knees-up with friends, our
              Horsell team wraps food, service and atmosphere into one seamless experience. Lock in your tables early and
              we will handle the details.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/book"
                className="button-accent inline-flex rounded-full px-5 py-3 text-sm font-semibold shadow-sm"
              >
                Book festive tables
              </Link>
              <Link
                href="/contact"
                className="button-outline inline-flex rounded-full px-5 py-3 text-sm font-semibold"
              >
                Speak to the events team
              </Link>
            </div>
          </div>
          <div className="relative h-64 rounded-3xl bg-gradient-to-br from-[#273640] via-[#32495a] to-[#637c8c] p-6 text-white shadow-inner sm:h-72 lg:h-full">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent)]" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-white/70">Countdown</p>
                <h2 className="mt-3 font-display text-2xl font-semibold">Festive diary now open</h2>
                <p className="mt-3 max-w-sm text-sm text-white/80">
                  Secure prime dates through December including Christmas Eve carvery, Christmas Day lunch and New Year
                  celebrations.
                </p>
              </div>
              <div className="space-y-2 text-sm text-white/70">
                <p>Early bird perks:</p>
                <ul className="space-y-1 text-white">
                  <li>· Complimentary arrival fizz for groups confirming before 1 November</li>
                  <li>· Reserve private spaces from 20 to 120 guests</li>
                  <li>· Pre-order drinks packages to streamline service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="space-y-3">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-muted">Why celebrate with us</p>
          <h2 className="font-display text-3xl font-semibold text-primary sm:text-4xl">Designed for festive sparkle</h2>
          <p className="max-w-3xl text-sm text-muted">
            We combine classic roasts with sparkling cocktails, flexible spaces and thoughtful touches so every party feels
            personal.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasonsToBook.map((reason) => (
            <div key={reason.title} className="rounded-3xl border surface-card p-6 shadow-sm">
              <h3 className="font-display text-xl font-semibold text-primary">{reason.title}</h3>
              <p className="mt-3 text-sm text-muted">{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-4">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-muted">Planning timeline</p>
          <h2 className="font-display text-3xl font-semibold text-primary">How we prep your celebration</h2>
          <p className="text-sm text-muted">
            From the first enquiry to the last mince pie, our events coordinators stay on-hand with check-ins and quick
            responses so nothing is missed.
          </p>
          <div className="space-y-4">
            {planningMilestones.map((milestone) => (
              <div key={milestone.title} className="rounded-3xl border border-dashed surface-card p-5 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-primary">{milestone.title}</h3>
                <p className="mt-2 text-sm text-muted">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4 rounded-3xl border surface-card p-6 shadow-sm">
          <h2 className="font-display text-3xl font-semibold text-primary">Festive menus & downloads</h2>
          <p className="text-sm text-muted">
            Share these PDFs with your team or family to collect pre-orders and plan timings.
          </p>
          <ul className="space-y-3 text-sm text-primary">
            {festiveDownloads.map((download) => (
              <li key={download.href} className="flex items-center justify-between gap-3 rounded-2xl surface-alt-card border px-4 py-3">
                <span className="font-semibold">{download.label}</span>
                <Link href={download.href} className="text-sm font-semibold text-accent hover:underline">
                  View
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/menus" className="text-sm font-semibold text-primary hover:underline">
            Explore the full menu library
          </Link>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border surface-card p-6 shadow-sm lg:grid-cols-2">
        <div className="space-y-3">
          <h2 className="font-display text-3xl font-semibold text-primary">Ready to reserve?</h2>
          <p className="text-sm text-muted">
            Call the team on <a href="tel:01483472589" className="text-primary hover:underline">01483 472 589</a> or
            email <a href="mailto:christmas@baronspubs.com" className="text-primary hover:underline">christmas@baronspubs.com</a>.
            We will confirm within one business day.
          </p>
          <p className="text-xs uppercase tracking-wide text-subtle">
            Booking terms and deposits apply for parties of eight or more.
          </p>
        </div>
        <div className="rounded-2xl border border-dashed surface-alt-card p-6 text-sm text-muted">
          <p className="font-semibold text-primary">Need a private space?</p>
          <p className="mt-2">
            The Garden Room seats up to 70 for dining with its own bar, while the heated pods and marquee cover relaxed
            drinks receptions. Let us know your preference and we will share layout options.
          </p>
          <Link href="/private-hire" className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline">
            View private hire details
          </Link>
        </div>
      </section>
    </div>
  );
}
