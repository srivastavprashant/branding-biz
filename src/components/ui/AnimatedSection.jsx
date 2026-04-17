import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import * as variants from '@/utils/motionVariants';

/**
 * Scroll-reveal wrapper using Framer Motion whileInView.
 *
 * @param {'fadeUp'|'fadeIn'|'slideLeft'|'slideRight'|'scaleIn'} variant
 * @param {number} delay - animation delay in seconds
 * @param {boolean} stagger - if true, wraps children in staggerContainer
 * @param {string} className
 * @param {React.ReactNode} children
 */
export function AnimatedSection({
  variant = 'fadeUp',
  delay = 0,
  stagger = false,
  className,
  children,
}) {
  const selectedVariant = variants[variant] ?? variants.fadeUp;

  // When stagger is true, the outer div uses staggerContainer and each child
  // gets the selected variant applied individually.
  if (stagger) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={variants.staggerContainer}
        className={cn(className)}
      >
        {Array.isArray(children)
          ? children.map((child, i) => (
              <motion.div key={i} variants={selectedVariant}>
                {child}
              </motion.div>
            ))
          : <motion.div variants={selectedVariant}>{children}</motion.div>}
      </motion.div>
    );
  }

  // Build a variant with optional delay applied to the visible transition.
  const delayedVariant = delay
    ? {
        ...selectedVariant,
        visible: {
          ...selectedVariant.visible,
          transition: {
            ...selectedVariant.visible?.transition,
            delay,
          },
        },
      }
    : selectedVariant;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={delayedVariant}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
