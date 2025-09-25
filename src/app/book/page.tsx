import Image from 'next/image';
import { BookingForm } from '@/components/forms/BookingForm';
import { bookingFaqs, bookingOccasions } from '@/data/siteContent';

const steps = [
  'Select party size, date and preferred dining area.',
  'Confirm contact details and optional notes (highchairs, dog-friendly tables, accessibility).',
  'Receive instant confirmation plus email reminders 24 hours prior.',
];

const futureIntegrations = [
  'Real-time table allocations via FavouriteTable or SevenRooms.',
  'Pod availability calendar with deposits handled through the CRM.',
  'Linking bookings to Diners Card profiles for personalised welcomes.',
];

const bookingGallery = [
  {
    src: 'https://assets.baronspubs.com/uploads/sites/2/2018/09/cricketers-interior-3-1600x900.jpg',
    alt: 'Dining room at The Cricketers set for lunch service',
    caption: 'Inside The Cricketers',
  },
  {
    src: 'https://assets.baronspubs.com/uploads/sites/2/2025/09/1-1600x900.jpg',
    alt: 'Heated garden pod lit with candles as evening begins',
    caption: 'Garden pods',
  },
  {
    src: 'https://assets.baronspubs.com/uploads/sites/2/2022/01/Photo-07-01-2022-10-44-35-960x540.jpg',
    alt: 'Sunday roast dishes being plated',
    caption: 'Sunday roast spread',
  },
];

export default function BookPage() {
  return (
    <div className="mx-auto mt-16 mb-24 w-full max-w-6xl space-y-10 rounded-3xl border surface-card px-4 py-12 shadow-sm sm:mt-20 sm:mb-28 sm:px-6">
      <div className="relative h-56 overflow-hidden rounded-3xl shadow-sm sm:h-64">
        <Image
          src="https://assets.baronspubs.com/uploads/sites/2/2018/09/cricketers-interior-3-1600x900.jpg"
          alt="Restaurant interior ready for reservations"
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <p className="absolute bottom-4 left-4 font-display text-sm uppercase tracking-[0.3em] text-white">Bookings</p>
      </div>

      <header className="max-w-4xl space-y-5">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Book a table</p>
        <h1 className="font-display text-3xl font-semibold text-primary sm:text-4xl">Reserve your visit to The Cricketers</h1>
        <p className="text-sm text-muted">
          This booking journey shows how we will blend live availability with personalised touches. Everything below can
          plug straight into FavouriteTable or SevenRooms once we connect the APIs.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="rounded-3xl border border-[var(--surface-border)] bg-white p-6 shadow-sm">
          <h2 className="font-display text-xl font-semibold text-primary">Request a table</h2>
          <p className="mt-2 text-sm text-muted">Tell us when you&apos;d like to join us and the team will confirm right away.</p>
          <div className="mt-6">
            <BookingForm />
          </div>
        </div>
        <aside className="space-y-6">
          <div className="rounded-3xl border border-[var(--surface-border)] bg-white p-6 shadow-sm">
            <h3 className="font-display text-lg font-semibold text-primary">Guest FAQs</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
              {bookingFaqs.map((faq) => (
                <li key={faq.question}>
                  <span className="font-semibold text-primary">{faq.question}</span> — {faq.answer}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-[var(--surface-border)] bg-white p-6 shadow-sm">
            <h3 className="font-display text-lg font-semibold text-primary">Popular occasions</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {bookingOccasions.map((occasion) => (
                <span key={occasion} className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {occasion}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {bookingGallery.map((shot) => (
              <figure key={shot.src} className="relative h-40 overflow-hidden rounded-3xl shadow-sm">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-3">
                  <figcaption className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white">
                    {shot.caption}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </aside>
      </section>

      <section className="rounded-3xl border border-[var(--surface-border)] bg-white p-6 shadow-sm">
        <h2 className="font-display text-xl font-semibold text-primary">Future booking flow</h2>
        <ol className="mt-3 space-y-3 text-sm text-muted">
          {steps.map((step, index) => (
            <li key={step} className="flex gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent-soft)] text-xs font-semibold text-accent">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-3xl border border-dashed border-[var(--surface-border)] bg-[var(--surface-alt)] p-6">
        <h2 className="font-display text-xl font-semibold text-primary">Tech integration roadmap</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
          {futureIntegrations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 text-xs uppercase tracking-[0.25em] text-subtle">Ready to wire straight into the CRM stack.</p>
      </section>
    </div>
  );
}
