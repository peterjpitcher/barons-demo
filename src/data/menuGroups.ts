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

export type MenuGroupKey =
  | 'all-day'
  | 'brunch'
  | 'desserts'
  | 'pizza'
  | 'events'
  | 'kids'
  | 'festive';

export type MenuGroup = {
  key: MenuGroupKey;
  label: string;
  description?: string;
  downloadHref?: string;
  categories: MenuCategory[];
  seasonalNote?: string;
};

export const menuGroups: MenuGroup[] = [
  {
    key: 'all-day',
    label: 'All Day Dining',
    description: 'Pub classics, roasts and bar favourites served from lunch through supper.',
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
];

export const menuGroupMap = new Map<MenuGroupKey, MenuGroup>(menuGroups.map((group) => [group.key, group]));
