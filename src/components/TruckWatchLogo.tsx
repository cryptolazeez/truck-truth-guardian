
import React from 'react';

interface TruckWatchLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const TruckWatchLogo: React.FC<TruckWatchLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Truck Cab */}
        <rect 
          x="15" 
          y="30" 
          width="25" 
          height="30" 
          fill="currentColor" 
          rx="3"
        />
        
        {/* Truck Trailer */}
        <rect 
          x="40" 
          y="35" 
          width="40" 
          height="25" 
          fill="currentColor" 
          rx="2"
        />
        
        {/* Truck Windows */}
        <rect 
          x="18" 
          y="33" 
          width="8" 
          height="8" 
          fill="white" 
          rx="1"
        />
        <rect 
          x="28" 
          y="33" 
          width="8" 
          height="8" 
          fill="white" 
          rx="1"
        />
        
        {/* Trailer Details */}
        <rect x="43" y="38" width="12" height="2" fill="white" rx="1"/>
        <rect x="57" y="38" width="12" height="2" fill="white" rx="1"/>
        <rect x="71" y="38" width="6" height="2" fill="white" rx="1"/>
        
        <rect x="43" y="45" width="12" height="2" fill="white" rx="1"/>
        <rect x="57" y="45" width="12" height="2" fill="white" rx="1"/>
        <rect x="71" y="45" width="6" height="2" fill="white" rx="1"/>
        
        <rect x="43" y="52" width="12" height="2" fill="white" rx="1"/>
        <rect x="57" y="52" width="12" height="2" fill="white" rx="1"/>
        <rect x="71" y="52" width="6" height="2" fill="white" rx="1"/>
        
        {/* Front Wheel */}
        <circle 
          cx="30" 
          cy="67" 
          r="8" 
          fill="currentColor"
        />
        <circle 
          cx="30" 
          cy="67" 
          r="4" 
          fill="white"
        />
        
        {/* Rear Wheels */}
        <circle 
          cx="55" 
          cy="67" 
          r="8" 
          fill="currentColor"
        />
        <circle 
          cx="55" 
          cy="67" 
          r="4" 
          fill="white"
        />
        
        <circle 
          cx="70" 
          cy="67" 
          r="8" 
          fill="currentColor"
        />
        <circle 
          cx="70" 
          cy="67" 
          r="4" 
          fill="white"
        />
        
        {/* Front Grille */}
        <rect x="12" y="42" width="3" height="12" fill="currentColor" rx="1"/>
        
        {/* Headlight */}
        <circle cx="13" cy="38" r="2" fill="white"/>
      </svg>
    </div>
  );
};

export default TruckWatchLogo;
