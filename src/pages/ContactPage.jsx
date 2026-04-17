import { usePageMeta } from '@/hooks/usePageMeta';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ContactInfoSection } from '@/components/sections/contact/ContactInfoSection';
import { ContactFormSection } from '@/components/sections/contact/ContactFormSection';
import { MapPlaceholder } from '@/components/sections/contact/MapPlaceholder';

export default function ContactPage() {
  usePageMeta(
    'Contact Us — Branding Biz',
    'Get in touch with Branding Biz. Call us, email us, or visit our office in Indra Nagar, Lucknow. Let\'s build something great together.'
  );

  return (
    <main>
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-light-bg dark:bg-[#080808] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection variant="fadeUp" className="text-center">
            <p className="font-heading text-brand-yellow font-semibold text-body-lg mb-4 uppercase tracking-widest">
              Let's Talk
            </p>
            <h1 className="font-heading text-h1 font-extrabold text-dark-bg dark:text-white mb-6">
              Contact Us
            </h1>
            <p className="text-body-lg text-light-muted dark:text-white/50 max-w-2xl mx-auto">
              Ready to break the internet? We're ready when you are.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <ContactInfoSection />
      <ContactFormSection />
      <MapPlaceholder />
    </main>
  );
}
