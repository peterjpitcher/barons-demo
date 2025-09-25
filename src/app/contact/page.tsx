import Image from 'next/image';
import { ContactForm } from '@/components/forms/ContactForm';
import { contactDetails, locationHighlights, teamContacts } from '@/data/siteContent';

const transportNotes = [
  'Plenty of parking at the front and rear of the pub, with overflow on Kestrel Way.',
  'Six minutes from Woking Station by car — taxis can drop right at the Garden Room entrance.',
  'AllTrails walking route on Horsell Common is linked for pre- or post-dining strolls.',
];

const contactHero = 'https://assets.baronspubs.com/uploads/sites/2/2020/02/Barons-Pub-Company-Cricketers-exterior-22-960x540.jpg';
const contactHeroAlt = 'Exterior of The Cricketers pub with the garden terrace';

const contactGallery = [
  {
    src: 'https://assets.baronspubs.com/uploads/sites/2/2025/09/3-1600x900.jpg',
    alt: 'Guests gathered outside with drinks at dusk',
    caption: 'Garden arrivals',
  },
  {
    src: 'https://assets.baronspubs.com/uploads/sites/2/2018/09/Photo-28-04-2022-16-00-14-960x540.jpg',
    alt: 'Garden Room doors opening onto the terrace',
    caption: 'Garden Room entrance',
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto mt-16 mb-24 w-full max-w-6xl space-y-10 rounded-3xl border surface-card px-4 py-12 shadow-sm sm:mt-20 sm:mb-28 sm:px-6">
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
          <p className="absolute bottom-4 left-4 font-display text-sm uppercase tracking-[0.3em] text-white">Contact</p>
        </div>
        <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Visitor details</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-primary sm:text-4xl">Find The Cricketers</h1>
        <p className="mt-4 text-sm text-muted">
          Directions copy lifted from the current site, condensed to fit this streamlined layout. The full build will
          embed an interactive map, Google directions and a live accessibility guide.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="rounded-3xl border border-[var(--surface-border)] bg-white p-6 shadow-sm">
          <h2 className="font-display text-xl font-semibold text-primary">Send us a message</h2>
          <p className="mt-2 text-sm text-muted">Our managers monitor enquiries throughout service and will respond quickly.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-[var(--surface-border)] bg-white p-6 shadow-sm">
            <h3 className="font-display text-lg font-semibold text-primary">Visit details</h3>
            <p className="mt-3 text-sm text-muted">{contactDetails.address}</p>
            <p className="mt-2 text-sm text-muted">Tel: {contactDetails.phone}</p>
            <p className="mt-1 text-sm text-muted">Email: {contactDetails.email}</p>
            <div className="mt-4">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-subtle">Opening hours</h4>
              <ul className="mt-2 space-y-1 text-sm text-muted">
                {contactDetails.openingHours.map((slot) => (
                  <li key={slot}>{slot}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-subtle">
              {contactDetails.socials.map((social) => (
                <span key={social.label}>{social.label}</span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-[var(--surface-border)] bg-white p-6 shadow-sm">
            <h3 className="font-display text-lg font-semibold text-primary">Key people</h3>
            <ul className="mt-3 space-y-3 text-sm text-muted">
              {teamContacts.map((contact) => (
                <li key={contact.role}>
                  <span className="font-semibold text-primary">{contact.role}</span> — {contact.name} · {contact.email}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {contactGallery.map((shot) => (
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
        </div>
      </section>

      <section className="rounded-3xl border border-[var(--surface-border)] bg-white p-6 shadow-sm">
        <h2 className="font-display text-xl font-semibold text-primary">Getting here</h2>
        <p className="text-sm text-muted">
          If you haven’t visited before, don’t rely solely on sat nav — guests often end up exploring Horsell Common.
          Use these cues in the full site to launch Google Maps or request directions.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
          {transportNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-[var(--surface-border)] bg-white p-6 shadow-sm">
        <h2 className="font-display text-xl font-semibold text-primary">Why guests linger</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
          {locationHighlights.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
