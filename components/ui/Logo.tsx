import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 25 }) => {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`} style={{ width: size, height: size }}>
      <img 
        src="/logo.png" 
        alt="BCCS Logo" 
        className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

export default Logo;