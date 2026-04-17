import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { SERVICES, SERVICE_CATEGORIES } from '@/data/services';

export function ServiceCategorySection({ category, index = 0 }) {
  const categoryMeta = SERVICE_CATEGORIES.find((c) => c.id === category);
  const services = SERVICES.filter((s) => s.category === category);

  if (!categoryMeta) return null;

  // Alternate background between sections
  const isEven = index % 2 === 0;

  return (
    <section className={isEven
      ? 'py-20 bg-light-bg dark:bg-[#0A0A0A]'
      : 'py-20 bg-light-surface dark:bg-[#0D0D0D]'
    }>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="mb-12">
          <SectionHeading
            title={categoryMeta.label}
            subtitle={categoryMeta.description}
          />
        </AnimatedSection>

        <AnimatedSection
          variant="scaleIn"
          stagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.name}
              description={service.description}
            />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
