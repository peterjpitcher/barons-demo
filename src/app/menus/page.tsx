import Image from 'next/image';
import { menuSections } from '@/data/menuHighlights';
import { highlightDishes } from '@/data/siteContent';

const menuHero = 'https://assets.baronspubs.com/uploads/sites/2/2022/01/Photo-07-01-2022-10-44-35-960x540.jpg';
const menuHeroAlt = 'Sunday roast dishes being plated at The Cricketers';

const downloadLinks = [
  { label: 'Download full main menu (PDF)', href: '/pdf/main-menu.pdf' },
  { label: 'Brunch & breakfast (PDF)', href: '/pdf/brunch-menu.pdf' },
  { label: "Children's favourites (PDF)", href: '/pdf/childrens-menu.pdf' },
  { label: 'Desserts & after dinner drinks (PDF)', href: '/pdf/puddings.pdf' },
];

const legend = [
  { tag: 'NGCI', label: 'Non gluten-containing ingredients' },
  { tag: 'V', label: 'Vegetarian option' },
  { tag: 'Vegan', label: 'Vegan option' },
];

const roadmap = [
  'Structured CMS data powering search, filters and seasonal toggles.',
  'Menu badges for chef specials, low & no, or kids favourites.',
  'Smart suggestions based on time of day (breakfast vs evening service).',
];

export default function MenusPage() {
  return (
    <div className="mx-auto mt-10 mb-16 w-full max-w-6xl space-y-12 rounded-3xl border border-[#d8e1ea] bg-white/95 px-4 py-12 shadow-sm sm:mt-14 sm:mb-20 sm:px-6">
      <header className="max-w-4xl space-y-6">
        <div className="relative h-56 overflow-hidden rounded-3xl shadow-sm sm:h-64">
          <Image
            src={menuHero}
            alt={menuHeroAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
        <p className="font-display text-sm uppercase tracking-[0.2em] text-slate-500">Menus · Seasonal Snapshot</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">Seasonal dishes, condensed for preview</h1>
        <p className="mt-4 text-sm text-slate-600">
          The finished site will render every dish from structured data. We&apos;ve surfaced highlights across bar snacks,
          mains, brunch, sides, puddings and drinks — enough to showcase how the UI handles prices, dietary notes and
          descriptions.
        </p>
        <div className="grid gap-4 pt-6 sm:grid-cols-3">
          {highlightDishes.slice(0, 3).map((dish) => (
            <div key={dish.name} className="relative h-32 overflow-hidden rounded-2xl shadow-sm">
              <Image
                src={dish.image}
                alt={dish.alt}
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">{dish.name}</p>
              </div>
            </div>
          ))}
        </div>
      </header>

      <section className="space-y-8">
        {menuSections.map((section) => (
          <div key={section.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-display text-xl font-semibold text-slate-900">{section.title}</h2>
            <ul className="mt-4 space-y-4">
              {section.items.map((item) => (
                <li key={item.name} className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex flex-wrap items-baseline gap-2 text-slate-900">
                    <p className="font-semibold">{item.name}</p>
                    {item.price ? <span className="text-sm text-slate-500">{item.price}</span> : null}
                    {item.dietary && (
                      <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-600">
                        {item.dietary.join(', ')}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-dashed border-slate-300 bg-slate-50/80 p-6">
        <h2 className="font-display text-xl font-semibold text-slate-900">Downloads for stakeholder review</h2>
        <p className="mt-2 text-sm text-slate-600">
          In production these will be generated automatically. For now they link to the raw PDFs in the assets store so
          stakeholders can see the full detail behind each headline dish.
        </p>
        <ul className="mt-4 space-y-3 text-sm font-semibold text-slate-800">
          {downloadLinks.map((link) => (
            <li key={link.href}>{link.label}</li>
          ))}
        </ul>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-display text-xl font-semibold text-slate-900">Chef&apos;s notes</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>Sunday Carvery remains the hero — three roasts, veggie wellington and sides refreshed seasonally.</li>
            <li>Pizza Shack opens evenings and Saturdays; the interface will surface shack specials when the hatch is on.</li>
            <li>Breakfast and brunch launch 9am daily: smashed avo, duck & waffle and sweet options for families.</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-display text-xl font-semibold text-slate-900">Roadmap highlights</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
            {roadmap.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs uppercase tracking-wide text-slate-500">
            Production integrations will connect directly to the CMS and allergens database.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-display text-xl font-semibold text-slate-900">Dietary legend</h2>
        <ul className="mt-3 grid gap-3 sm:grid-cols-3">
          {legend.map((item) => (
            <li key={item.tag} className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
              <span className="font-semibold text-slate-900">{item.tag}:</span> {item.label}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs uppercase tracking-wide text-slate-500">Full allergens integration lands with the Barons App rollout.</p>
      </section>
    </div>
  );
}
