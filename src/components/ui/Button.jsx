import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

const variantClasses = {
  primary:   'bg-brand-yellow text-dark-bg hover:bg-brand-yellow-hover',
  secondary: 'border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-dark-bg',
  ghost:     'hover:text-brand-yellow',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

// Pre-built motion components for common element types to avoid
// creating new component types on every render.
const MotionButton = motion.button;
const MotionA = motion.a;

/**
 * Polymorphic Button component.
 * @param {'primary'|'secondary'|'ghost'} variant
 * @param {'sm'|'md'|'lg'} size
 * @param {React.ElementType} as - element or component to render as (default: 'button')
 */
export function Button({
  variant = 'primary',
  size = 'md',
  as: Component = 'button',
  className,
  children,
  ...props
}) {
  // For Link (react-router), we still need motion() but memoize it
  // so it's not recreated on every render.
  const MotionComponent = useMemo(() => {
    if (Component === 'button') return MotionButton;
    if (Component === 'a') return MotionA;
    return motion(Component);
  }, [Component]);

  return (
    <MotionComponent
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-heading font-semibold transition-colors duration-200',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
