import React from 'react';

export interface SopiLogoProps {
  variant?: 'light' | 'dark' | 'symbol' | 'monochrome';
  showTagline?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'compact';
}

export default function SopiLogo({
  variant = 'light',
  showTagline = false,
  className = '',
  size = 'md',
}: SopiLogoProps) {
  // Brand Colors
  const DEEP_NAVY = '#0B1426';
  const SOPI_YELLOW = '#FFC700';
  const WHITE = '#FFFFFF';
  const TEXT_GRAY = '#6B7280';
  const LIGHT_SLATE = '#94A3B8';

  const isDark = variant === 'dark';
  const isMono = variant === 'monochrome';

  const symbolColor = isMono ? (isDark ? WHITE : DEEP_NAVY) : SOPI_YELLOW;
  const wordmarkColor = isMono ? (isDark ? WHITE : DEEP_NAVY) : (isDark ? WHITE : DEEP_NAVY);
  const taglineColor = isDark ? LIGHT_SLATE : TEXT_GRAY;
  const cutoutColor = isDark ? DEEP_NAVY : WHITE;

  // Sizes
  const heightClasses = {
    compact: 'h-8',
    sm: 'h-9',
    md: 'h-11',
    lg: 'h-14',
  }[size];

  if (variant === 'symbol') {
    return (
      <svg
        viewBox="0 0 100 100"
        className={`${heightClasses} w-auto aspect-square shrink-0 ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="SOPI Logo"
      >
        {/* House Outline */}
        <path
          d="M 50 14 L 84 42 V 81 C 84 85 81 88 77 88 H 23 C 19 88 16 85 16 81 V 42 Z"
          fill="none"
          stroke={symbolColor}
          strokeWidth="7.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Integrated Open-End Wrench (45 degree angle) */}
        <g transform="translate(50, 56) rotate(-45)">
          <rect x="-4" y="2" width="8" height="28" rx="4" fill={symbolColor} />
          <path
            d="M -13 -4 C -13 -12.5 -7 -18 0 -18 C 7 -18 13 -12.5 13 -4 C 13 1.5 10 6 5.5 8.5 L -5.5 8.5 C -10 6 -13 1.5 -13 -4 Z"
            fill={symbolColor}
          />
          <path d="M -5 -19 L 5 -19 L 5 -8 L 0 -4 L -5 -8 Z" fill={cutoutColor} />
          <circle cx="0" cy="22" r="2.2" fill={cutoutColor} />
        </g>
      </svg>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Symbol */}
      <svg
        viewBox="0 0 100 100"
        className={`${heightClasses} w-auto aspect-square shrink-0`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M 50 14 L 84 42 V 81 C 84 85 81 88 77 88 H 23 C 19 88 16 85 16 81 V 42 Z"
          fill="none"
          stroke={symbolColor}
          strokeWidth="7.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g transform="translate(50, 56) rotate(-45)">
          <rect x="-4" y="2" width="8" height="28" rx="4" fill={symbolColor} />
          <path
            d="M -13 -4 C -13 -12.5 -7 -18 0 -18 C 7 -18 13 -12.5 13 -4 C 13 1.5 10 6 5.5 8.5 L -5.5 8.5 C -10 6 -13 1.5 -13 -4 Z"
            fill={symbolColor}
          />
          <path d="M -5 -19 L 5 -19 L 5 -8 L 0 -4 L -5 -8 Z" fill={cutoutColor} />
          <circle cx="0" cy="22" r="2.2" fill={cutoutColor} />
        </g>
      </svg>

      {/* Typography: SOPI Wordmark + Optional Tagline */}
      <div className="flex flex-col justify-center select-none">
        <span
          className="font-black tracking-tight leading-none text-[#0B1426]"
          style={{
            color: wordmarkColor,
            fontSize: size === 'compact' ? '1.25rem' : size === 'sm' ? '1.35rem' : size === 'lg' ? '2.15rem' : '1.65rem',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            letterSpacing: '-0.02em',
          }}
        >
          SOPI
        </span>
        {showTagline && (
          <span
            className="font-bold tracking-[0.14em] uppercase text-[8.5px] sm:text-[9.5px] mt-0.5 leading-tight"
            style={{ color: taglineColor }}
          >
            Your Home, Our Job
          </span>
        )}
      </div>
    </div>
  );
}
