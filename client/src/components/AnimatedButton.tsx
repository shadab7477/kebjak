import React, { ButtonHTMLAttributes } from 'react';
import styles from './AnimatedButton.module.css';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  primaryColor?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ 
  children, 
  className = '', 
  primaryColor = '#FF6B6B',
  ...props 
}) => {
  return (
    <button 
      className={cn(styles.animatedButton, className)}
      style={{ '--primary-color': primaryColor } as React.CSSProperties}
      {...props}
    >
      <span>{children}</span>
      <span></span>
    </button>
  );
};

export default AnimatedButton;
