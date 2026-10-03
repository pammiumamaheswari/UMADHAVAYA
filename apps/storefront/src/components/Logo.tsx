import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'light',
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const heightClasses = {
    sm: 'h-10 sm:h-12',
    md: 'h-14 sm:h-16 lg:h-20',
    lg: 'h-20 sm:h-24 lg:h-28',
    xl: 'h-28 sm:h-36',
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <a
      href="/"
      onClick={handleClick}
      className={`inline-flex items-center group cursor-pointer ${className}`}
      title="UMADHVAYA Home"
    >
      <img
        src="/logo.png"
        alt="UMADHVAYA SAREES"
        className={`${heightClasses[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
          variant === 'dark' ? 'brightness-110 contrast-125 rounded-md p-1 bg-white/95' : 'mix-blend-multiply'
        }`}
        onError={(e) => {
          const target = e.currentTarget;
          if (!target.src.endsWith('/logo.png')) {
            target.src = '/logo.png';
          }
        }}
      />
    </a>
  );
};
