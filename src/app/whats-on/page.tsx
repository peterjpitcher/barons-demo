import Image from 'next/image';
import { sampleEvents } from '@/data/siteContent';

const whatsOnHero = 'https://assets.baronspubs.com/uploads/sites/2/2018/09/Photo-28-04-2022-16-00-14-960x540.jpg';
const whatsOnHeroAlt = 'Event setup with long tables and twinkling lights';

const filters = ['All', ...Array.from(new Set(sampleEvents.map((event) => event.category)))];

export default function WhatsOnPage() {
  return (
    <div className="mx-auto mt-16 mb-24 w-full max-w-6xl space-y-10 rounded-3xl border surface-card px-4 py-14 shadow-sm sm:mt-20 sm:mb-28 sm:px-6">
      <header className="max-w-5xl space-y-6">
        <div className="relative h-56 overflow-hidden rounded-3xl shadow-sm sm:h-64">
          <Image
            src={whatsOnHero}
            alt={whatsOnHeroAlt}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
        </div>
        <p className="font-display text-sm uppercase tracking-[0.2em] text-slate-500">What&apos;s On · Highlights</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">Sample of upcoming moments</h1>
        <p className="mt-4 text-sm text-slate-600">
          The live site will sync with the Barons events calendar. Here we highlight flagship happenings — enough to
          showcase layout, tagging and calls to action.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <span key={filter} className="rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold text-slate-600">
            {filter}
          </span>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-4">
        {sampleEvents.map((event) => (
          <article key={event.title} className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-36">
              <Image
                src={event.image ?? whatsOnHero}
                alt={event.alt ?? event.title}
                fill
                sizes="(max-width: 1024px) 100vw, 22vw"
                className="object-cover"
              />
              <div className="tag-soft absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em]">
                {event.category}
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h2 className="font-display text-xl font-semibold text-slate-900">{event.title}</h2>
              <p className="mt-2 text-xs text-slate-500">{event.date}</p>
              <p className="mt-3 flex-1 text-sm text-slate-600">{event.summary}</p>
              <p className="mt-4 text-sm font-semibold text-slate-900">Book a table · Coming soon</p>
            </div>
          </article>
        ))}
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-display text-xl font-semibold text-slate-900">Events roadmap</h2>
        <p className="mt-3 text-sm text-slate-600">
          Future iterations will include filters, pagination, and integration with CRM-driven campaigns. Placeholder copy
          here confirms the planned capabilities without requiring full data plumbing.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
          <li>Import events from Barons WordPress feed or CMS collection.</li>
          <li>Allow guests to filter by atmosphere (family, live music, seasonal).</li>
          <li>Expose enquiry or ticket buttons when available.</li>
        </ul>
      </section>
    </div>
  );
}
