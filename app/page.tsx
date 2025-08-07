import CategoriesSection from "@/components/CategoriesSection";
import FeadturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import QuotesSection from "@/components/QuotesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <FeadturedSection />
        <CategoriesSection />
        <QuotesSection />
      </main>
    </div>
  );
}
