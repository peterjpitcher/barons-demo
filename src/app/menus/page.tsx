import Image from 'next/image';
import Link from 'next/link';
import { highlightDishes } from '@/data/siteContent';
import { menuDownloads, type MenuCategory } from '@/data/menus';
import { menuGroups } from '@/data/menuGroups';

const menuHero = 'https://assets.baronspubs.com/uploads/sites/2/2022/01/Photo-07-01-2022-10-44-35-960x540.jpg';
const menuHeroAlt = 'Sunday roast dishes being plated at The Cricketers';

const quickFacts = [
  { label: 'Service windows', value: 'Breakfast · All day · Sunday carvery' },
  { label: 'Dietary support', value: 'NGCI, vegan and vegetarian badges' },
  { label: 'Downloads ready', value: `${menuDownloads.length} printable PDFs` },
];

const legend = [
  { tag: 'NGCI', label: 'Non gluten-containing ingredients' },
  { tag: 'V', label: 'Vegetarian option' },
  { tag: 'Vegan', label: 'Vegan option' },
];

const roadmap = [
  'Seasonal specials appear instantly with clear badges and tasting notes.',
  'Low & no alcohol serves, vegan dishes and family favourites are highlighted for easy browsing.',
  'Smart suggestions adapt to breakfast, lunch and evening visits.',
];

const pickHighlightDishes = (categories: MenuCategory[], limit = 3) => {
  const dishes: { name: string; description?: string }[] = [];

  for (const category of categories) {
    for (const item of category.items) {
      dishes.push({ name: item.name, description: item.description });
      if (dishes.length >= limit) {
        return dishes;
      }
    }
  }

  return dishes;
};

export default function MenusPage() {
  return (
    <div className="mx-auto mt-16 mb-20 w-full max-w-6xl space-y-16 px-4 sm:mt-20 sm:mb-24 sm:px-6">
      <header className="space-y-8">
        <div className="space-y-6">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-muted">Menus · Explore everything</p>
          <h1 className="font-display text-3xl font-semibold text-primary sm:text-4xl">
            Every Barons menu ready to browse and download
          </h1>
          <p className="text-sm text-muted sm:text-base">
            Explore breakfast favourites, all-day pub classics, sweet treats, Pizza Shack specials, buffet spreads and
            festive celebrations. Pick the menu that suits your visit, review the dishes in detail, then download the PDF
            for easy sharing with friends or colleagues.
          </p>
        </div>

        <dl className="grid gap-3 sm:grid-cols-3">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="rounded-2xl surface-card border p-4 shadow-sm">
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted">{fact.label}</dt>
              <dd className="mt-2 text-sm font-semibold text-primary">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="relative overflow-hidden rounded-3xl border surface-card shadow-lg">
          <Image
            src={menuHero}
            alt={menuHeroAlt}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 space-y-3">
            <p className="font-display text-xs uppercase tracking-[0.25em] text-white/90">Chef&apos;s table</p>
            <h2 className="text-2xl font-semibold text-white">Sunday carvery platters & seasonal roasts</h2>
            <div className="flex gap-2">
              {highlightDishes.slice(0, 3).map((dish) => (
                <div key={dish.name} className="relative h-20 w-20 overflow-hidden rounded-2xl border border-white/20">
                  <Image src={dish.image} alt={dish.alt} fill sizes="80px" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="space-y-6">
        <div className="space-y-3">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-muted">Our menus</p>
          <h2 className="font-display text-2xl font-semibold text-primary sm:text-3xl">Pick a menu and start planning</h2>
          <p className="max-w-3xl text-sm text-muted">
            Each menu page lists every dish, dietary badge and price so guests can decide ahead. Use the download button
            for a PDF copy, or tap the view button to explore the dedicated page with the full line-up.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {menuGroups.map((group) => {
            const featured = pickHighlightDishes(group.categories);

            return (
              <article key={group.key} className="space-y-4 rounded-3xl border surface-card p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="font-display text-xl font-semibold text-primary">{group.label}</h3>
                  {group.description ? <p className="text-sm text-muted">{group.description}</p> : null}
                  {group.seasonalNote ? (
                    <p className="text-xs uppercase tracking-[0.2em] text-subtle">{group.seasonalNote}</p>
                  ) : null}
                </div>

                {featured.length > 0 ? (
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-subtle">Guest favourites</p>
                    <ul className="space-y-2 text-sm text-muted">
                      {featured.map((item) => (
                        <li key={item.name}>
                          <span className="font-semibold text-primary">{item.name}</span>
                          {item.description ? <span className="text-muted"> — {item.description}</span> : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/menus/${group.key}`}
                    className="button-accent inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold"
                  >
                    View {group.label}
                  </Link>
                  {group.downloadHref ? (
                    <a
                      href={group.downloadHref}
                      download
                      className="button-outline inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold"
                    >
                      Download PDF
                    </a>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.6fr_1.2fr]">
        <div className="rounded-3xl border surface-card p-6 shadow-sm">
          <h2 className="font-display text-xl font-semibold text-primary">Chef&apos;s notes</h2>
          <ul className="mt-3 space-y-3 text-sm text-muted">
            <li>Sunday Carvery remains the hero — three roasts, veggie wellington and sides refreshed seasonally.</li>
            <li>Pizza Shack opens evenings and Saturdays; we flag shack specials and takeaway availability in real time.</li>
            <li>Breakfast and brunch launch 9am daily: smashed avo, duck & waffle and sweet options for families.</li>
          </ul>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border surface-card p-6 shadow-sm">
            <h2 className="font-display text-xl font-semibold text-primary">Roadmap highlights</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
              {roadmap.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs uppercase tracking-wide text-muted">
              Coming soon: live menu updates, allergen filters and shareable wishlists.
            </p>
          </div>
          <div className="rounded-3xl border surface-card p-6 shadow-sm">
            <h2 className="font-display text-xl font-semibold text-primary">Dietary legend</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-3">
              {legend.map((item) => (
                <li key={item.tag} className="rounded-2xl surface-alt-card border p-3 text-sm text-primary">
                  <span className="font-semibold">{item.tag}:</span> {item.label}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs uppercase tracking-wide text-muted">
              Speak to the team about allergens — we cater for gluten-free, vegan and family-friendly requests every day.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
