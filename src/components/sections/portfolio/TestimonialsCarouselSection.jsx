import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Carousel } from '@/components/ui/Carousel';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { TESTIMONIALS } from '@/data/testimonials';

export function TestimonialsCarouselSection() {
  const items = TESTIMONIALS.map((t) => (
    <TestimonialCard
      key={t.id}
      quote={t.quote}
      authorName={t.authorName}
      authorRole={t.authorRole}
      company={t.company}
      avatarPlaceholder={t.avatarPlaceholder}
    />
  ));

  return (
    <section className="py-24 bg-light-surface dark:bg-[#0D0D0D]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="mb-16">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Real results. Real people. Real stories."
          />
        </AnimatedSection>

        <AnimatedSection variant="fadeIn">
          <Carousel items={items} showControls />
        </AnimatedSection>
      </div>
    </section>
  );
}
