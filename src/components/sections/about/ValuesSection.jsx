import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';

const VALUES = [
  {
    id: 'results',
    icon: '🎯',
    title: 'Results First',
    description: "We don't chase vanity metrics. Every strategy we build is designed to deliver measurable, real-world results for your business.",
  },
  {
    id: 'bold',
    icon: '⚡',
    title: 'Bold Thinking',
    description: "Safe is boring. We push boundaries, challenge conventions, and create campaigns that make people stop and pay attention.",
  },
  {
    id: 'transparent',
    icon: '🔍',
    title: 'Radical Transparency',
    description: "No smoke and mirrors. You'll always know exactly what we're doing, why we're doing it, and what results it's delivering.",
  },
  {
    id: 'partnership',
    icon: '🤝',
    title: 'True Partnership',
    description: "We treat your business like our own. Your wins are our wins, your challenges are our challenges. We're in this together.",
  },
];

export function ValuesSection() {
  return (
    <section className="py-24 bg-light-bg dark:bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="mb-16">
          <SectionHeading
            title="Why Choose Us"
            subtitle="Four principles that guide everything we do."
          />
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((value) => (
            <div
              key={value.id}
              className="bg-light-surface dark:bg-white/[0.03] rounded-xl p-6 border border-light-border dark:border-white/8 flex flex-col gap-4"
            >
              <div className="text-4xl" aria-hidden="true">{value.icon}</div>
              <h3 className="font-heading text-h3 font-semibold text-dark-bg dark:text-white">
                {value.title}
              </h3>
              <p className="text-body text-light-muted dark:text-white/55 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
