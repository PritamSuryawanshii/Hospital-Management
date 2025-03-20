
import React from 'react';
import { cn } from '@/lib/utils';

interface BlurCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const BlurCard: React.FC<BlurCardProps> = ({ 
  children, 
  className, 
  hoverEffect = false 
}) => {
  return (
    <div 
      className={cn(
        'glass rounded-2xl p-6',
        hoverEffect && 'hover-lift hover:shadow-lg',
        className
      )}
    >
      {children}
    </div>
  );
};

export default BlurCard;
