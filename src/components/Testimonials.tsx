import Image from 'next/image';
import { testimonials } from '@/data/siteContent';

const backgroundImage = 'https://assets.baronspubs.com/uploads/sites/2/2018/09/Photo-28-04-2022-16-00-14-960x540.jpg';

export function Testimonials() {
  return (
    <section className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border shadow-sm">
      <Image
        src={backgroundImage}
        alt="Guests enjoying drinks in the Garden Room at The Cricketers"
        fill
        sizes="(max-width: 1024px) 100vw, 60vw"
        className="object-cover"
      />
      <div className="testimonial-overlay absolute inset-0" />
      <div className="relative px-4 py-10 text-white sm:px-6">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-subtle">Word of mouth</p>
        <h2 className="mt-2 font-display text-2xl font-semibold">Guests already love the experience</h2>
        <p className="mt-3 max-w-3xl text-sm text-subtle">
          Live reviews will feed directly from Google and our CRM. For now we showcase three quotes that capture the
          spirit of The Cricketers.
        </p>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.quote} className="flex h-full flex-col justify-between rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
              <blockquote className="text-sm text-white/90">“{item.quote}”</blockquote>
              <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wide text-subtle">
                {item.context}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
