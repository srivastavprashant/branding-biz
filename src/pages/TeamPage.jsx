import { usePageMeta } from '@/hooks/usePageMeta';
import { TeamHero } from '@/components/sections/team/TeamHero';
import { TeamGridSection } from '@/components/sections/team/TeamGridSection';

export default function TeamPage() {
  usePageMeta(
    'Meet the Team — Branding Biz',
    'Meet the mad scientists of marketing at Branding Biz. Our team of creatives, strategists, and storytellers are here to make your brand unforgettable.'
  );

  return (
    <main>
      <TeamHero />
      <TeamGridSection />
    </main>
  );
}
