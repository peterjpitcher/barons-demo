import Image from 'next/image';
import { PrivateHireForm } from '@/components/forms/PrivateHireForm';
import { privateSpaces, teamContacts } from '@/data/siteContent';

const privateHero = privateSpaces[0].image;
const privateHeroAlt = privateSpaces[0].alt;

const faqs = [
  {
    question: 'Is there a hire fee?',
    answer:
      'Garden Room: GBP 250 non-refundable hire. Pods & umbrella terrace: GBP 100 deposit redeemable against spend. Under the Tent: minimum spend agreed per event.',
  },
  {
    question: 'Can we bring our own entertainment?',
    answer:
      'Live bands are restricted, but Bluetooth speakers are available in the Garden Room and background playlists across the garden spaces.',
  },
  {
    question: 'What menus can we offer?',
    answer:
      'Set menus, buffets, BBQs and pizza feasts are all available — the full site will allow organisers to preview sample PDFs.',
  },
  {
    question: 'Do you cater for dietary requirements?',
    answer:
      'Veggie, vegan and non gluten-containing ingredient options are already built into the party menus. Our allergens app will plug in for bespoke filters.',
  },
];

const packages = [
  {
    title: 'Pods & Pizza',
    detail: 'Exclusive use of three pods plus stretch umbrella, pizza feast menu, welcome fizz and table service — ideal for 18–30 guests.',
  },
  {
    title: 'Garden Room Celebration',
    detail: 'Afternoon buffet or fork buffet, personalised signage, private bar team and patio heaters included.',
  },
  {
    title: 'Corporate Away Day',
    detail: 'Morning pastries, AV setup, breakout pods and BBQ lunch under the tent followed by lawn games.',
  },
];

const processSteps = [
  'Submit enquiry with dates, numbers and preferred space.',
  'Events team responds within 24 hours with availability and menu suggestions.',
  'Confirm booking, sign digital agreement and settle deposit via the CRM payment link.',
  'Receive automated reminders, pre-order forms and on-the-day running order.',
];

const privateGallery = [
  {
    src: 'https://assets.baronspubs.com/uploads/sites/2/2025/09/2-1600x900.jpg',
    alt: 'Garden Room styled with fairy lights and long tables',
    caption: 'Garden Room styling',
  },
  {
    src: 'https://assets.baronspubs.com/uploads/sites/2/2025/09/1-1600x900.jpg',
    alt: 'Pods and stretch umbrellas set for a party',
    caption: 'Pods & terrace',
  },
  {
    src: 'https://assets.baronspubs.com/uploads/sites/2/2021/12/IMG_3160-960x540.jpeg',
    alt: 'Chef plating a dish for a private dinner',
    caption: 'Chef-led dining',
  },
];

export default function PrivateHirePage() {
  return (
    <div className="mx-auto mt-16 mb-24 w-full max-w-6xl space-y-10 rounded-3xl border surface-card px-4 py-12 shadow-sm sm:mt-20 sm:mb-28 sm:px-6">
      <header className="max-w-5xl space-y-6">
        <div className="relative h-56 overflow-hidden rounded-3xl shadow-sm sm:h-72">
          <Image
            src={privateHero}
            alt={privateHeroAlt}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          <p className="absolute bottom-4 left-4 font-display text-sm uppercase tracking-[0.3em] text-white">Private hire</p>
        </div>
        <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Signature spaces</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-primary sm:text-4xl">Spaces built for celebrations</h1>
        <p className="mt-4 text-sm text-muted">
          The finished experience will blend photography, availability info and live enquiry forms. Here we present
          high-level details to help stakeholders visualise the layout and user journey.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="rounded-3xl border border-[var(--surface-border)] bg-white p-6 shadow-sm">
          <h2 className="font-display text-xl font-semibold text-primary">Tell us about your event</h2>
          <p className="mt-2 text-sm text-muted">Our events team responds within one working day with availability and menus.</p>
          <div className="mt-6">
            <PrivateHireForm />
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-[var(--surface-border)] bg-white p-6 shadow-sm">
            <h3 className="font-display text-lg font-semibold text-primary">Planning essentials</h3>
            <dl className="mt-3 space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-semibold text-primary">{faq.question}</dt>
                  <dd className="text-sm text-muted">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-3xl border border-[var(--surface-border)] bg-white p-6 shadow-sm">
            <h3 className="font-display text-lg font-semibold text-primary">Meet the team</h3>
            <ul className="mt-3 space-y-3 text-sm text-muted">
              {teamContacts.map((contact) => (
                <li key={contact.role}>
                  <span className="font-semibold text-primary">{contact.role}</span> — {contact.name} · {contact.email} · {contact.phone}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {privateGallery.map((shot) => (
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

      <section className="grid gap-6 lg:grid-cols-3">
        {privateSpaces.map((space) => (
          <div key={space.name} className="overflow-hidden rounded-3xl border border-[var(--surface-border)] bg-white shadow-sm">
            <div className="relative h-44">
              <Image
                src={space.image}
                alt={space.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 24vw"
                className="object-cover"
              />
              <div className="tag-soft absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
                {space.capacity}
              </div>
            </div>
            <div className="p-6">
              <h2 className="font-display text-xl font-semibold text-primary">{space.name}</h2>
              <p className="mt-3 text-sm text-muted">{space.blurb}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-[var(--surface-border)] bg-white p-6 shadow-sm">
          <h2 className="font-display text-xl font-semibold text-primary">Popular packages</h2>
          <ul className="mt-3 space-y-3 text-sm text-muted">
            {packages.map((pack) => (
              <li key={pack.title} className="rounded-2xl bg-[var(--surface-alt)] p-4">
                <p className="font-semibold text-primary">{pack.title}</p>
                <p>{pack.detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-[var(--surface-border)] bg-white p-6 shadow-sm">
          <h2 className="font-display text-xl font-semibold text-primary">Event timeline</h2>
          <ol className="mt-3 space-y-3 text-sm text-muted">
            {processSteps.map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent-soft)] text-xs font-semibold text-accent">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rounded-3xl border border-dashed border-[var(--surface-border)] bg-[var(--surface-alt)] p-6">
        <h2 className="font-display text-xl font-semibold text-primary">Roadmap for the production build</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
          <li>Integration with the CRM to trigger confirmation emails and deposit links automatically.</li>
          <li>Drag-and-drop media gallery showcasing layouts, table plans and décor inspiration.</li>
          <li>Availability calendar that highlights peak festive weeks and summer weekends.</li>
        </ul>
      </section>
    </div>
  );
}
