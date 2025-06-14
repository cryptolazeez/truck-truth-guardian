
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
        {/* Shield Background */}
        <path
          d="M50 5 L80 20 L80 45 C80 65 65 85 50 95 C35 85 20 65 20 45 L20 20 Z"
          fill="currentColor"
          className="text-blue-600"
        />
        
        {/* Truck Silhouette */}
        <g transform="translate(25, 35)">
          {/* Truck Cab */}
          <rect x="5" y="15" width="15" height="20" fill="white" rx="2"/>
          {/* Truck Trailer */}
          <rect x="20" y="18" width="25" height="17" fill="white" rx="1"/>
          
          {/* Wheels */}
          <circle cx="15" cy="38" r="4" fill="white"/>
          <circle cx="35" cy="38" r="4" fill="white"/>
          
          {/* Truck Details */}
          <rect x="7" y="17" width="3" height="3" fill="currentColor" className="text-blue-600"/>
          <rect x="12" y="17" width="3" height="3" fill="currentColor" className="text-blue-600"/>
          <rect x="22" y="20" width="8" height="2" fill="currentColor" className="text-blue-600"/>
          <rect x="32" y="20" width="8" height="2" fill="currentColor" className="text-blue-600"/>
        </g>
        
        {/* Monitoring Eye/Watch Element */}
        <circle cx="50" cy="25" r="8" fill="white"/>
        <circle cx="50" cy="25" r="5" fill="currentColor" className="text-blue-600"/>
        <circle cx="50" cy="25" r="2" fill="white"/>
        
        {/* Radar/Signal Lines */}
        <path
          d="M35 15 Q40 10 45 15"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M55 15 Q60 10 65 15"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M32 20 Q40 12 48 20"
          stroke="white"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M52 20 Q60 12 68 20"
          stroke="white"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
      </svg>
    </div>
  );
};

export default TruckWatchLogo;
