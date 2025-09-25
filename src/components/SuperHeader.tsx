'use client';

import { useSeason } from '@/context/SeasonContext';
import { seasons } from '@/config/seasons';
import { useStyle } from '@/context/StyleContext';
import { styleThemes } from '@/config/styles';

const DEMO_NOTICE = 'Non-functional demo by Orange Jelly for Barons';

export function SuperHeader() {
  const { season, setSeason } = useSeason();
  const { style, setStyle, available } = useStyle();

  return (
    <div
      className="flex w-full items-center justify-center border-b border-white/20 px-4 py-2 text-xs font-semibold sm:text-sm"
      role="region"
      aria-label="Demo controls"
      style={{ backgroundColor: 'var(--header-bg)', color: 'var(--header-text)' }}
    >
      <div className="flex w-full max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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
                  className="rounded-full px-3 py-1 text-[11px] transition"
                  style={
                    active
                      ? { backgroundColor: '#ffffff', color: 'var(--outline)' }
                      : { backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--text-subtle)' }
                  }
                  aria-pressed={active}
                >
                  {seasons[k].label}
                </button>
              );
            })}
          </div>
        </div>
        <p className="text-center text-[11px] uppercase tracking-[0.3em] text-slate-200 sm:flex-1 sm:text-right">
          {DEMO_NOTICE}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <span className="uppercase tracking-[0.3em] text-slate-300">Style</span>
          <div className="flex items-center gap-1">
            {available.map((key) => {
              const theme = styleThemes[key];
              const active = style === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setStyle(key)}
                  className="rounded-full px-3 py-1 text-[11px] transition"
                  style={
                    active
                      ? { backgroundColor: '#ffffff', color: 'var(--outline)' }
                      : { backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--text-subtle)' }
                  }
                  aria-pressed={active}
                >
                  {theme.label.split(' ')[0]}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
