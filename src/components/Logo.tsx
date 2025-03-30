
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className, 
  size = 'md', 
  animated = false 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={cn('relative', sizeClasses[size], className)}>
      {/* Outer gear */}
      <svg 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          'fill-engineering-600 w-full h-full', 
          animated && 'animate-spin-slow'
        )}
      >
        <path d="M50,15 L53,15 L55,28 C58.5,28.5 61.8,29.5 64.9,31 L73,20 L75.5,21.5 L70,34 C72.5,36 74.7,38.2 76.5,40.5 L88,34 L89.5,36.5 L80,46 C81.5,49 82.5,52.3 83,55.5 L96,57 L96,60.5 L83,62 C82.5,65.5 81.5,68.8 80,72 L89.5,81.5 L88,84 L76.5,77.5 C74.7,80 72.5,82.2 70,84 L75.5,96.5 L73,98 L64.9,87 C61.8,88.5 58.5,89.5 55,90 L53,103 L50,103 L48,90 C44.5,89.5 41.2,88.5 38,87 L30,98 L27.5,96.5 L33,84 C30.5,82 28.3,80 26.5,77.5 L15,84 L13.5,81.5 L23,72 C21.5,68.8 20.5,65.5 20,62 L7,60.5 L7,57 L20,55.5 C20.5,52.3 21.5,49 23,46 L13.5,36.5 L15,34 L26.5,40.5 C28.3,38.2 30.5,36 33,34 L27.5,21.5 L30,20 L38,31 C41.2,29.5 44.5,28.5 48,28 L50,15 Z" />
        
        {/* Inner circle */}
        <circle cx="50" cy="59" r="22" fill="white" />
        
        {/* Letter M */}
        <path 
          d="M35,45 L42,45 L50,55 L58,45 L65,45 L65,75 L58,75 L58,55 L50,65 L42,55 L42,75 L35,75 Z" 
          fill="#246ca0"
        />
      </svg>
    </div>
  );
};

export default Logo;
