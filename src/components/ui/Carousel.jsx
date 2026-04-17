import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '@/utils/motionVariants';
import { cn } from '@/utils/cn';

/**
 * Generic prev/next carousel wrapper.
 * @param {React.ReactNode[]} items
 * @param {boolean} [showControls=true]
 * @param {string} [className]
 */
export function Carousel({ items = [], showControls = true, className }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!items.length) return null;

  const next = () => setCurrentIndex((i) => (i + 1) % items.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + items.length) % items.length);

  return (
    <div className={cn('relative w-full', className)}>
      {/* Current item */}
      <div id="carousel-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {items[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      {showControls && items.length > 1 && (
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="p-2 rounded-full
              border border-dark-bg/20 dark:border-white/20
              text-dark-bg dark:text-white
              hover:bg-brand-yellow hover:text-dark-bg hover:border-brand-yellow
              transition-colors duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
              <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="flex gap-2" role="group" aria-label="Testimonial navigation">
            {items.map((_, i) => (
              <button
                key={`dot-${i}`}
                aria-label={`Go to testimonial ${i + 1} of ${items.length}`}
                aria-current={i === currentIndex ? 'true' : undefined}
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  'w-2 h-2 rounded-full transition-all duration-200',
                  i === currentIndex
                    ? 'bg-brand-yellow scale-125'
                    : 'bg-dark-bg/20 dark:bg-white/20 hover:bg-brand-yellow/50'
                )}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="p-2 rounded-full
              border border-dark-bg/20 dark:border-white/20
              text-dark-bg dark:text-white
              hover:bg-brand-yellow hover:text-dark-bg hover:border-brand-yellow
              transition-colors duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
              <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
