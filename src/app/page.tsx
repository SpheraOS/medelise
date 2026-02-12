import HeroSection from '@/components/HeroSection';
import MissionStatsSection from '@/components/MissionStatsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import QualitySection from '@/components/QualitySection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MissionStatsSection />
      <WhyChooseUsSection />
      <QualitySection />
      <TestimonialsSection />
    </div>
  );
}
