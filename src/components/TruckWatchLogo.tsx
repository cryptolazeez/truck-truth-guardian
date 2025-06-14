
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
        {/* Circular Background */}
        <circle 
          cx="50" 
          cy="50" 
          r="48" 
          fill="currentColor" 
          className="text-blue-600"
        />
        
        {/* Inner Circle */}
        <circle 
          cx="50" 
          cy="50" 
          r="40" 
          fill="white"
        />
        
        {/* Truck Silhouette - Centered */}
        <g transform="translate(20, 35)">
          {/* Truck Cab */}
          <rect x="8" y="12" width="12" height="16" fill="currentColor" className="text-blue-600" rx="2"/>
          {/* Truck Trailer */}
          <rect x="20" y="14" width="20" height="14" fill="currentColor" className="text-blue-600" rx="1"/>
          
          {/* Wheels */}
          <circle cx="16" cy="32" r="3" fill="currentColor" className="text-blue-600"/>
          <circle cx="32" cy="32" r="3" fill="currentColor" className="text-blue-600"/>
          <circle cx="16" cy="32" r="1.5" fill="white"/>
          <circle cx="32" cy="32" r="1.5" fill="white"/>
          
          {/* Truck Window */}
          <rect x="10" y="14" width="3" height="3" fill="white" rx="0.5"/>
          <rect x="14" y="14" width="3" height="3" fill="white" rx="0.5"/>
          
          {/* Trailer Details */}
          <rect x="22" y="16" width="6" height="1" fill="white"/>
          <rect x="30" y="16" width="6" height="1" fill="white"/>
          <rect x="22" y="20" width="6" height="1" fill="white"/>
          <rect x="30" y="20" width="6" height="1" fill="white"/>
        </g>
        
        {/* Digital Eye/Camera in top right */}
        <g transform="translate(65, 15)">
          <circle cx="0" cy="0" r="8" fill="currentColor" className="text-blue-600"/>
          <circle cx="0" cy="0" r="5" fill="white"/>
          <circle cx="0" cy="0" r="3" fill="currentColor" className="text-blue-600"/>
          <circle cx="0" cy="0" r="1" fill="white"/>
          
          {/* Camera brackets */}
          <rect x="-2" y="-10" width="4" height="3" fill="currentColor" className="text-blue-600" rx="1"/>
        </g>
        
        {/* Digital Signal/Data Streams */}
        <g stroke="currentColor" strokeWidth="2" fill="none" className="text-blue-600">
          {/* Signal lines from camera to truck */}
          <path d="M60 20 Q55 25 45 30" opacity="0.7" strokeDasharray="2,2"/>
          <path d="M62 25 Q57 30 47 35" opacity="0.5" strokeDasharray="2,2"/>
          <path d="M58 18 Q53 23 43 28" opacity="0.9" strokeDasharray="2,2"/>
        </g>
        
        {/* Location Pin - small indicator */}
        <g transform="translate(75, 75)">
          <path 
            d="M0 -8 C-3 -8 -5 -6 -5 -3 C-5 0 0 8 0 8 C0 8 5 0 5 -3 C5 -6 3 -8 0 -8 Z" 
            fill="currentColor" 
            className="text-blue-600"
          />
          <circle cx="0" cy="-3" r="2" fill="white"/>
        </g>
        
        {/* Digital Corner Elements */}
        <g stroke="currentColor" strokeWidth="1.5" fill="none" className="text-blue-600">
          {/* Top left corner */}
          <path d="M15 15 L15 20 M15 15 L20 15" opacity="0.6"/>
          {/* Bottom right corner */}
          <path d="M85 85 L85 80 M85 85 L80 85" opacity="0.6"/>
        </g>
      </svg>
    </div>
  );
};

export default TruckWatchLogo;
