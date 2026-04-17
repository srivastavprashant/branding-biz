import { useTheme } from '@/hooks/useTheme';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { CLIENTS } from '@/data/clients';

const marqueeClients = [...CLIENTS, ...CLIENTS];

function ClientLogoTile({ name }) {
  return (
    <div
      aria-label={name}
      role="img"
      className="flex-shrink-0 flex items-center justify-center rounded-xl w-32 h-16 mx-3
        bg-dark-bg/5 dark:bg-white/[0.04]
        border border-dark-bg/10 dark:border-white/8
        hover:border-brand-yellow/50 hover:bg-brand-yellow/5
        transition-all duration-300 cursor-default"
    >
      <span className="font-heading font-bold text-dark-bg/60 dark:text-white/60 text-xs tracking-wide text-center px-2" aria-hidden="true">
        {name.split(' ').slice(0, 2).join(' ')}
      </span>
    </div>
  );
}

export function ClientsSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const fadeColor = isDark ? '#080808' : '#FAFAFA';

  return (
    <section className="relative py-16 sm:py-24 bg-light-bg dark:bg-[#080808] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-bg/10 dark:via-white/10 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-bg/10 dark:via-white/10 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <AnimatedSection variant="fadeUp" className="text-center">
          <p className="font-heading text-brand-yellow text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Our Clients
          </p>
          <h2
            className="font-heading font-extrabold text-dark-bg dark:text-white leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
          >
            200+ Brands That{' '}
            <span className="text-brand-yellow">Trust Us</span>
          </h2>
          <p className="text-dark-bg/45 dark:text-white/45 max-w-xl mx-auto">
            From local legends to growing empires — we've helped them all dominate their market.
          </p>
        </AnimatedSection>
      </div>

      {/* Marquee track */}
      <div className="relative overflow-hidden">
        {/* Left fade — matches section background */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to right, ${fadeColor}, transparent)` }}
          aria-hidden="true"
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to left, ${fadeColor}, transparent)` }}
          aria-hidden="true"
        />

        <div className="flex animate-marquee" aria-hidden="true">
          {marqueeClients.map((client, i) => (
            <ClientLogoTile key={`${client.id}-${i}`} name={client.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
