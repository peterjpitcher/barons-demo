import Image from 'next/image';
import { galleryImages } from '@/data/siteContent';

export function ExperienceGallery() {
  return (
    <section className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border surface-card shadow-sm">
      <div className="grid gap-0 lg:grid-cols-[0.6fr,1.4fr]">
        <div className="flex flex-col justify-between gap-6 px-4 py-10 sm:px-6">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Atmosphere</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-primary">A glimpse around The Cricketers</h2>
            <p className="mt-3 text-sm text-muted">
              Imagery sourced from the current Barons library to capture the warmth of the spaces, pods and dishes that
              guests love. The gallery will evolve into a CMS-powered carousel with captions and downloadable brand
              assets.
            </p>
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-subtle">
            Swap seasons or styles above to imagine future photography briefs.
          </p>
        </div>
        <div
          className="grid gap-3 px-4 pb-10 sm:grid-cols-2 lg:grid-cols-3 lg:px-6"
          style={{ gridAutoRows: 'minmax(160px, 1fr)' }}
        >
          {galleryImages.map((image, index) => {
            const emphasis = index === 0 || index === 3 ? 'lg:col-span-2' : '';
            return (
              <figure
                key={image.src}
                className={`group relative flex h-full w-full overflow-hidden rounded-3xl shadow-sm ${emphasis}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 transition group-hover:opacity-80" />
                <figcaption className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                  {image.caption}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
