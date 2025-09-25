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
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              tab.key === active
                ? 'border-[#273640] bg-[#273640] text-white'
                : 'border-[#d8e1ea] bg-white text-[#273640] hover:border-[#273640]/50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab.description ? (
        <p className="text-sm text-slate-600">{activeTab.description}</p>
      ) : null}

      <div className="space-y-6">
        {activeTab.categories.map((category) => (
          <div key={category.id} className="rounded-3xl border border-[#d8e1ea] bg-white/95 p-6 shadow-sm">
            <h3 className="font-display text-xl font-semibold text-slate-900">{category.title}</h3>
            {category.subtitle ? <p className="text-sm text-slate-500">{category.subtitle}</p> : null}
            <ul className="mt-4 space-y-3">
              {category.items.map((item) => (
                <li key={item.name} className="rounded-2xl bg-[#f5f8fa] p-4">
                  <div className="flex flex-wrap items-baseline gap-2 text-slate-900">
                    <span className="font-semibold">{item.name}</span>
                    {item.price ? <span className="text-sm text-slate-500">{item.price}</span> : null}
                    {item.dietary && (
                      <span className="rounded-full bg-[#c1cbd1] px-2 py-0.5 text-[11px] font-semibold uppercase text-[#273640]">
                        {item.dietary.join(', ')}
                      </span>
                    )}
                  </div>
                  {item.description ? (
                    <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-dashed border-[#d8e1ea] bg-white/95 p-6">
        <h3 className="font-display text-lg font-semibold text-slate-900">Download full menus</h3>
        <p className="mt-2 text-sm text-slate-600">
          Detailed PDFs stay handy for guests and planners. We&apos;ll connect these to the CMS in the live build so updates are effortless.
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {menuDownloads.map((link) => (
            <li key={link.href} className="text-sm text-[#273640]">
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
