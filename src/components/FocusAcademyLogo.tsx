import React from 'react';

interface FocusAcademyLogoProps {
  isDarkMode?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  showIcon?: boolean;
}

export const FocusAcademyLogo: React.FC<FocusAcademyLogoProps> = ({
  isDarkMode = true,
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-9 sm:h-10 w-[152px] sm:w-[172px]',
    md: 'h-11 sm:h-12 w-[186px] sm:w-[208px]',
    lg: 'h-14 sm:h-16 w-[236px] sm:w-[270px]',
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden select-none group rounded-lg ${
        !isDarkMode ? 'bg-black px-2 py-1' : ''
      } ${sizeClasses[size]} ${className}`}
    >
      <img
        src="/assets/aistudio/WhatsApp_Image_2026-10-19_at_14.18.43_085ad63b.jpeg"
        alt="Focus Academy - powered by focus tech ®"
        className={`w-full h-full object-cover object-center scale-[1.45] transition-transform duration-300 group-hover:scale-[1.48] ${
          isDarkMode ? 'mix-blend-lighten' : ''
        }`}
      />
    </div>
  );
};

