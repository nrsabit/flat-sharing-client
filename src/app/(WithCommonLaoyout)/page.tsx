import AdSection from "@/components/UI/Homepage/AdSection/AdSection";
import AdviceSection from "@/components/UI/Homepage/AdviceSection/AdviceSection";
import BannerSection from "@/components/UI/Homepage/BannerSection/BannerSection";
import FeatureSection from "@/components/UI/Homepage/FeatureSection/FeatureSection";
import FlatsSection from "@/components/UI/Homepage/FlatsSection/FlatsSection";
import ShareFlatSection from "@/components/UI/Homepage/ShareFlatSection/ShareFlatSection";
import TestimonialsSection from "@/components/UI/Homepage/TestimonialsSection/TestimonialsSection";

const HomePage = () => {
  return (
    <>
      <BannerSection />
      <ShareFlatSection />
      <FlatsSection />
      <TestimonialsSection />
      <AdviceSection />
      <AdSection />
      <FeatureSection/>
    </>
  );
};

export default HomePage;
