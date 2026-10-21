import React from 'react';

interface FocusVortexLogoProps {
  className?: string;
  size?: number | string;
  glow?: boolean;
}

export const FocusVortexLogo: React.FC<FocusVortexLogoProps> = ({
  className = '',
  size = 40,
  glow = true,
}) => {
  const rawId = React.useId();
  const id = rawId.replace(/[^a-zA-Z0-9]/g, '');

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 overflow-visible transition-transform duration-300 group-hover:scale-105 ${className}`}
      aria-label="Focus Logo"
    >
      <defs>
        {/* Primary Fiery Blade Gradient: Yellow-White core to deep neon Orange/Crimson */}
        <linearGradient id={`bladeGrad-${id}`} x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#fff275" />
          <stop offset="18%" stopColor="#ffb300" />
          <stop offset="55%" stopColor="#ff5419" />
          <stop offset="90%" stopColor="#d12e00" />
          <stop offset="100%" stopColor="#8a1500" />
        </linearGradient>

        {/* Secondary Shading for 3D Blade Depth */}
        <linearGradient id={`bladeDark-${id}`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#bf2600" />
          <stop offset="45%" stopColor="#e64200" />
          <stop offset="100%" stopColor="#ff7a00" />
        </linearGradient>

        {/* Highlight Spine Glow */}
        <linearGradient id={`highlight-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="35%" stopColor="#ffea75" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#ff6f00" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ff3300" stopOpacity="0" />
        </linearGradient>

        {/* Soft bloom filter */}
        <filter id={`bloomFilter-${id}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Blade Template Definition (Center of symmetry is 60, 60) */}
        <g id={`blade-${id}`}>
          {/* Main Curved Vortex Blade */}
          <path
            d="M 60 10
               C 74 10, 88 15, 98 25
               C 92 31, 82 33, 72 32
               C 56 30.5, 45 38.5, 41 51
               C 39.5 55, 40 59, 42 62
               C 38 59, 36 54, 35.5 48
               C 34.5 37, 43 24, 55 14
               C 56.8 12.5, 58.4 11.2, 60 10 Z"
            fill={`url(#bladeGrad-${id})`}
          />

          {/* Inner Accent Flame Blade */}
          <path
            d="M 61 14
               C 72 15, 83 20, 91 28
               C 83 31.5, 75 32.5, 67 31.5
               C 54 29.5, 45 37, 42 48
               C 44 43, 48 37, 54 32
               C 60 27, 68 23, 76 21
               C 70 18, 64 16, 61 14 Z"
            fill={`url(#bladeDark-${id})`}
            opacity="0.85"
          />

          {/* Luminous Core Filament / Spine */}
          <path
            d="M 62 13
               C 74 14, 85 19, 93 27
               C 85 30.5, 76 31.5, 67 30.5
               C 53 29, 44 37, 41.5 50"
            stroke={`url(#highlight-${id})`}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Brilliant White-Hot Edge Tip */}
          <path
            d="M 60 16
               C 70 17, 79 21.5, 85 27.5
               C 78 29.5, 70 30.5, 62 29"
            stroke="#ffffff"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
          />
        </g>
      </defs>

      {/* 4 Rotated Blades around center (60, 60) with blooming glow */}
      <g filter={glow ? `url(#bloomFilter-${id})` : undefined}>
        {/* Blade 1 (Top) */}
        <use href={`#blade-${id}`} />

        {/* Blade 2 (Right - 90deg) */}
        <use href={`#blade-${id}`} transform="rotate(90 60 60)" />

        {/* Blade 3 (Bottom - 180deg) */}
        <use href={`#blade-${id}`} transform="rotate(180 60 60)" />

        {/* Blade 4 (Left - 270deg) */}
        <use href={`#blade-${id}`} transform="rotate(270 60 60)" />
      </g>
    </svg>
  );
};
