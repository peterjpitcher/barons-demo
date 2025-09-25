import Image from 'next/image';

const perks = [
  'Menu previews, including vegan specials and Sunday carvery line-ups.',
  'Invites to supper clubs, gin tastings and festive showcases before general release.',
  'Exclusive Diners Card offers and Barons Family staycation ideas.',
];

const roadmap = [
  'Segmented emails powered by the CRM to tailor content by nearest venue.',
  'Automated birthday treats and loyalty reminders once Diners Card IDs are captured.',
  'Integration with booking data to follow up after key visits.',
];

export default function NewsletterPage() {
  return (
    <div className="mx-auto mt-10 mb-16 w-full max-w-3xl space-y-6 rounded-3xl border border-[#d8e1ea] bg-white/95 px-4 py-12 shadow-sm sm:mt-14 sm:mb-20 sm:px-6">
      <div className="relative h-48 overflow-hidden rounded-2xl">
        <Image
          src="https://assets.baronspubs.com/uploads/sites/2/2025/09/1-1600x900.jpg"
          alt="Guests raising glasses inside a Cricketers garden pod"
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
        <p className="absolute bottom-4 left-4 font-display text-sm uppercase tracking-[0.2em] text-white">Barons Club updates</p>
      </div>
      <p className="font-display text-sm uppercase tracking-[0.2em] text-slate-500">Newsletter · Coming Soon</p>
      <h1 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">Barons Family updates</h1>
      <p className="text-sm text-slate-600">
        In the full build this page will connect directly to the CRM capture form with first name, email, birthday and
        consent fields. Until that goes live, it reiterates the value proposition, who receives updates, and the roadmap
        for personalisation.
      </p>
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-display text-xl font-semibold text-slate-900">Why guests subscribe</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
          {perks.map((perk) => (
            <li key={perk}>{perk}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50/80 p-6 text-sm text-slate-600">
        <h2 className="font-display text-xl font-semibold text-slate-900">Coming soon</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          {roadmap.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
