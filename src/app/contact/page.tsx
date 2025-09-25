import Image from 'next/image';
import { contactDetails, locationHighlights } from '@/data/siteContent';

const transportNotes = [
  'Plenty of parking at the front and rear of the pub, with overflow on Kestrel Way.',
  'Six minutes from Woking Station by car — taxis can drop right at the Garden Room entrance.',
  'AllTrails walking route on Horsell Common is linked for pre- or post-dining strolls.',
];

const contactHero = 'https://assets.baronspubs.com/uploads/sites/2/2020/02/Barons-Pub-Company-Cricketers-exterior-22-960x540.jpg';
const contactHeroAlt = 'Exterior of The Cricketers pub with the garden terrace';

export default function ContactPage() {
  return (
    <div className="mx-auto mt-10 mb-16 w-full max-w-6xl space-y-10 rounded-3xl border border-[#d8e1ea] bg-white/95 px-4 py-12 shadow-sm sm:mt-14 sm:mb-20 sm:px-6">
      <header className="max-w-5xl space-y-6">
        <div className="relative h-56 overflow-hidden rounded-3xl shadow-sm sm:h-64">
          <Image
            src={contactHero}
            alt={contactHeroAlt}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
        </div>
        <p className="font-display text-sm uppercase tracking-[0.2em] text-slate-500">Contact · Visitor Details</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">Find The Cricketers</h1>
        <p className="mt-4 text-sm text-slate-600">
          Directions copy lifted from the current site, condensed to fit this streamlined layout. The full build will
          embed an interactive map, Google directions and a live accessibility guide.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-display text-xl font-semibold text-slate-900">Visit details</h2>
          <p className="mt-3 text-sm text-slate-600">{contactDetails.address}</p>
          <p className="mt-2 text-sm text-slate-600">Tel: {contactDetails.phone}</p>
          <p className="mt-1 text-sm text-slate-600">Email: {contactDetails.email}</p>
          <div className="mt-4">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Opening hours</h3>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              {contactDetails.openingHours.map((slot) => (
                <li key={slot}>{slot}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4 flex gap-4 text-sm text-slate-600">
            {contactDetails.socials.map((social) => (
              <span key={social.label}>{social.label}</span>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="relative h-48 sm:h-60">
            <Image
              src="https://assets.baronspubs.com/uploads/sites/2/2018/09/Photo-28-04-2022-16-00-14-960x540.jpg"
              alt="Garden Room entrance and terrace at The Cricketers"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
              <h2 className="font-display text-xl font-semibold text-white">Getting here</h2>
            </div>
          </div>
          <div className="p-6">
            <p className="text-sm text-slate-600">
              If you haven’t visited before, don’t rely solely on sat nav — guests often end up exploring Horsell Common.
              Use these cues in the full site to launch Google Maps or request directions.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
              {transportNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-display text-xl font-semibold text-slate-900">Why guests linger</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
          {locationHighlights.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-dashed border-slate-300 bg-slate-50/70 p-6">
        <h2 className="font-display text-xl font-semibold text-slate-900">General enquiry placeholder</h2>
        <p className="mt-3 text-sm text-slate-600">
          A slimline contact form will sit here once integrations are finalised. For now this explains the intended
          behaviour and keeps the layout consistent across the site.
        </p>
      </section>
    </div>
  );
}
