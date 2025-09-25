'use client';

import { useSeason } from '@/context/SeasonContext';
import { seasons } from '@/config/seasons';

const DEMO_NOTICE = 'Non-functional demo by Orange Jelly for Barons';

export function SuperHeader() {
  const { season, setSeason } = useSeason();

  return (
    <div
      className="flex w-full items-center justify-center border-b border-white/20 bg-[#1d2b36] px-4 py-2 text-xs font-semibold text-slate-100 sm:text-sm"
      role="region"
      aria-label="Season controls"
    >
      <div className="flex w-full max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <span className="uppercase tracking-[0.3em] text-slate-300">Season</span>
          <div className="flex items-center gap-1">
            {Object.keys(seasons).map((key) => {
              const k = key as keyof typeof seasons;
              const active = season === k;
              return (
                <button
                  key={k}
                  type="button"
                  onClick={() => setSeason(k)}
                  className={`rounded-full px-3 py-1 transition ${
                    active ? 'bg-white text-[#1d2b36]' : 'bg-white/10 text-slate-200 hover:bg-white/20'
                  }`}
                >
                  {seasons[k].label}
                </button>
              );
            })}
          </div>
        </div>
        <p className="text-center text-[11px] uppercase tracking-[0.3em] text-slate-200 sm:text-right">
          {DEMO_NOTICE}
        </p>
      </div>
    </div>
  );
}
