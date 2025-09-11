import type { SVGProps } from 'react';

export function FitnmoveLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#A020F0', stopOpacity: 1 }} />
          <stop
            offset="50%"
            style={{ stopColor: '#FF69B4', stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: '#FFA500', stopOpacity: 1 }}
          />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#32CD32', stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: '#ADFF2F', stopOpacity: 1 }}
          />
        </linearGradient>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: '#FFFFE0', stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <path
        d="M50 0 C 30 20, 30 60, 50 100 C 70 60, 70 20, 50 0 Z"
        transform="scale(0.6) translate(33, 0)"
        fill="url(#grad1)"
      />
      <path
        d="M 50 100 C 20 80, 0 50, 20 20 C 40 40, 40 70, 50 100 Z"
        transform="scale(0.6) translate(15, 0)"
        fill="url(#grad2)"
      />
      <path
        d="M 50 100 C 80 80, 100 50, 80 20 C 60 40, 60 70, 50 100 Z"
        transform="scale(0.6) translate(51, 0)"
        fill="url(#grad3)"
      />
    </svg>
  );
}
