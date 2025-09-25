import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

const faqs = [
  {
    question: 'When does the Barons Club launch?',
    answer:
      'The digital card will launch alongside the new website. Existing Diners Card holders will be automatically migrated.',
  },
  {
    question: 'How do I earn rewards?',
    answer:
      'Scan your QR code whenever you dine. Visits and spend unlock food discounts, birthday treats and invite-only events.',
  },
  {
    question: 'Is there a membership fee?',
    answer:
      'No — sign up is free. Selected premium experiences (festive showcases, supper clubs) may have ticket prices.',
  },
];

export const metadata: Metadata = {
  title: 'Barons Club | The Cricketers',
  description:
    'Discover the Barons Club loyalty programme — rewards, exclusive events and first access to pods across the Barons Family.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function BaronsClubPage() {
  return (
    <div className="mx-auto mt-10 mb-16 w-full max-w-6xl space-y-10 rounded-3xl border border-[#d8e1ea] bg-white/95 px-4 py-12 shadow-sm sm:mt-14 sm:mb-20 sm:px-6">
      <div className="relative h-56 overflow-hidden rounded-3xl shadow-sm sm:h-64">
        <Image
          src="https://assets.baronspubs.com/uploads/sites/2/2025/09/3-1600x900.jpg"
          alt="Guests raising glasses during a Barons Club celebration"
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
      </div>
      <header className="max-w-3xl">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-[#637c8c]">Loyalty</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">Welcome to the Barons Club</h1>
        <p className="mt-4 text-sm text-slate-600">
          The Barons Club replaces the Diners Card with a mobile membership that works across every venue in the family.
          Unlock instant savings, surprise rewards and invites to our favourite celebrations.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-[#cdd8e1] bg-white p-6 shadow-sm">
          <h2 className="font-display text-xl font-semibold text-slate-900">Member perks</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>33% off food Monday to Thursday across all Barons pubs.</li>
            <li>Birthday bubbles and dessert on us, every year.</li>
            <li>Priority booking windows for pods, festive dining and brunch clubs.</li>
            <li>Early access to tasting menus, live music nights and limited ticket events.</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-[#cdd8e1] bg-white p-6 shadow-sm">
          <h2 className="font-display text-xl font-semibold text-slate-900">How it works</h2>
          <ol className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Sign up online or at any Barons venue — no plastic card required.</li>
            <li>Save the digital pass to your wallet and scan with every visit.</li>
            <li>Watch rewards appear instantly and redeem them whenever you dine.</li>
          </ol>
          <Link
            href="/book"
            className="mt-4 inline-flex items-center rounded-full bg-[#637c8c] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4f6574]"
          >
            Book your next visit
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-[#cdd8e1] bg-white p-6 shadow-sm">
        <h2 className="font-display text-xl font-semibold text-slate-900">Frequently asked questions</h2>
        <dl className="mt-4 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <dt className="font-semibold text-slate-900">{faq.question}</dt>
              <dd className="text-sm text-slate-600">{faq.answer}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-xs text-slate-500">
          More detailed terms will appear here post-launch, including how to opt out, data usage and spending limits.
        </p>
      </section>
    </div>
  );
}
