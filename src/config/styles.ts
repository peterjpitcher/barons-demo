export type StyleKey = 'heritage' | 'modern' | 'nocturne';

export type StyleTheme = {
  key: StyleKey;
  label: string;
  description: string;
  cssVariables: Record<string, string>;
  heroOverlay: {
    from: string;
    to: string;
  };
  quickActions: {
    overlay: string;
    text: string;
    badge: string;
  };
};

export const styleThemes: Record<StyleKey, StyleTheme> = {
  heritage: {
    key: 'heritage',
    label: 'Heritage Classic',
    description: 'Deep Barons blues with soft neutrals echoing the current brand.',
    cssVariables: {
      'body-background': 'radial-gradient(circle at top, #f6f8fb 0%, #e8edf2 45%, #dae3ea 100%)',
      'body-text': '#1f2937',
      'text-muted': '#5c6774',
      'text-subtle': '#cdd6df',
      surface: 'rgba(255,255,255,0.95)',
      'surface-alt': '#f5f8fa',
      'surface-muted': '#edf2f7',
      'surface-border': '#d8e1ea',
      accent: '#637c8c',
      'accent-contrast': '#ffffff',
      'accent-hover': '#4f6574',
      'accent-soft': '#c1cbd1',
      outline: '#273640',
      'header-bg': '#273640',
      'header-border': '#1d2b36',
      'header-text': '#f5f8fa',
      'header-link': '#c1cbd1',
      'header-link-hover': '#ffffff',
      'header-link-active': '#ffffff',
      'footer-bg': '#1d2b36',
      'footer-border': '#314759',
      'footer-text': '#f5f8fa',
      'footer-link-hover': '#c1cbd1',
      'hero-overlay-start': 'rgba(39,54,64,0.85)',
      'hero-overlay-end': 'rgba(49,71,89,0.7)',
      'button-outline': '#c1cbd1',
      'quicklink-overlay': 'linear-gradient(180deg, rgba(19,30,38,0.15) 0%, rgba(19,30,38,0.75) 100%)',
      'quicklink-text': '#f8fafc',
      'quicklink-badge': 'rgba(255,255,255,0.35)',
      'testimonial-overlay': 'rgba(49,71,89,0.92)',
    },
    heroOverlay: {
      from: 'rgba(39,54,64,0.85)',
      to: 'rgba(49,71,89,0.7)',
    },
    quickActions: {
      overlay: 'linear-gradient(180deg, rgba(19,30,38,0.15) 0%, rgba(19,30,38,0.75) 100%)',
      text: '#f8fafc',
      badge: 'rgba(255,255,255,0.35)',
    },
  },
  modern: {
    key: 'modern',
    label: 'Modern Minimal',
    description: 'Crisp whites, cool sage and teal accents for a contemporary feel.',
    cssVariables: {
      'body-background': 'radial-gradient(circle at top, #ffffff 0%, #f5f7fa 45%, #e3e9f0 100%)',
      'body-text': '#1a2433',
      'text-muted': '#5f6b7a',
      'text-subtle': '#a8b3c2',
      surface: '#ffffff',
      'surface-alt': '#f7f9fc',
      'surface-muted': '#eef3f9',
      'surface-border': '#dbe3eb',
      accent: '#1f7a8c',
      'accent-contrast': '#ffffff',
      'accent-hover': '#186474',
      'accent-soft': '#b7e0ef',
      outline: '#1f7a8c',
      'header-bg': '#ffffff',
      'header-border': '#dbe3eb',
      'header-text': '#1a2433',
      'header-link': '#5f6b7a',
      'header-link-hover': '#1f7a8c',
      'header-link-active': '#1a2433',
      'footer-bg': '#f2f5f9',
      'footer-border': '#dbe3eb',
      'footer-text': '#1a2433',
      'footer-link-hover': '#1f7a8c',
      'hero-overlay-start': 'rgba(31,122,140,0.78)',
      'hero-overlay-end': 'rgba(31,122,140,0.45)',
      'button-outline': '#1f7a8c',
      'quicklink-overlay': 'linear-gradient(200deg, rgba(31,122,140,0.15) 0%, rgba(31,122,140,0.7) 100%)',
      'quicklink-text': '#f9fbfc',
      'quicklink-badge': 'rgba(255,255,255,0.55)',
      'testimonial-overlay': 'rgba(31,122,140,0.75)',
    },
    heroOverlay: {
      from: 'rgba(31,122,140,0.78)',
      to: 'rgba(31,122,140,0.45)',
    },
    quickActions: {
      overlay: 'linear-gradient(200deg, rgba(31,122,140,0.15) 0%, rgba(31,122,140,0.7) 100%)',
      text: '#f9fbfc',
      badge: 'rgba(255,255,255,0.55)',
    },
  },
  nocturne: {
    key: 'nocturne',
    label: 'Nocturne Lounge',
    description: 'Velvet-dark backgrounds with amber highlights for an evening mood.',
    cssVariables: {
      'body-background': 'radial-gradient(circle at top, #1a2233 0%, #0d1320 55%, #05070e 100%)',
      'body-text': '#f3f4f6',
      'text-muted': '#a5b1c2',
      'text-subtle': '#6c7a93',
      surface: 'rgba(17,24,39,0.92)',
      'surface-alt': 'rgba(26,34,48,0.85)',
      'surface-muted': 'rgba(12,18,31,0.96)',
      'surface-border': '#243146',
      accent: '#d97706',
      'accent-contrast': '#0b0e14',
      'accent-hover': '#f59e0b',
      'accent-soft': 'rgba(217,119,6,0.25)',
      outline: '#f59e0b',
      'header-bg': '#05070e',
      'header-border': '#111827',
      'header-text': '#f3f4f6',
      'header-link': '#94a3b8',
      'header-link-hover': '#fbbf24',
      'header-link-active': '#f3f4f6',
      'footer-bg': '#05070e',
      'footer-border': '#111827',
      'footer-text': '#e5e7eb',
      'footer-link-hover': '#fbbf24',
      'hero-overlay-start': 'rgba(5,7,14,0.85)',
      'hero-overlay-end': 'rgba(5,7,14,0.65)',
      'button-outline': '#f59e0b',
      'quicklink-overlay': 'linear-gradient(200deg, rgba(5,7,14,0.2) 0%, rgba(5,7,14,0.75) 100%)',
      'quicklink-text': '#f9fafb',
      'quicklink-badge': 'rgba(217,119,6,0.45)',
      'testimonial-overlay': 'rgba(5,7,14,0.88)',
    },
    heroOverlay: {
      from: 'rgba(5,7,14,0.85)',
      to: 'rgba(5,7,14,0.65)',
    },
    quickActions: {
      overlay: 'linear-gradient(200deg, rgba(5,7,14,0.2) 0%, rgba(5,7,14,0.75) 100%)',
      text: '#f9fafb',
      badge: 'rgba(217,119,6,0.45)',
    },
  },
};

export const styleOrder: StyleKey[] = ['heritage', 'modern', 'nocturne'];
