'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  allDayMenu,
  brunchMenu,
  dessertMenu,
  eventBuffetMenu,
  festiveMenus,
  menuDownloads,
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

  const visibleTabs = useMemo(() => {
    return TAB_CONFIG.filter((tab) => !tab.season || tab.season === season);
  }, [season]);

  useEffect(() => {
    if (!visibleTabs.some((tab) => tab.key === active)) {
      setActive(visibleTabs[0]?.key ?? 'all-day');
    }
  }, [active, visibleTabs]);

  const activeTab = visibleTabs.find((tab) => tab.key === active) ?? visibleTabs[0];

  if (!activeTab) {
    return null;
  }

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

      {activeTab.description ? (
        <p className="text-sm text-muted">{activeTab.description}</p>
      ) : null}

      <div className="space-y-6">
        {activeTab.categories.map((category) => (
          <div key={category.id} className="rounded-3xl border surface-card p-6 shadow-sm">
            <h3 className="font-display text-xl font-semibold text-primary">{category.title}</h3>
            {category.subtitle ? <p className="text-sm text-muted">{category.subtitle}</p> : null}
            <ul className="mt-4 space-y-3">
              {category.items.map((item) => (
                <li key={item.name} className="rounded-2xl surface-alt-card border p-4">
                  <div className="flex flex-wrap items-baseline gap-2 text-primary">
                    <span className="font-semibold">{item.name}</span>
                    {item.price ? <span className="text-sm text-muted">{item.price}</span> : null}
                    {item.dietary && (
                      <span className="tag-soft rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase">
                        {item.dietary.join(', ')}
                      </span>
                    )}
                  </div>
                  {item.description ? (
                    <p className="mt-1 text-sm text-muted">{item.description}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="surface-card rounded-3xl border border-dashed p-6">
        <h3 className="font-display text-lg font-semibold text-primary">Download full menus</h3>
        <p className="mt-2 text-sm text-muted">
          Detailed PDFs stay handy for guests and planners. We&apos;ll connect these to the CMS in the live build so updates are effortless.
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {menuDownloads.map((link) => (
            <li key={link.href} className="text-sm text-primary">
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
