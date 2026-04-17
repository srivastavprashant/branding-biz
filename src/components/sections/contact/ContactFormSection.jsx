import { useState } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';
import { SERVICE_CATEGORIES } from '@/data/services';
import { cn } from '@/utils/cn';

export function validate(data) {
  const errors = {};
  if (!data.fullName || !data.fullName.trim()) errors.fullName = 'Full name is required.';
  if (!data.email || !data.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!data.message || !data.message.trim()) errors.message = 'Message is required.';
  return errors;
}

const INITIAL_FORM = { fullName: '', email: '', phone: '', serviceOfInterest: '', message: '' };

export function ContactFormSection() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setSubmitted(true);
  };

  const inputClass = (field) => cn(
    'w-full px-4 py-3 rounded-xl border transition-colors duration-200',
    'bg-light-elevated dark:bg-white/[0.05]',
    'text-dark-bg dark:text-white placeholder-light-muted dark:placeholder-white/30',
    'focus:outline-none focus:ring-2 focus:ring-brand-yellow',
    errors[field] ? 'border-red-500' : 'border-light-border dark:border-white/10'
  );

  if (submitted) {
    return (
      <section className="py-24 bg-light-surface dark:bg-[#0D0D0D]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection variant="scaleIn">
            <div className="text-6xl mb-6" aria-hidden="true">🎉</div>
            <h2 className="font-heading text-h2 font-bold text-dark-bg dark:text-white mb-4">Message Sent!</h2>
            <p className="text-body-lg text-light-muted dark:text-white/55">
              Thanks for reaching out! We'll get back to you within 24 hours. Get ready to break the internet.
            </p>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-light-surface dark:bg-[#0D0D0D]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="mb-12">
          <h2 className="font-heading text-h2 font-bold text-dark-bg dark:text-white text-center mb-4">Send Us a Message</h2>
          <p className="text-body-lg text-light-muted dark:text-white/50 text-center">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.1}>
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block font-heading font-semibold text-dark-bg dark:text-white text-sm mb-2">
                Full Name <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input id="fullName" name="fullName" type="text" value={formData.fullName} onChange={handleChange}
                placeholder="Your full name" className={inputClass('fullName')} aria-required="true"
                aria-describedby={errors.fullName ? 'fullName-error' : undefined} />
              {errors.fullName && <p id="fullName-error" role="alert" className="mt-2 text-sm text-red-500">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block font-heading font-semibold text-dark-bg dark:text-white text-sm mb-2">
                Email Address <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange}
                placeholder="your@email.com" className={inputClass('email')} aria-required="true"
                aria-describedby={errors.email ? 'email-error' : undefined} />
              {errors.email && <p id="email-error" role="alert" className="mt-2 text-sm text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block font-heading font-semibold text-dark-bg dark:text-white text-sm mb-2">Phone Number</label>
              <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange}
                placeholder="+91 98765 43210" className={inputClass('phone')} />
            </div>

            <div>
              <label htmlFor="serviceOfInterest" className="block font-heading font-semibold text-dark-bg dark:text-white text-sm mb-2">Service of Interest</label>
              <select id="serviceOfInterest" name="serviceOfInterest" value={formData.serviceOfInterest}
                onChange={handleChange} className={cn(inputClass('serviceOfInterest'), 'cursor-pointer')}>
                <option value="">Select a service category</option>
                {SERVICE_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block font-heading font-semibold text-dark-bg dark:text-white text-sm mb-2">
                Message <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange}
                placeholder="Tell us about your project..." className={cn(inputClass('message'), 'resize-none')}
                aria-required="true" aria-describedby={errors.message ? 'message-error' : undefined} />
              {errors.message && <p id="message-error" role="alert" className="mt-2 text-sm text-red-500">{errors.message}</p>}
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full">Send Message</Button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
