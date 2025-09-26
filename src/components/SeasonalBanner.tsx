import Link from 'next/link';

const BANNER_MESSAGES = [
  'Christmas bookings now open',
  'Festive menus, private dining and party packages',
  'Reserve before 1 November for complimentary fizz on arrival',
];

export function SeasonalBanner() {
  const repeated = Array.from({ length: 2 }, () => BANNER_MESSAGES).flat();

  return (
    <div className="seasonal-banner" role="region" aria-label="Christmas booking update">
      <p className="sr-only">
        Christmas bookings now open. Secure your festive table today and explore party packages.
      </p>
      <div className="seasonal-banner__inner">
        <div className="seasonal-banner__marquee" aria-hidden="true">
          <div className="seasonal-banner__track">
            {repeated.map((message, index) => (
              <span key={`${index}-${message}`} className="seasonal-banner__item">
                {message}
              </span>
            ))}
          </div>
        </div>
        <Link
          href="/christmas"
          className="seasonal-banner__cta button-accent rounded-full px-4 py-2 text-sm font-semibold shadow-sm"
        >
          Book Christmas dining
        </Link>
      </div>
    </div>
  );
}
