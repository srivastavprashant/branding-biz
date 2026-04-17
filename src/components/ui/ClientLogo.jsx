import { cn } from '@/utils/cn';

/**
 * Styled placeholder representing a client logo.
 * @param {string} name - company name (used for accessible label)
 * @param {string} placeholderColor - Tailwind bg class (e.g. 'bg-blue-500')
 */
export function ClientLogo({ name, placeholderColor, className }) {
  const initial = name ? name.charAt(0).toUpperCase() : '?';

  return (
    <div
      aria-label={name}
      role="img"
      className={cn(
        'flex items-center justify-center rounded-lg w-24 h-16',
        // Use provided color, or a theme-aware fallback
        placeholderColor || 'bg-dark-bg/8 dark:bg-white/8',
        className
      )}
    >
      <span className="text-xl font-heading font-bold text-white drop-shadow" aria-hidden="true">
        {initial}
      </span>
    </div>
  );
}
