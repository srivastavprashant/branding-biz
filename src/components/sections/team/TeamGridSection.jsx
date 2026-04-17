import { motion } from 'framer-motion';
import { TeamCard } from '@/components/ui/TeamCard';
import { TEAM_MEMBERS } from '@/data/team';

export function TeamGridSection() {
  return (
    <section className="py-24 bg-light-surface dark:bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, i) => (
            // Scroll-in wrapper — separate from TeamCard's hover variant system
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <TeamCard
                name={member.name}
                role={member.role}
                bio={member.bio}
                imagePlaceholder={member.imagePlaceholder}
                socialLinks={member.socialLinks}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
