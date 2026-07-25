import HeroSlider from '@/components/home/HeroSlider';
import PickupNoticeBanner from '@/components/ui/PickupNoticeBanner';
import CategoryGrid from '@/components/home/CategoryGrid';
import FeaturedProductsSection from '@/components/home/FeaturedProductsSection';
import StoreLocationCard from '@/components/home/StoreLocationCard';
import TestimonialSection from '@/components/home/TestimonialSection';
import FaqSection from '@/components/home/FaqSection';

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Banner Slider */}
      <HeroSlider />

      {/* Click & Collect Explainer Banner */}
      <PickupNoticeBanner />

      {/* Category Visual Grid */}
      <CategoryGrid />

      {/* Tabbed Product Showcase */}
      <FeaturedProductsSection />

      {/* Showroom & Google Map Card */}
      <StoreLocationCard />

      {/* Client Testimonials */}
      <TestimonialSection />

      {/* Click & Collect FAQs */}
      <FaqSection />
    </div>
  );
}
