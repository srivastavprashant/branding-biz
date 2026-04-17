import { AnimatedSection } from '@/components/ui/AnimatedSection';

const CONTACT_DETAILS = [
  { icon: '📞', label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: '✉️', label: 'Email', value: 'hello@brandingbiz.in', href: 'mailto:hello@brandingbiz.in' },
  { icon: '📍', label: 'Address', value: 'Indra Nagar, Lucknow, Uttar Pradesh, India — 226016', href: null },
];

const SOCIAL_LINKS = [
  { label: 'Instagram', href: '#', icon: '📸' },
  { label: 'Facebook', href: '#', icon: '👥' },
  { label: 'LinkedIn', href: '#', icon: '💼' },
  { label: 'Twitter / X', href: '#', icon: '🐦' },
  { label: 'YouTube', href: '#', icon: '▶️' },
];

export function ContactInfoSection() {
  return (
    <section className="py-24 bg-light-bg dark:bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimatedSection variant="fadeUp">
            <h2 className="font-heading text-h2 font-bold text-dark-bg dark:text-white mb-8">
              Get in Touch
            </h2>
            <div className="space-y-6">
              {CONTACT_DETAILS.map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="text-2xl mt-1" aria-hidden="true">{icon}</span>
                  <div>
                    <p className="font-heading font-semibold text-dark-bg dark:text-white text-sm uppercase tracking-wide mb-1">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="text-body text-light-muted dark:text-white/55 hover:text-brand-yellow transition-colors focus:outline-none focus:ring-2 focus:ring-brand-yellow rounded">
                        {value}
                      </a>
                    ) : (
                      <p className="text-body text-light-muted dark:text-white/55">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fadeUp" delay={0.15}>
            <h2 className="font-heading text-h2 font-bold text-dark-bg dark:text-white mb-8">
              Follow Us
            </h2>
            <div className="flex flex-wrap gap-4">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                /* TODO: Replace with real URL */
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-light-surface dark:bg-white/[0.04] border border-light-border dark:border-white/8 text-light-muted dark:text-white/55 hover:text-brand-yellow hover:border-brand-yellow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                >
                  <span aria-hidden="true">{icon}</span>
                  <span className="font-heading font-semibold text-sm">{label}</span>
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
