import Image from 'next/image';
import Link from 'next/link';
import { highlightDishes } from '@/data/siteContent';

export function MenuSpotlight() {
  const spotlight = highlightDishes.slice(0, 3);

  return (
    <section className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-[#d8e1ea] bg-white/95 shadow-sm">
      <div className="flex flex-col gap-4 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.3em] text-[#637c8c]">On the menu</p>
          <h2 className="font-display text-2xl font-semibold text-slate-900">Chef highlights</h2>
          <p className="mt-2 max-w-xl text-sm text-slate-600">
            Three dishes showcasing our all-day dining: the perfect balance of comfort, craft and celebration.
          </p>
        </div>
        <Link
          href="/menus"
          className="inline-flex items-center rounded-full bg-[#637c8c] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4f6574]"
        >
          View full menus
        </Link>
      </div>
      <div className="grid gap-4 px-4 pb-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {spotlight.map((dish) => (
          <div key={dish.name} className="group overflow-hidden rounded-2xl border border-[#d8e1ea] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="relative h-48 w-full">
              <Image
                src={dish.image}
                alt={dish.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <p className="absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#273640]">
                Signature
              </p>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-slate-900">{dish.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{dish.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
