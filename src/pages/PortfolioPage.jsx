import { usePageMeta } from '@/hooks/usePageMeta';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ClientsGridSection } from '@/components/sections/portfolio/ClientsGridSection';
import { TestimonialsCarouselSection } from '@/components/sections/portfolio/TestimonialsCarouselSection';

export default function PortfolioPage() {
  usePageMeta(
    'Portfolio & Clients — Branding Biz',
    'See the brands we\'ve helped grow. 200+ clients, real results, and testimonials from businesses across Lucknow and beyond.'
  );

  return (
    <main>
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-light-bg dark:bg-[#080808] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection variant="fadeUp" className="text-center">
            <p className="font-heading text-brand-yellow font-semibold text-body-lg mb-4 uppercase tracking-widest">
              Our Work
            </p>
            <h1 className="font-heading text-h1 font-extrabold text-dark-bg dark:text-white mb-6">
              Partners in Crime
            </h1>
            <p className="text-body-lg text-light-muted dark:text-white/50 max-w-2xl mx-auto">
              200+ brands that chose to dominate their market with us.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <ClientsGridSection />
      <TestimonialsCarouselSection />
    </main>
  );
}
