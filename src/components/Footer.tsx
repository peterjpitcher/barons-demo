import Link from 'next/link';

export function Footer() {
  return (
    <footer className="site-footer border-t py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6">
        <div>
          <p className="font-display text-lg font-semibold">The Cricketers</p>
          <p className="mt-2 text-sm text-muted">
            Horsell Birch, Woking, Surrey GU21 4XB
            <br />
            Tel:{' '}
            <Link href="tel:01483762363" className="underline-offset-4 hover:underline">
              01483 762363
            </Link>
            <br />
            Email:{' '}
            <Link href="mailto:manager.thecricketers@baronspubs.com" className="underline-offset-4 hover:underline">
              manager.thecricketers@baronspubs.com
            </Link>
          </p>
        </div>
        <div>
          <p className="font-semibold">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link href="/menus" className="hover:text-accent">
                Menus
              </Link>
            </li>
            <li>
              <Link href="/whats-on" className="hover:text-accent">
                What&apos;s On
              </Link>
            </li>
            <li>
              <Link href="/private-hire" className="hover:text-accent">
                Private Hire
              </Link>
            </li>
            <li>
              <Link href="/barons-family" className="hover:text-accent">
                Barons Family
              </Link>
            </li>
            <li>
              <Link href="/barons-club" className="hover:text-accent">
                Barons Club
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Stay in touch</p>
          <p className="mt-3 text-sm text-muted">
            Join the Barons Family newsletter for event inspiration, seasonal menus and loyalty treats.
          </p>
          <Link href="/newsletter" className="button-accent mt-4 inline-flex rounded-full px-4 py-2 text-sm font-semibold">
            Join the newsletter
          </Link>
        </div>
        <div>
          <p className="font-semibold">Barons Family</p>
          <p className="mt-3 text-sm text-muted">
            Eleven pubs across Surrey &amp; Berkshire delivering warm hospitality, flexible spaces and year-round events.
          </p>
          <div className="mt-4 flex gap-3 text-sm text-muted">
            <Link href="https://www.instagram.com/thecricketershorsell/" className="hover:text-accent">
              Instagram
            </Link>
            <Link href="https://www.facebook.com/crickshorsell" className="hover:text-accent">
              Facebook
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-subtle">
        © {new Date().getFullYear()} Barons Pub Company · The Cricketers, part of the Barons Family
      </div>
    </footer>
  );
}
