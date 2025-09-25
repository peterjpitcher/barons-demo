'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { styleThemes, styleOrder, type StyleKey, type StyleTheme } from '@/config/styles';

type StyleContextValue = {
  style: StyleKey;
  setStyle: (next: StyleKey) => void;
  theme: StyleTheme;
  available: StyleKey[];
};

const StyleContext = createContext<StyleContextValue | undefined>(undefined);

export function StyleProvider({ children }: { children: React.ReactNode }) {
  const [style, setStyle] = useState<StyleKey>('heritage');
  const theme = styleThemes[style];

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.dataset.style = style;
    const root = document.documentElement;
    Object.entries(theme.cssVariables).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, [style, theme]);

  const value = useMemo(() => {
    return {
      style,
      setStyle,
      theme,
      available: styleOrder,
    } satisfies StyleContextValue;
  }, [style, theme]);

  return <StyleContext.Provider value={value}>{children}</StyleContext.Provider>;
}

export function useStyle() {
  const ctx = useContext(StyleContext);
  if (!ctx) {
    throw new Error('useStyle must be used within StyleProvider');
  }
  return ctx;
}
