import Image from 'next/image';
import { privateSpaces } from '@/data/siteContent';

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

export default function PrivateHirePage() {
  return (
    <div className="mx-auto mt-10 mb-16 w-full max-w-6xl space-y-10 rounded-3xl border border-[#d8e1ea] bg-white/95 px-4 py-12 shadow-sm sm:mt-14 sm:mb-20 sm:px-6">
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
        </div>
        <p className="font-display text-sm uppercase tracking-[0.2em] text-slate-500">Private Hire · Signature Spaces</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">Spaces built for celebrations</h1>
        <p className="mt-4 text-sm text-slate-600">
          The finished experience will blend photography, availability info and live enquiry forms. Here we&apos;re
          presenting abridged descriptions so stakeholders can visualise the layout and user journey.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-4">
        {privateSpaces.map((space) => (
          <div key={space.name} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-40">
              <Image
                src={space.image}
                alt={space.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 22vw"
                className="object-cover"
              />
              <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#273640]">
                {space.capacity}
              </div>
            </div>
            <div className="p-6">
              <h2 className="font-display text-xl font-semibold text-slate-900">{space.name}</h2>
              <p className="mt-3 text-sm text-slate-600">{space.blurb}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-display text-xl font-semibold text-slate-900">Popular packages</h2>
          <ul className="mt-3 space-y-3 text-sm text-slate-600">
            {packages.map((pack) => (
              <li key={pack.title} className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">{pack.title}</p>
                <p>{pack.detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-display text-xl font-semibold text-slate-900">FAQs</h2>
          <dl className="mt-4 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-semibold text-slate-900">{faq.question}</dt>
                <dd className="text-sm text-slate-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-display text-xl font-semibold text-slate-900">Event timeline</h2>
        <ol className="mt-3 space-y-2 text-sm text-slate-600">
          {processSteps.map((step, index) => (
            <li key={step}>
              <span className="font-semibold text-slate-900">{index + 1}.</span> {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-3xl border border-dashed border-slate-300 bg-slate-50/70 p-6">
        <h2 className="font-display text-xl font-semibold text-slate-900">Enquiry form placeholder</h2>
        <p className="mt-3 text-sm text-slate-600">
          In the production build this space will host the private hire form integrated with the Barons CRM. Here we
          describe the intent and keep the layout clean.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {['Name', 'Email', 'Phone', 'Preferred Date'].map((label) => (
            <div key={label} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-400">
              {label} · input forthcoming
            </div>
          ))}
          <div className="sm:col-span-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-400">
            Event details textarea placeholder
          </div>
        </div>
      </section>
    </div>
  );
}
