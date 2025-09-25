import { Hero } from '@/components/Hero';
import { QuickActions } from '@/components/QuickActions';
import { FeaturedEvent } from '@/components/FeaturedEvent';
import { MenuSpotlight } from '@/components/MenuSpotlight';
import { PrivateHirePreview } from '@/components/PrivateHirePreview';
import { BaronsClubSignup } from '@/components/BaronsClubSignup';
import { Testimonials } from '@/components/Testimonials';
import { heroSlides } from '@/data/siteContent';

export default function HomePage() {
  return (
    <div className="space-y-16 pb-20">
      <Hero slides={heroSlides} />
      <QuickActions />
      <FeaturedEvent />
      <MenuSpotlight />
      <PrivateHirePreview />
      <BaronsClubSignup />
      <Testimonials />
    </div>
  );
}
