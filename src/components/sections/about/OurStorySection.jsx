import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function OurStorySection() {
  return (
    <section className="py-24 bg-light-surface dark:bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <AnimatedSection variant="slideRight">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-brand-yellow/20 to-brand-yellow/5 border border-light-border dark:border-white/10 p-12 flex flex-col items-center justify-center min-h-80">
              <p className="font-heading text-8xl font-extrabold text-brand-yellow">2017</p>
              <p className="font-heading text-xl font-semibold text-dark-bg dark:text-white mt-4 text-center">
                Where It All Began
              </p>
              <p className="text-light-muted dark:text-white/50 mt-2 text-center">
                Indra Nagar, Lucknow, India
              </p>
            </div>
          </AnimatedSection>

          {/* Story text */}
          <AnimatedSection variant="slideLeft">
            <SectionHeading title="Our Story" align="left" />
            <div className="mt-6 space-y-4 text-body text-light-muted dark:text-white/60 leading-relaxed">
              <p>
                It started with a simple belief: businesses in Lucknow deserved world-class digital marketing. In 2017, from a small office in Indra Nagar, Branding Biz was born.
              </p>
              <p>
                What began as a two-person operation has grown into a full-service digital agency with a team of passionate marketers, designers, videographers, and strategists — all united by one goal: making your brand impossible to ignore.
              </p>
              <p>
                We've worked with 200+ brands across industries — from restaurants and jewellers to tech startups and educational institutions. Every project has taught us something new, and every client has made us better.
              </p>
              <p>
                Today, Branding Biz is more than an agency. We're your growth partner, your creative team, and your unfair advantage in the digital jungle.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
