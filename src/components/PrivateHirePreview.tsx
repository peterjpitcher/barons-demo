import Image from 'next/image';
import Link from 'next/link';
import { privateSpaces } from '@/data/siteContent';

export function PrivateHirePreview() {
  const feature = privateSpaces[0];

  return (
    <section className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border surface-card shadow-sm">
      <div className="grid gap-0 lg:grid-cols-[1.25fr,1fr]">
        <div className="flex flex-col justify-center px-4 py-10 sm:px-6">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Private hire</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-primary">Garden Room celebrations</h2>
          <p className="mt-3 text-sm text-muted">{feature.blurb}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
            <li>Pods & terrace packages for intimate gatherings.</li>
            <li>Chef-led buffets, pizza feasts and BBQ menus.</li>
            <li>Dedicated events team with 24-hour response time.</li>
          </ul>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="surface-alt-card rounded-2xl border p-4 text-xs uppercase tracking-wide text-accent">
              Deposit guidance · transparent pricing
            </div>
            <div className="surface-alt-card rounded-2xl border p-4 text-xs uppercase tracking-wide text-accent">
              Styling support · trusted suppliers
            </div>
          </div>
          <Link href="/private-hire" className="button-accent mt-6 inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold">
            Explore private hire
          </Link>
        </div>
        <div className="relative h-72 sm:h-96 lg:h-full">
          <Image
            src={feature.image}
            alt={feature.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
