import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { MenuGroupKey } from '@/data/menuGroups';
import { menuGroupMap, menuGroups } from '@/data/menuGroups';

type MenuPageParams = { slug: MenuGroupKey };
type MenuPageProps = { params: Promise<MenuPageParams> };

export function generateStaticParams() {
  return menuGroups.map((group) => ({ slug: group.key }));
}

export async function generateMetadata({ params }: MenuPageProps): Promise<Metadata> {
  const { slug } = await params;
  const group = menuGroupMap.get(slug);

  if (!group) {
    return {};
  }

  const title = `${group.label} · Menus at The Cricketers`;
  const description = group.description
    ? `${group.description} Explore every dish, then download the PDF to share with your guests.`
    : 'Explore every dish, then download the PDF to share with your guests.';

  return {
    title,
    description,
  };
}

export default async function MenuDetailPage({ params }: MenuPageProps) {
  const { slug } = await params;
  const group = menuGroupMap.get(slug);

  if (!group) {
    notFound();
  }

  return (
    <div className="mx-auto mt-16 mb-20 w-full max-w-5xl space-y-12 px-4 sm:mt-20 sm:px-6">
      <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.3em] text-subtle">
        <Link href="/menus" className="hover:underline">
          Menus
        </Link>
        <span> / {group.label}</span>
      </nav>

      <header className="space-y-4">
        <h1 className="font-display text-3xl font-semibold text-primary sm:text-4xl">{group.label}</h1>
        {group.description ? <p className="text-sm text-muted sm:text-base">{group.description}</p> : null}
        {group.seasonalNote ? (
          <p className="text-xs uppercase tracking-[0.2em] text-subtle">{group.seasonalNote}</p>
        ) : null}
        <div className="flex flex-wrap gap-3">
          <Link href="/menus" className="button-outline rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide">
            Back to all menus
          </Link>
          {group.downloadHref ? (
            <a
              href={group.downloadHref}
              download
              className="button-accent rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide"
            >
              Download PDF
            </a>
          ) : null}
        </div>
      </header>

      <section className="space-y-8">
        {group.categories.map((category) => (
          <div key={category.id} className="space-y-4 rounded-3xl border surface-card p-6 shadow-sm">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h2 className="font-display text-2xl font-semibold text-primary">{category.title}</h2>
                {category.subtitle ? <p className="text-sm text-muted">{category.subtitle}</p> : null}
              </div>
              <span className="text-xs uppercase tracking-wide text-subtle">
                {category.items.length} {category.items.length === 1 ? 'dish' : 'dishes'}
              </span>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {category.items.map((item) => (
                <li key={item.name} className="rounded-2xl surface-alt-card border px-4 py-3 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-sm font-semibold text-primary">{item.name}</span>
                    <div className="text-right text-xs text-muted">
                      {item.price ? <p>{item.price}</p> : null}
                      {item.calories ? <p>{item.calories}</p> : null}
                    </div>
                  </div>
                  {item.description ? (
                    <p className="mt-2 text-xs leading-relaxed text-muted">{item.description}</p>
                  ) : null}
                  {item.dietary?.length ? (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.dietary.map((tag) => (
                        <span
                          key={tag}
                          className="tag-soft rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.2em]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="space-y-4 rounded-3xl border surface-card p-6 shadow-sm">
        <h2 className="font-display text-2xl font-semibold text-primary">Continue exploring</h2>
        <p className="text-sm text-muted">
          Discover other menus, plan private dining or check what&apos;s on at The Cricketers.
        </p>
        <div className="flex flex-wrap gap-3 text-sm font-semibold text-primary">
          {menuGroups
            .filter((other) => other.key !== group.key)
            .map((other) => (
              <Link key={other.key} href={`/menus/${other.key}`} className="button-outline rounded-full px-4 py-2 text-xs uppercase tracking-wide">
                {other.label}
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
