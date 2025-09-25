import Image from 'next/image';
import { familyVenues } from '@/data/siteContent';

const familyHero = 'https://assets.baronspubs.com/uploads/sites/2/2025/09/3-1600x900.jpg';
const familyHeroAlt = 'Barons team and guests enjoying the garden together';

const pillars = [
  {
    title: 'Shared loyalty',
    description: 'Barons Diners Card rewards regulars with 33% off food and tailored offers across every pub.',
  },
  {
    title: 'Consistent experience',
    description: 'Menus, service steps and brand visuals align while leaving space for each location’s personality.',
  },
  {
    title: 'Centralised marketing',
    description: 'Campaigns span the network — brunch launches, supper clubs and festive packages all roll out together.',
  },
];

export default function BaronsFamilyPage() {
  return (
    <div className="mx-auto mt-10 mb-16 w-full max-w-6xl space-y-10 rounded-3xl border border-[#d8e1ea] bg-white/95 px-4 py-12 shadow-sm sm:mt-14 sm:mb-20 sm:px-6">
      <header className="max-w-5xl space-y-6">
        <div className="relative h-56 overflow-hidden rounded-3xl shadow-sm sm:h-64">
          <Image
            src={familyHero}
            alt={familyHeroAlt}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        </div>
        <p className="font-display text-sm uppercase tracking-[0.2em] text-slate-500">Barons Family · Group Overview</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">One family, eleven destinations</h1>
        <p className="mt-4 text-sm text-slate-600">
          This page showcases the storytelling module that will introduce the wider Barons portfolio. For now we share
          five flagship venues and the brand pillars we&apos;ll expand upon in the full build.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {familyVenues.map((venue) => (
          <div key={venue.name} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-40">
              <Image
                src={venue.image}
                alt={venue.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent p-4">
                <p className="font-display text-lg font-semibold text-white">{venue.name}</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-slate-600">{venue.description}</p>
              <p className="mt-4 text-xs uppercase tracking-wide text-slate-500">Full carousel coming soon</p>
            </div>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-display text-xl font-semibold text-slate-900">Brand pillars</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl bg-slate-50 p-4">
              <h3 className="font-semibold text-slate-900">{pillar.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-dashed border-slate-300 bg-slate-50/70 p-6">
        <h2 className="font-display text-xl font-semibold text-slate-900">Where we’ll go next</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
          <li>Interactive map plotting each Barons pub with filters (family-friendly, live music, countryside walks).</li>
          <li>Centralised news feed pulling stories and events from all venues.</li>
          <li>Loyalty sign-up connected to CRM audiences with geo-personalised campaigns.</li>
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-display text-xl font-semibold text-slate-900">Group call to action</h2>
        <p className="mt-3 text-sm text-slate-600">
          The complete build will encourage guests to explore nearby venues, plan Barons trails and share experiences on
          social. Use this space to outline how we evolve the brand story beyond a single pub.
        </p>
        <p className="mt-4 text-sm text-slate-600">
          We&apos;ll also surface career opportunities and supplier stories here, reinforcing the group culture. Expect links
          to jobs.baronspubs.com, behind-the-scenes features and sustainability commitments.
        </p>
      </section>
    </div>
  );
}
