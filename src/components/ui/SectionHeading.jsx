import { cn } from '@/utils/cn';

/**
 * Large bold section heading with optional subtitle.
 *
 * @param {string} title
 * @param {string} [subtitle]
 * @param {'left'|'center'} [align='center']
 * @param {string} [className]
 */
export function SectionHeading({ title, subtitle, align = 'center', className }) {
  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left', className)}>
      <h2 className="font-heading text-h2 font-bold text-dark-bg dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-body-lg text-light-muted dark:text-white/50 mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}
