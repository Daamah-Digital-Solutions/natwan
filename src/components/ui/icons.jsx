// Shared inline SVGs, converted from the source markup (camelCased attrs).

export function BrandMark() {
  return (
    <div className="brand-mark">
      <svg viewBox="0 0 24 24" fill="none">
        <path className="stroke" d="M12 3 L21 20 L3 20 Z" strokeWidth="1.5" fill="none" />
        <path className="fill" d="M12 10 L16 17 L8 17 Z" />
      </svg>
    </div>
  );
}

// Diagonal arrow (up-right) used on CTAs and the header contact button.
export function ArrowDiag({ className = "arrow-diag" }) {
  return (
    <svg className={className} viewBox="0 0 14 14" fill="none">
      <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

// Horizontal arrow (right) used on links/buttons.
export function ArrowRight({ className = "arrow-r" }) {
  return (
    <svg className={className} viewBox="0 0 14 14" fill="none">
      <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

// Small checkmark used in sector feature lists.
export function Check() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M1 6L5 10L11 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Social platform glyphs (24x24, currentColor). Keyed by the `icon` field in
// the `social` content array.
const SOCIAL_PATHS = {
  whatsapp: (
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.13c-.24.68-1.42 1.31-1.96 1.35-.5.05-1.13.21-3.66-.77-3.08-1.21-5.05-4.34-5.2-4.54-.15-.2-1.24-1.65-1.24-3.15 0-1.5.79-2.24 1.07-2.54.28-.3.61-.38.81-.38.2 0 .41.01.58.01.19.01.44-.07.69.53.24.6.82 2.07.89 2.22.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.45.53-.15.15-.3.31-.13.6.17.3.77 1.27 1.66 2.06 1.14 1.02 2.1 1.33 2.4 1.48.3.15.47.13.64-.08.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.71.81 2 .96.3.15.5.22.57.35.07.13.07.73-.17 1.42Z" />
  ),
  instagram: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </g>
  ),
  facebook: (
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
  ),
  x: (
    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.22-6.82-5.97 6.82H1.66l7.73-8.84L1.24 2.25h6.83l4.71 6.23 5.46-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.05l12.03 15.64Z" />
  ),
  tiktok: (
    <path d="M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-3.2v12.46a2.34 2.34 0 1 1-2.07-2.32V7.86a5.54 5.54 0 1 0 5.27 5.53V8.99a7.5 7.5 0 0 0 4.27 1.33V7.1a4.28 4.28 0 0 1-3.21-1.28Z" />
  ),
  snapchat: (
    <path d="M12 2c2.5 0 4.3 1.9 4.4 4.4.02.5 0 1 0 1.5.5.3 1-.1 1.4-.2.6-.1 1 .5.8 1-.2.5-1.1.8-1.6 1-.3.1-.4.3-.3.6.5 1.6 1.9 3 3.4 3.5.4.1.5.5.3.8-.5.7-1.7.9-2.5 1-.1.4-.1.8-.5.9-.5.2-1.2-.2-2-.2-1 0-1.5.8-3 .8s-2-.8-3-.8c-.8 0-1.5.4-2 .2-.4-.1-.4-.5-.5-.9-.8-.1-2-.3-2.5-1-.2-.3-.1-.7.3-.8 1.5-.5 2.9-1.9 3.4-3.5.1-.3 0-.5-.3-.6-.5-.2-1.4-.5-1.6-1-.2-.5.2-1.1.8-1 .4.1.9.5 1.4.2 0-.5-.02-1 0-1.5C7.7 3.9 9.5 2 12 2Z" />
  ),
};

export function SocialIcon({ name, className = "social-icon" }) {
  const glyph = SOCIAL_PATHS[name];
  if (!glyph) return null;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      {glyph}
    </svg>
  );
}
