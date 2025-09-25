import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-[#1d2b36] bg-[#1d2b36] py-10 text-slate-100">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold text-white">The Cricketers</p>
          <p className="mt-2 text-sm text-slate-200">
            Horsell Birch, Woking, Surrey GU21 4XB
            <br />
            Tel:{' '}
            <Link href="tel:01483762363" className="text-slate-100 hover:text-white/80">
              01483 762363
            </Link>
            <br />
            Email:{' '}
            <Link href="mailto:manager.thecricketers@baronspubs.com" className="text-slate-100 hover:text-white/80">
              manager.thecricketers@baronspubs.com
            </Link>
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            <li>
              <Link href="/menus" className="hover:text-white">
                Menus
              </Link>
            </li>
            <li>
              <Link href="/whats-on" className="hover:text-white">
                What&apos;s On
              </Link>
            </li>
            <li>
              <Link href="/private-hire" className="hover:text-white">
                Private Hire
              </Link>
            </li>
            <li>
              <Link href="/barons-family" className="hover:text-white">
                Barons Family
              </Link>
            </li>
            <li>
              <Link href="/barons-club" className="hover:text-white">
                Barons Club
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Stay in touch</p>
          <p className="mt-3 text-sm text-slate-200">
            Join the Barons Family newsletter for event inspiration, seasonal menus and loyalty treats.
          </p>
          <Link
            href="/newsletter"
            className="mt-4 inline-flex rounded-full bg-[#637c8c] px-4 py-2 text-sm font-semibold text-white hover:bg-[#4f6574]"
          >
            Join the newsletter
          </Link>
        </div>
        <div>
          <p className="font-semibold text-white">Barons Family</p>
          <p className="mt-3 text-sm text-slate-200">
            Eleven pubs across Surrey & Berkshire delivering warm hospitality, flexible spaces and year-round events.
          </p>
          <div className="mt-4 flex gap-3 text-sm text-slate-200">
            <Link href="https://www.instagram.com/thecricketershorsell/" className="hover:text-white">
              Instagram
            </Link>
            <Link href="https://www.facebook.com/crickshorsell" className="hover:text-white">
              Facebook
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-[#314759] pt-6 text-center text-xs text-slate-300">
        © {new Date().getFullYear()} Barons Pub Company · The Cricketers, part of the Barons Family
      </div>
    </footer>
  );
}
