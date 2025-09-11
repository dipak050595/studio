import type { SVGProps } from 'react';

export function FitnmoveLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 130 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="gradF" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#2563EB', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="gradM" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#F97316', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FBBF24', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* F shape */}
      <path d="M0 0 H50 V20 H20 V40 H40 V60 H20 V100 H0 Z" fill="url(#gradF)" />

      {/* M shape */}
      <path d="M60 0 L80 40 L100 0 H120 V100 H100 V60 L80 100 L60 60 V100 H40 V0 Z" fill="url(#gradM)" />
    </svg>
  );
}
