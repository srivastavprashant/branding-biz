import { cn } from '@/utils/cn';

/**
 * Testimonial card with avatar placeholder, quote, and author info.
 *
 * @param {string} quote
 * @param {string} authorName
 * @param {string} authorRole
 * @param {string} company
 * @param {string} avatarPlaceholder - initials or short text for the avatar
 * @param {string} [className]
 */
export function TestimonialCard({
  quote,
  authorName,
  authorRole,
  company,
  avatarPlaceholder,
  className,
}) {
  return (
    <article
      className={cn(
        'bg-light-surface dark:bg-white/[0.03] rounded-xl p-6',
        'border border-light-border dark:border-white/8',
        'flex flex-col gap-4',
        className
      )}
    >
      <blockquote className="italic text-body text-dark-bg dark:text-white/80 leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3 mt-2">
        <div
          className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center flex-shrink-0"
          aria-hidden="true"
        >
          <span className="text-dark-bg font-heading font-bold text-sm">{avatarPlaceholder}</span>
        </div>
        <div>
          <p className="font-heading font-bold text-dark-bg dark:text-white text-sm">{authorName}</p>
          <p className="text-sm text-light-muted dark:text-white/45">
            {authorRole}{company ? `, ${company}` : ''}
          </p>
        </div>
      </div>
    </article>
  );
}
