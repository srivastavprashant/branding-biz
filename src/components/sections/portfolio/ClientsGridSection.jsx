import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ClientLogo } from '@/components/ui/ClientLogo';
import { CLIENTS } from '@/data/clients';

export function ClientsGridSection() {
  return (
    <section className="py-24 bg-light-bg dark:bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="mb-16">
          <SectionHeading
            title="Partners in Crime"
            subtitle="200+ brands that chose to dominate their market with us."
          />
        </AnimatedSection>

        <AnimatedSection
          variant="scaleIn"
          stagger
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-items-center"
        >
          {CLIENTS.map((client) => (
            <ClientLogo
              key={client.id}
              name={client.name}
              placeholderColor={client.placeholderColor}
            />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
