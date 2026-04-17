import { usePageMeta } from '@/hooks/usePageMeta';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { WhoWeAreSection } from '@/components/sections/home/WhoWeAreSection';
import { ServicesTeaserSection } from '@/components/sections/home/ServicesTeaserSection';
import { ClientsSection } from '@/components/sections/home/ClientsSection';
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection';
import { TeamTeaserSection } from '@/components/sections/home/TeamTeaserSection';
import { ContactCTASection } from '@/components/sections/home/ContactCTASection';

export default function HomePage() {
  usePageMeta(
    'Branding Biz — Digital Marketing Agency, Lucknow',
    'Branding Biz is a digital marketing agency based in Indra Nagar, Lucknow, India. We specialize in website design, social media management, brand videos, and more. Operating since 2017.'
  );

  return (
    <main id="main-content">
      <HeroSection />
      <WhoWeAreSection />
      <ServicesTeaserSection />
      <ClientsSection />
      <TestimonialsSection />
      <TeamTeaserSection />
      <ContactCTASection />
    </main>
  );
}
