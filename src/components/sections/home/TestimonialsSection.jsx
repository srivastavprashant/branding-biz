import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { TESTIMONIALS } from '@/data/testimonials';

const featured = TESTIMONIALS.slice(0, 3);

function TestimonialCard({ quote, authorName, authorRole, company, avatarPlaceholder, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="relative bg-dark-bg/5 dark:bg-white/[0.03]
        border border-dark-bg/10 dark:border-white/8
        rounded-2xl p-7 flex flex-col gap-5
        hover:border-brand-yellow/30 transition-all duration-300"
    >
      {/* Decorative quote mark */}
      <div
        className="absolute top-5 right-6 font-heading font-extrabold text-brand-yellow/20 leading-none select-none"
        style={{ fontSize: '5rem' }}
        aria-hidden="true"
      >
        "
      </div>

      {/* Stars */}
      <div className="flex gap-1" aria-label="5 stars">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-brand-yellow" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-dark-bg/70 dark:text-white/70 text-sm leading-relaxed flex-1 italic relative z-10">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-dark-bg/10 dark:border-white/8">
        <div
          className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center flex-shrink-0"
          aria-hidden="true"
        >
          <span className="text-dark-bg font-heading font-bold text-sm">{avatarPlaceholder}</span>
        </div>
        <div>
          <p className="font-heading font-bold text-dark-bg dark:text-white text-sm">{authorName}</p>
          <p className="text-dark-bg/40 dark:text-white/40 text-xs">
            {authorRole}{company ? `, ${company}` : ''}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export function TestimonialsSection() {
  return (
    <section className="relative py-16 sm:py-28 bg-light-bg dark:bg-[#0A0A0A] overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(245,197,24,0.04) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="mb-16 text-center">
          <p className="font-heading text-brand-yellow text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Testimonials
          </p>
          <h2
            className="font-heading font-extrabold text-dark-bg dark:text-white leading-[1.1] mb-5"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}
          >
            Don't Take Our Word.{' '}
            <span className="text-brand-yellow">Take Theirs.</span>
          </h2>
          <p className="text-dark-bg/45 dark:text-white/45 text-lg max-w-xl mx-auto">
            Real results. Real brands. Real growth.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((t, i) => (
            <TestimonialCard
              key={t.id}
              quote={t.quote}
              authorName={t.authorName}
              authorRole={t.authorRole}
              company={t.company}
              avatarPlaceholder={t.avatarPlaceholder}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
