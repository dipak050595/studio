import type { SVGProps } from 'react';

export function FitnmoveLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 160 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="gradTop" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" style={{ stopColor: '#8A2BE2' }} />
          <stop offset="33%" style={{ stopColor: '#FF69B4' }} />
          <stop offset="66%" style={{ stopColor: '#FFA500' }} />
          <stop offset="100%" style={{ stopColor: '#FFFF00' }} />
        </linearGradient>
        <linearGradient id="gradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ADFF2F' }} />
          <stop offset="100%" style={{ stopColor: '#32CD32' }} />
        </linearGradient>
        <linearGradient id="gradRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FFFF00' }} />
          <stop offset="100%" style={{ stopColor: '#FFD700' }} />
        </linearGradient>
      </defs>

      {/* Top petal */}
      <path
        d="M80 0 C 40 40, 40 70, 80 100 C 120 70, 120 40, 80 0 Z"
        fill="url(#gradTop)"
        transform="scale(0.8) translate(20, 0)"
      />
      
      {/* Left leaf */}
      <path
        d="M 80 100 C 20 100, 20 50, 60 40"
        stroke="none"
        fill="url(#gradLeft)"
        transform="scale(0.8) translate(20, 0)"
      />

      {/* Right leaf */}
      <path
        d="M 80 100 C 140 100, 140 50, 100 40"
        stroke="none"
        fill="url(#gradRight)"
        transform="scale(0.8) translate(20, 0)"
      />
    </svg>
  );
}
