import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { SERVICES, SERVICE_CATEGORIES } from '@/data/services';
import { TESTIMONIALS } from '@/data/testimonials';
import { TEAM_MEMBERS } from '@/data/team';

const VALID_CATEGORY_IDS = SERVICE_CATEGORIES.map(c => c.id);

describe('Static Data Completeness', () => {
  it('Property 6: every service has non-empty name, description, icon, and valid category', () => {
    SERVICES.forEach((service) => {
      expect(service.name).toBeTruthy();
      expect(service.name.trim().length).toBeGreaterThan(0);
      expect(service.description).toBeTruthy();
      expect(service.description.trim().length).toBeGreaterThan(0);
      expect(service.icon).toBeTruthy();
      expect(service.icon.trim().length).toBeGreaterThan(0);
      expect(VALID_CATEGORY_IDS).toContain(service.category);
    });
  });

  it('Property 7: every testimonial has non-empty quote, authorName, and company/role', () => {
    TESTIMONIALS.forEach((testimonial) => {
      expect(testimonial.quote).toBeTruthy();
      expect(testimonial.quote.trim().length).toBeGreaterThan(0);
      expect(testimonial.authorName).toBeTruthy();
      expect(testimonial.authorName.trim().length).toBeGreaterThan(0);
      const hasCompanyOrRole = (testimonial.company && testimonial.company.trim().length > 0) ||
                               (testimonial.authorRole && testimonial.authorRole.trim().length > 0);
      expect(hasCompanyOrRole).toBe(true);
    });
  });

  it('Property 8: every team member has non-empty name and role', () => {
    TEAM_MEMBERS.forEach((member) => {
      expect(member.name).toBeTruthy();
      expect(member.name.trim().length).toBeGreaterThan(0);
      expect(member.role).toBeTruthy();
      expect(member.role.trim().length).toBeGreaterThan(0);
    });
  });

  it('has exactly 11 services', () => {
    expect(SERVICES.length).toBe(11);
  });

  it('has exactly 4 service categories', () => {
    expect(SERVICE_CATEGORIES.length).toBe(4);
  });
});
