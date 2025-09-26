import Image from 'next/image';
import Link from 'next/link';
import { MenuTabs } from '@/components/MenuTabs';
import { highlightDishes } from '@/data/siteContent';
import { menuDownloads } from '@/data/menus';

const menuHero = 'https://assets.baronspubs.com/uploads/sites/2/2022/01/Photo-07-01-2022-10-44-35-960x540.jpg';
const menuHeroAlt = 'Sunday roast dishes being plated at The Cricketers';

const quickFacts = [
  { label: 'Service windows', value: 'Breakfast · All day · Sunday carvery' },
  { label: 'Dietary support', value: 'NGCI, Vegan and Vegetarian badges' },
  { label: 'Downloads ready', value: `${menuDownloads.length} printable PDFs` },
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

const menuLibraryGroups: {
  title: string;
  description: string;
  slugs: string[];
}[] = [
  {
    title: 'Dining menus',
    description: 'All-day dishes, daily set lunches and plated event menus straight from the kitchen team.',
    slugs: ['main-menu', 'set-lunch', 'set-menu-events'],
  },
  {
    title: 'Buffets & sharing feasts',
    description: 'From afternoon teas and BBQ spreads to party buffets and pizza feasts for big gatherings.',
    slugs: ['fork-buffet', 'afternoon-buffet', 'party-buffet', 'bbq-menu', 'pizza-feast'],
  },
  {
    title: 'Pizza Shack',
    description: 'Garden shack menus, perfect for summer evenings with friends and family.',
    slugs: ['pizza-shack'],
  },
  {
    title: 'Brunch & children',
    description: 'Morning favourites plus little-ones menus covering daytime dining and parties.',
    slugs: ['brunch-menu', 'childrens-menu', 'childrens-brunch'],
  },
  {
    title: 'Sweet treats & drinks',
    description: 'Desserts, shakes and the full bar list for planning puddings or after-dinner drinks.',
    slugs: ['puddings', 'drinks-menu'],
  },
  {
    title: 'Festive season',
    description: 'Christmas celebrations, carvery line-ups and seasonal opening hours ready for December.',
    slugs: ['festive-buffet', 'christmas-celebration', 'christmas-day-carvery', 'festive-opening-hours'],
  },
];

export default function MenusPage() {
  const downloadsBySlug = new Map(
    menuDownloads.map((entry) => [entry.href.replace('/pdf/', '').replace('.pdf', ''), entry]),
  );

  return (
    <div className="mx-auto mt-16 mb-20 w-full max-w-6xl space-y-16 px-4 sm:mt-20 sm:mb-24 sm:px-6">
      <header className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-muted">Menus · Explore everything</p>
          <h1 className="font-display text-3xl font-semibold text-primary sm:text-4xl">
            Every Barons menu organised for quick browsing
          </h1>
          <p className="text-sm text-muted sm:text-base">
            Toggle between all-day dining, brunch, desserts, Pizza Shack specials, events platters and children&apos;s
            favourites. The compact cards pull every dish straight from our structured menu data so guests can skim,
            search and favourite without digging through PDFs.
          </p>
          <dl className="grid gap-3 sm:grid-cols-3">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="rounded-2xl surface-card border p-4 shadow-sm">
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted">{fact.label}</dt>
                <dd className="mt-2 text-sm font-semibold text-primary">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className="rounded-2xl border border-dashed surface-card p-4 shadow-sm">
            <p className="font-display text-lg font-semibold text-primary">Need a printable version?</p>
            <p className="mt-2 text-sm text-muted">
              These PDFs stay handy for planners while the site handles day-to-day menu browsing.
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {menuDownloads.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-semibold text-primary hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative hidden overflow-hidden rounded-3xl border surface-card shadow-lg lg:block">
          <Image
            src={menuHero}
            alt={menuHeroAlt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
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

      <section className="space-y-8">
        <div className="rounded-3xl border surface-card p-6 shadow-sm">
          <MenuTabs />
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-primary">Full menu library</h2>
            <p className="mt-1 max-w-2xl text-sm text-muted">
              Every current PDF is embedded below so planners, suppliers and the wider Barons team can skim the detail
              without leaving the page. Expand a section to preview or download in one tap.
            </p>
          </div>
          <p className="text-xs uppercase tracking-wide text-subtle">{menuDownloads.length} documents available</p>
        </div>

        <div className="space-y-5">
          {menuLibraryGroups.map((group) => {
            const groupDownloads = group.slugs
              .map((slug) => downloadsBySlug.get(slug))
              .filter((download): download is (typeof menuDownloads)[number] => Boolean(download));

            if (groupDownloads.length === 0) {
              return null;
            }

            return (
              <div key={group.title} className="space-y-3">
                <div>
                  <h3 className="font-display text-xl font-semibold text-primary">{group.title}</h3>
                  <p className="text-sm text-muted">{group.description}</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {groupDownloads.map((download) => (
                    <details
                      key={download.href}
                      className="group rounded-3xl border surface-card p-5 shadow-sm transition hover:border-[var(--accent)]"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-left">
                        <span className="font-semibold text-primary">{download.label}</span>
                        <span className="text-xs uppercase tracking-wide text-subtle group-open:text-accent">Open</span>
                      </summary>
                      <div className="mt-4 space-y-3">
                        <div className="overflow-hidden rounded-2xl border bg-white">
                          <object
                            data={download.href}
                            type="application/pdf"
                            className="h-80 w-full"
                          >
                            <p className="p-4 text-sm text-muted">
                              PDF preview unavailable.{' '}
                              <Link href={download.href} className="text-primary underline">
                                Download {download.label}
                              </Link>
                            </p>
                          </object>
                        </div>
                        <Link href={download.href} className="text-sm font-semibold text-primary hover:underline">
                          Download {download.label}
                        </Link>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.6fr_1.2fr]">
        <div className="rounded-3xl border surface-card p-6 shadow-sm">
          <h2 className="font-display text-xl font-semibold text-primary">Chef&apos;s notes</h2>
          <ul className="mt-3 space-y-3 text-sm text-muted">
            <li>Sunday Carvery remains the hero — three roasts, veggie wellington and sides refreshed seasonally.</li>
            <li>Pizza Shack opens evenings and Saturdays; the interface will surface shack specials when the hatch is on.</li>
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
              Production integrations will connect directly to the CMS and allergens database.
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
              Full allergens integration lands with the Barons App rollout.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
