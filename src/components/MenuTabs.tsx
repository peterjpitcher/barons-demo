'use client';

import { useMemo, useState } from 'react';
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

const MENU_GROUPS = [
  {
    key: 'all-day',
    label: 'All Day Dining',
    description: 'Pub classics, roasts and bar favourites available throughout the day.',
    downloadHref: '/pdf/main-menu.pdf',
    categories: allDayMenu,
  },
  {
    key: 'brunch',
    label: 'Brunch & Breakfast',
    description: brunchMenu.description,
    downloadHref: brunchMenu.downloadHref,
    categories: brunchMenu.categories,
  },
  {
    key: 'desserts',
    label: 'Desserts & Shakes',
    description: dessertMenu.description,
    downloadHref: dessertMenu.downloadHref,
    categories: dessertMenu.categories,
  },
  {
    key: 'pizza',
    label: 'Pizza Shack',
    description: pizzaShackMenu.description,
    downloadHref: pizzaShackMenu.downloadHref,
    categories: pizzaShackMenu.categories,
  },
  {
    key: 'events',
    label: 'Events & Buffets',
    description: eventBuffetMenu.description,
    downloadHref: eventBuffetMenu.downloadHref,
    categories: eventBuffetMenu.categories,
  },
  {
    key: 'kids',
    label: 'Children Menu',
    description: childrenMenu.description,
    downloadHref: childrenMenu.downloadHref,
    categories: childrenMenu.categories,
  },
  {
    key: 'festive',
    label: 'Festive Dining',
    description: festiveMenus.description,
    downloadHref: festiveMenus.downloadHref,
    categories: festiveMenus.categories,
    seasonalNote: 'Available throughout the Christmas season.',
  },
] satisfies {
  key: string;
  label: string;
  description?: string;
  downloadHref?: string;
  categories: MenuCategory[];
  seasonalNote?: string;
}[];

const collectTotalItems = () =>
  MENU_GROUPS.reduce((count, group) => {
    return (
      count +
      group.categories.reduce((acc, category) => acc + category.items.length, 0)
    );
  }, 0);

export function MenuTabs() {
  const [query, setQuery] = useState('');
  const searchTerm = query.trim().toLowerCase();

  const groups = useMemo(() => {
    return MENU_GROUPS.map((group) => {
      const filteredCategories = group.categories.map((category) => {
        if (!searchTerm) {
          return category;
        }

        const items = category.items.filter((item) => {
          const haystack = [item.name, item.description, item.price, item.dietary?.join(' '), item.calories]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();
          return haystack.includes(searchTerm);
        });

        return { ...category, items } satisfies MenuCategory;
      });

      const matches = filteredCategories.some((category) => category.items.length > 0);

      return {
        ...group,
        categories: searchTerm ? filteredCategories : group.categories,
        filteredCategories,
        matches,
      };
    });
  }, [searchTerm]);

  const totalItems = useMemo(() => collectTotalItems(), []);
  const resultsCount = searchTerm
    ? groups.reduce((acc, group) =>
        acc +
        group.filteredCategories.reduce((categoryAcc, category) => categoryAcc + category.items.length, 0),
      0,
    )
    : totalItems;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-subtle">Browse every dish</p>
          <p className="text-sm text-muted md:max-w-2xl">
            Search or scroll to see each menu rendered in full — helpful for guests, search engines and planners alike.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="sm:w-64">
            <label htmlFor="menus-search" className="text-xs font-semibold uppercase tracking-wide text-muted">
              Search dishes
            </label>
            <input
              id="menus-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g. vegan, roast, burger"
              className="mt-1 w-full rounded-xl border bg-white px-3 py-2 text-sm text-primary"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {MENU_GROUPS.map((group) => (
          <a
            key={group.key}
            href={`#menu-${group.key}`}
            className="rounded-full border border-[var(--surface-border)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary transition hover:border-[var(--accent)] hover:text-accent"
          >
            {group.label}
          </a>
        ))}
      </div>

      <p className="text-xs uppercase tracking-wide text-subtle">
        {searchTerm
          ? `Showing ${resultsCount} ${resultsCount === 1 ? 'dish' : 'dishes'} for “${query.trim()}”`
          : `${totalItems} dishes across ${MENU_GROUPS.length} menus`}
      </p>

      <div className="space-y-10">
        {groups.map((group) => {
          const categoryList = searchTerm ? group.filteredCategories : group.categories;
          const hasResults = searchTerm ? group.matches : true;

          return (
            <section key={group.key} id={`menu-${group.key}`} className="space-y-6">
              <div className="space-y-2">
                <h2 className="font-display text-2xl font-semibold text-primary">{group.label}</h2>
                {group.description ? <p className="text-sm text-muted">{group.description}</p> : null}
                {group.seasonalNote ? (
                  <p className="text-xs uppercase tracking-[0.2em] text-subtle">{group.seasonalNote}</p>
                ) : null}
                {group.downloadHref ? (
                  <a
                    href={group.downloadHref}
                    className="button-outline inline-flex w-fit rounded-full px-4 py-2 text-sm font-semibold"
                  >
                    Download {group.label} (PDF)
                  </a>
                ) : null}
              </div>

              {hasResults ? (
                <div className="space-y-6">
                  {categoryList.map((category) => (
                    <div key={category.id} className="space-y-4 rounded-3xl border surface-card p-6 shadow-sm">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                        <div>
                          <h3 className="font-display text-xl font-semibold text-primary">{category.title}</h3>
                          {category.subtitle ? <p className="text-sm text-muted">{category.subtitle}</p> : null}
                        </div>
                        <span className="text-xs uppercase tracking-wide text-subtle">
                          {category.items.length} {category.items.length === 1 ? 'dish' : 'dishes'}
                        </span>
                      </div>
                      {category.items.length > 0 ? (
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
                      ) : (
                        <p className="text-sm text-muted">No dishes match that search in this section.</p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-3xl border border-dashed surface-card p-6 text-sm text-muted">
                  No matches found for this menu right now. Clear the search to view the full line-up.
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
