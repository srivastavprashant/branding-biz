import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

/**
 * Card displaying a single service offering.
 *
 * @param {string} icon - emoji or SVG component
 * @param {string} title
 * @param {string} description
 * @param {string} [className]
 */
export function ServiceCard({ icon, title, description, className }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={cn(
        'bg-light-surface dark:bg-white/[0.03] rounded-xl p-6',
        'border border-light-border dark:border-white/8',
        'flex flex-col gap-4',
        className
      )}
    >
      <div className="text-4xl" aria-hidden="true">{icon}</div>
      <h3 className="font-heading text-h3 font-semibold text-dark-bg dark:text-white">
        {title}
      </h3>
      <p className="text-body text-light-muted dark:text-white/55 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
