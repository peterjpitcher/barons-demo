'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  allDayMenu,
  brunchMenu,
  dessertMenu,
  eventBuffetMenu,
  festiveMenus,
  pizzaShackMenu,
  childrenMenu,
  type MenuCategory,
} from '@/data/menus';
import type { SeasonKey } from '@/config/seasons';
import { useSeason } from '@/context/SeasonContext';

type TabKey =
  | 'all-day'
  | 'brunch'
  | 'desserts'
  | 'pizza'
  | 'events'
  | 'kids'
  | 'festive';

type TabConfig = {
  key: TabKey;
  label: string;
  categories: MenuCategory[];
  description?: string;
  downloadHref?: string;
  season?: SeasonKey;
};

const TAB_CONFIG: TabConfig[] = [
  {
    key: 'all-day',
    label: 'All Day',
    categories: allDayMenu,
    downloadHref: '/pdf/main-menu.pdf',
    description: 'Greatest hits spanning bar snacks, pub classics and Sunday roasts.',
  },
  {
    key: 'brunch',
    label: 'Brunch',
    categories: brunchMenu.categories,
    description: brunchMenu.description,
    downloadHref: brunchMenu.downloadHref,
  },
  {
    key: 'desserts',
    label: 'Desserts',
    categories: dessertMenu.categories,
    description: dessertMenu.description,
    downloadHref: dessertMenu.downloadHref,
  },
  {
    key: 'pizza',
    label: 'Pizza Shack',
    categories: pizzaShackMenu.categories,
    description: pizzaShackMenu.description,
    downloadHref: pizzaShackMenu.downloadHref,
  },
  {
    key: 'events',
    label: 'Events & Buffets',
    categories: eventBuffetMenu.categories,
    description: eventBuffetMenu.description,
    downloadHref: eventBuffetMenu.downloadHref,
  },
  {
    key: 'kids',
    label: "Children's",
    categories: childrenMenu.categories,
    description: childrenMenu.description,
    downloadHref: childrenMenu.downloadHref,
  },
  {
    key: 'festive',
    label: 'Festive',
    categories: festiveMenus.categories,
    description: festiveMenus.description,
    downloadHref: festiveMenus.downloadHref,
    season: 'christmas',
  },
];

export function MenuTabs() {
  const { season } = useSeason();
  const [active, setActive] = useState<TabKey>('all-day');
  const [query, setQuery] = useState('');

  const visibleTabs = useMemo(() => {
    return TAB_CONFIG.filter((tab) => !tab.season || tab.season === season);
  }, [season]);

  useEffect(() => {
    if (!visibleTabs.some((tab) => tab.key === active)) {
      setActive(visibleTabs[0]?.key ?? 'all-day');
    }
  }, [active, visibleTabs]);

  const activeTab = visibleTabs.find((tab) => tab.key === active) ?? visibleTabs[0] ?? TAB_CONFIG[0];

  const searchInputId = `menu-search-${activeTab.key}`;
  const searchTerm = query.trim().toLowerCase();

  const filteredCategories = useMemo(() => {
    if (!searchTerm) {
      return activeTab.categories;
    }

    return activeTab.categories
      .map((category) => {
        const items = category.items.filter((item) => {
          const haystack = [item.name, item.description, item.price, item.dietary?.join(' '), item.calories]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();
          return haystack.includes(searchTerm);
        });

        return { ...category, items };
      })
      .filter((category) => category.items.length > 0);
  }, [activeTab, searchTerm]);

  const visibleCategoryIds = useMemo(() => new Set(filteredCategories.map((category) => category.id)), [
    filteredCategories,
  ]);

  const hasQuery = searchTerm.length > 0;
  const totalItems = useMemo(
    () => activeTab.categories.reduce((acc, category) => acc + category.items.length, 0),
    [activeTab],
  );
  const resultCount = filteredCategories.reduce((acc, category) => acc + category.items.length, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {visibleTabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActive(tab.key)}
            className="rounded-full border px-4 py-2 text-sm font-semibold transition"
            style={
              tab.key === active
                ? {
                    backgroundColor: 'var(--accent)',
                    color: 'var(--accent-contrast)',
                    borderColor: 'var(--accent)',
                  }
                : {
                    backgroundColor: 'var(--surface-alt)',
                    color: 'var(--body-text)',
                    borderColor: 'var(--surface-border)',
                  }
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          {activeTab.description ? (
            <p className="text-sm text-muted md:max-w-2xl">{activeTab.description}</p>
          ) : null}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="sm:w-64">
              <label htmlFor={searchInputId} className="text-xs font-semibold uppercase tracking-wide text-muted">
                Search dishes
              </label>
              <input
                id={searchInputId}
                type="search"
                placeholder={`Search ${activeTab.label.toLowerCase()} dishes`}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="mt-1 w-full rounded-xl border bg-white px-3 py-2 text-sm text-primary"
              />
            </div>
            {activeTab.downloadHref ? (
              <Link
                href={activeTab.downloadHref}
                className="button-outline whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold"
              >
                Download {activeTab.label} PDF
              </Link>
            ) : null}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {activeTab.categories.map((category) => {
            const disabled = hasQuery && !visibleCategoryIds.has(category.id);

            if (disabled) {
              return (
                <span
                  key={category.id}
                  className="rounded-full border border-dashed border-[var(--surface-border)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-subtle"
                >
                  {category.title}
                </span>
              );
            }

            return (
              <a
                key={category.id}
                href={`#menu-${activeTab.key}-${category.id}`}
                className="rounded-full border border-[var(--surface-border)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary transition hover:border-[var(--accent)] hover:text-accent"
              >
                {category.title}
              </a>
            );
          })}
        </div>
        <p className="text-xs uppercase tracking-wide text-subtle">
          {hasQuery
            ? `Showing ${resultCount} ${resultCount === 1 ? 'dish' : 'dishes'} for “${query.trim()}”`
            : `${totalItems} dishes across ${activeTab.categories.length} sections`}
        </p>
      </div>

      <div className="space-y-6">
        {filteredCategories.length === 0 ? (
          <div className="rounded-3xl border border-dashed surface-card p-6 text-sm text-muted">
            No dishes match that search yet. Try a different ingredient or clear the search field.
          </div>
        ) : null}

        {filteredCategories.map((category) => (
          <section
            key={category.id}
            id={`menu-${activeTab.key}-${category.id}`}
            className="scroll-mt-32 rounded-2xl border surface-card p-5 shadow-sm"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="font-display text-lg font-semibold text-primary">{category.title}</h3>
                {category.subtitle ? <p className="text-sm text-muted">{category.subtitle}</p> : null}
              </div>
              {!hasQuery ? (
                <span className="text-xs uppercase tracking-wide text-subtle">
                  {category.items.length} {category.items.length === 1 ? 'dish' : 'dishes'}
                </span>
              ) : null}
            </div>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
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
          </section>
        ))}
      </div>
    </div>
  );
}
