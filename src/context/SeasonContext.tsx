'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import { type SeasonKey, seasons, seasonOrder } from '@/config/seasons';

type SeasonContextValue = {
  season: SeasonKey;
  setSeason: (season: SeasonKey) => void;
  config: (typeof seasons)[SeasonKey];
  available: SeasonKey[];
};

const SeasonContext = createContext<SeasonContextValue | undefined>(undefined);

export function SeasonProvider({ children }: { children: React.ReactNode }) {
  const [season, setSeason] = useState<SeasonKey>('classic');

  const value = useMemo(() => {
    return {
      season,
      setSeason,
      config: seasons[season],
      available: seasonOrder,
    } satisfies SeasonContextValue;
  }, [season]);

  return <SeasonContext.Provider value={value}>{children}</SeasonContext.Provider>;
}

export function useSeason() {
  const ctx = useContext(SeasonContext);
  if (!ctx) {
    throw new Error('useSeason must be used within SeasonProvider');
  }
  return ctx;
}
