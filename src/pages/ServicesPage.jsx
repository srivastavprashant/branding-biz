import { usePageMeta } from '@/hooks/usePageMeta';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ServiceCategorySection } from '@/components/sections/services/ServiceCategorySection';
import { ContactCTASection } from '@/components/sections/home/ContactCTASection';

export default function ServicesPage() {
  usePageMeta(
    'Our Services — Branding Biz',
    'Explore all services offered by Branding Biz: website design, social media management, brand videos, Meta ads, events, franchise sales, and more.'
  );

  return (
    <main>
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-light-bg dark:bg-[#080808] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection variant="fadeUp" className="text-center">
            <p className="font-heading text-brand-yellow font-semibold text-body-lg mb-4 uppercase tracking-widest">
              What We Offer
            </p>
            <h1 className="font-heading text-h1 font-extrabold text-dark-bg dark:text-white mb-6">
              Our Services
            </h1>
            <p className="text-body-lg text-light-muted dark:text-white/50 max-w-2xl mx-auto">
              From digital domination to business expansion — we've got every angle covered.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <ServiceCategorySection category="digital-domination" index={0} />
      <ServiceCategorySection category="content-creative" index={1} />
      <ServiceCategorySection category="business-expansion" index={2} />
      <ServiceCategorySection category="adulting-for-businesses" index={3} />
      <ContactCTASection />
    </main>
  );
}
