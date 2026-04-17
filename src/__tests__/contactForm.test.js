import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { validate } from '@/components/sections/contact/ContactFormSection';

const validEmail = () => fc.emailAddress();
const nonEmptyNonWhitespace = () => fc.string({ minLength: 1 }).filter(s => s.trim().length > 0);
const emptyOrWhitespace = () => fc.oneof(fc.constant(''), fc.string().map(s => s.replace(/\S/g, ' ')).filter(s => s.trim() === ''));

describe('Contact form validation', () => {
  it('Property 1: rejects submissions with empty required fields', () => {
    /**
     * Validates: Requirements 10.3, 10.4
     */
    fc.assert(
      fc.property(
        fc.record({
          fullName: emptyOrWhitespace(),
          email: fc.string(),
          phone: fc.string(),
          serviceOfInterest: fc.string(),
          message: fc.string(),
        }),
        (data) => {
          const errors = validate(data);
          expect(Object.keys(errors).length).toBeGreaterThan(0);
          expect(errors.fullName).toBeTruthy();
        }
      )
    );
  });

  it('Property 2: accepts valid submissions', () => {
    /**
     * Validates: Requirements 10.3, 10.8
     */
    fc.assert(
      fc.property(
        fc.record({
          fullName: nonEmptyNonWhitespace(),
          email: validEmail(),
          phone: fc.string(),
          serviceOfInterest: fc.string(),
          message: nonEmptyNonWhitespace(),
        }),
        (data) => {
          const errors = validate(data);
          expect(Object.keys(errors).length).toBe(0);
        }
      )
    );
  });

  it('rejects invalid email format', () => {
    const errors = validate({ fullName: 'John', email: 'not-an-email', phone: '', serviceOfInterest: '', message: 'Hello' });
    expect(errors.email).toBeTruthy();
  });

  it('accepts valid email format', () => {
    const errors = validate({ fullName: 'John', email: 'john@example.com', phone: '', serviceOfInterest: '', message: 'Hello' });
    expect(errors.email).toBeUndefined();
  });
});
