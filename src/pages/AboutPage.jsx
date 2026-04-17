import { usePageMeta } from '@/hooks/usePageMeta';
import { AboutHero } from '@/components/sections/about/AboutHero';
import { OurStorySection } from '@/components/sections/about/OurStorySection';
import { ValuesSection } from '@/components/sections/about/ValuesSection';
import { StatsSection } from '@/components/sections/about/StatsSection';

export default function AboutPage() {
  usePageMeta(
    'About Us — Branding Biz',
    'Learn about Branding Biz — a digital marketing agency founded in 2017 in Indra Nagar, Lucknow. Our story, values, and the team behind the magic.'
  );

  return (
    <main>
      <AboutHero />
      <OurStorySection />
      <ValuesSection />
      <StatsSection />
    </main>
  );
}
