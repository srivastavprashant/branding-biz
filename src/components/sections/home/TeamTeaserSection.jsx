import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';
import { TEAM_MEMBERS } from '@/data/team';

const featured = TEAM_MEMBERS.slice(0, 3);

function TeamCard({ name, role, bio, imagePlaceholder, socialLinks = {}, index }) {
  return (
    // Outer div: scroll-in animation only
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Inner div: hover variant propagation only */}
      <motion.div
        whileHover="hover"
        initial="rest"
        animate="rest"
        className="relative rounded-2xl overflow-hidden
          bg-light-surface dark:bg-white/[0.03]
          border border-light-border dark:border-white/8
          hover:border-brand-yellow/40 transition-colors duration-300"
      >
      {/* Image placeholder */}
      <div
        role="img"
        aria-label={name}
        className={`w-full aspect-[4/3] ${imagePlaceholder || 'bg-gradient-to-br from-brand-yellow to-orange-500'}`}
      />

      {/* Info */}
      <div className="p-5">
        <h3 className="font-heading font-bold text-dark-bg dark:text-white text-lg">{name}</h3>
        <p className="text-brand-yellow text-sm font-medium mt-0.5">{role}</p>
      </div>

      {/* Hover overlay — full card, opacity-only transition */}
      <motion.div
        variants={{ hover: { opacity: 1 }, rest: { opacity: 0 } }}
        initial="rest"
        transition={{ duration: 0.2 }}
        className="absolute inset-0 z-10 flex flex-col justify-end p-6 bg-[#0A0A0A]/95"
      >
        <p className="text-white/85 text-sm leading-relaxed mb-4">{bio}</p>
        <div className="flex gap-3">
          {socialLinks.instagram && (
            <a href="#" aria-label={`${name} on Instagram`} className="text-brand-yellow hover:text-white transition-colors">
              {/* TODO: Replace with real URL */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          )}
          {socialLinks.linkedin && (
            <a href="#" aria-label={`${name} on LinkedIn`} className="text-brand-yellow hover:text-white transition-colors">
              {/* TODO: Replace with real URL */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          )}
          {socialLinks.twitter && (
            <a href="#" aria-label={`${name} on Twitter`} className="text-brand-yellow hover:text-white transition-colors">
              {/* TODO: Replace with real URL */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          )}
        </div>
      </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function TeamTeaserSection() {
  return (
    <section className="relative py-16 sm:py-28 bg-light-surface dark:bg-[#0D0D0D] overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 100% 0%, rgba(245,197,24,0.05) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="mb-16 text-center">
          <p className="font-heading text-brand-yellow text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            The Team
          </p>
          <h2
            className="font-heading font-extrabold text-dark-bg dark:text-white leading-[1.1] mb-5"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}
          >
            Mad Scientists of{' '}
            <span className="text-brand-yellow">Marketing</span>
          </h2>
          <p className="text-dark-bg/45 dark:text-white/45 text-lg max-w-xl mx-auto">
            The brilliant, slightly unhinged people who make your brand impossible to ignore.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {featured.map((member, i) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              bio={member.bio}
              imagePlaceholder={member.imagePlaceholder}
              socialLinks={member.socialLinks}
              index={i}
            />
          ))}
        </div>

        <AnimatedSection variant="fadeUp" className="flex justify-center">
          <Button variant="secondary" size="lg" as={Link} to="/team">
            Meet the Full Team
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
