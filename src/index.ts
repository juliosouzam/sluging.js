import { sanitize } from 'sanitize.js';

function sluging(value: string): string {
  return sanitize(value).replace(/\s/g, '-').toLowerCase();
}

export { sluging };
