import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';
import { SERVICES } from '@/data/services';

const featuredServices = SERVICES.slice(0, 6);

function ServiceItem({ icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, borderColor: 'rgba(245,197,24,0.4)' }}
      className="group relative bg-dark-bg/5 dark:bg-white/[0.03] border border-dark-bg/10 dark:border-white/8 rounded-2xl p-6 cursor-default
        transition-all duration-300 hover:bg-dark-bg/8 dark:hover:bg-white/[0.06]"
    >
      {/* Yellow left accent on hover */}
      <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-brand-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />

      <div className="text-4xl mb-4" aria-hidden="true">{icon}</div>

      <h3 className="font-heading font-bold text-dark-bg dark:text-white text-lg mb-2 group-hover:text-brand-yellow transition-colors duration-200">
        {title}
      </h3>

      <p className="text-dark-bg/45 dark:text-white/45 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export function ServicesTeaserSection() {
  return (
    <section className="relative py-16 sm:py-28 bg-light-surface dark:bg-[#0D0D0D] overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 0% 100%, rgba(245,197,24,0.06) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection variant="fadeUp" className="mb-16 text-center">
          <p className="font-heading text-brand-yellow text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            What We Do
          </p>
          <h2
            className="font-heading font-extrabold text-dark-bg dark:text-white leading-[1.1] mb-5"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}
          >
            We Don't Just Market.{' '}
            <span className="text-brand-yellow">We Dominate.</span>
          </h2>
          <p className="text-dark-bg/50 dark:text-white/50 text-lg max-w-2xl mx-auto">
            From digital domination to brand storytelling — every angle covered, every channel owned.
          </p>
        </AnimatedSection>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {featuredServices.map((service, i) => (
            <ServiceItem
              key={service.id}
              icon={service.icon}
              title={service.name}
              description={service.description}
              index={i}
            />
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection variant="fadeUp" className="flex justify-center">
          <Button variant="secondary" size="lg" as={Link} to="/services">
            View All 11 Services
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
