export type SeasonKey = 'classic' | 'christmas' | 'spring';

export type SeasonConfig = {
  key: SeasonKey;
  label: string;
  accent: string;
  accentAlt: string;
  background: string;
  heroTagline: string;
  promo: {
    message: string;
    ctaLabel: string;
    ctaHref: string;
  };
  featuredEventTag: string;
};

export const seasons: Record<SeasonKey, SeasonConfig> = {
  classic: {
    key: 'classic',
    label: 'All Year',
    accent: '#c1cbd1',
    accentAlt: '#637c8c',
    background: '#273640',
    heroTagline: 'Everyday hospitality in the heart of Horsell',
    promo: {
      message: 'Autumn brunch arrives 24 September — reserve your pod now',
      ctaLabel: 'See brunch highlights',
      ctaHref: '/menus',
    },
    featuredEventTag: 'Latest highlight',
  },
  christmas: {
    key: 'christmas',
    label: 'Christmas',
    accent: '#b62828',
    accentAlt: '#f4ede6',
    background: '#641717',
    heroTagline: 'Twinkling pods, mulled cocktails and Christmas feasts together',
    promo: {
      message: 'Festive feasts, sparkling cocktails and pod parties ready to book',
      ctaLabel: 'Plan a celebration',
      ctaHref: '/private-hire',
    },
    featuredEventTag: 'Festive spotlight',
  },
  spring: {
    key: 'spring',
    label: 'Spring',
    accent: '#70b77e',
    accentAlt: '#f0f7f3',
    background: '#1f4d32',
    heroTagline: 'Spring garden cocktails, Easter brunch and blossom pods',
    promo: {
      message: 'Spring Garden Party packages now open for April & May weekends',
      ctaLabel: 'Plan a spring celebration',
      ctaHref: '/private-hire',
    },
    featuredEventTag: 'Seasonal spotlight',
  },
};

export const seasonOrder: SeasonKey[] = ['classic', 'christmas', 'spring'];
