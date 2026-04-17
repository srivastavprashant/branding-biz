import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function AboutHero() {
  return (
    <section className="pt-32 pb-24 bg-light-bg dark:bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection variant="fadeUp" className="text-center">
          <p className="font-heading text-brand-yellow font-semibold text-body-lg mb-4 uppercase tracking-widest">
            About Us
          </p>
          <h1 className="font-heading text-h1 font-extrabold text-dark-bg dark:text-white mb-6">
            Branding Biz
          </h1>
          <p className="text-body-lg text-light-muted dark:text-white/50 max-w-2xl mx-auto">
            Lucknow Born. Digitally Obsessed. Since 2017. We're the agency that turns brands into legends.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
