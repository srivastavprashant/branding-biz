import { useCounterAnimation } from '@/hooks/useCounterAnimation';

/**
 * Animated number counter that triggers when it enters the viewport.
 *
 * @param {number} value - target number to count up to
 * @param {string} [suffix] - text appended after the number (e.g. '+', 'x')
 * @param {string} label - descriptive label below the number
 */
export function StatCounter({ value, suffix = '', label }) {
  const { count, ref } = useCounterAnimation(value);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <span className="font-heading text-h1 font-bold text-brand-yellow">
        {count}{suffix}
      </span>
      <span className="text-body text-light-muted dark:text-dark-muted text-center">
        {label}
      </span>
    </div>
  );
}
