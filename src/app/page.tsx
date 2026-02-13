import HeroSection from '@/components/HeroSection';
import MissionStatsSection from '@/components/MissionStatsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import QualitySection from '@/components/QualitySection';
import PatientPortalSection from '@/components/PatientPortalSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <main>
      {/* ── Hero: spacing="none" — manages its own layout ────────────── */}
      <HeroSection />

      {/* ── Sections: each manages its own vertical rhythm via         ──
       *    styled-jsx using --space-section-py.                        ──
       *    The visual hierarchy follows the Proximity Rule:            ──
       *      • LARGE gap between sections (48→96px fluid)              ──
       *      • SMALL gap between sibling elements (8–24px)             ── */}
      <MissionStatsSection />
      <WhyChooseUsSection />
      <QualitySection />
      <PatientPortalSection />
      <TestimonialsSection />
    </main>
  );
}
