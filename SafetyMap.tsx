
import React from 'react';
import { SafeZone } from '../types';

interface SafetyMapProps {
  safeZones: SafeZone[];
  userPos: { x: number, y: number };
}

const SafetyMap: React.FC<SafetyMapProps> = ({ safeZones, userPos }) => {
  return (
    <div className="relative w-full aspect-square bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
      {/* Map Grid Background */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Danger Areas (Visual only) */}
      <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-red-400 opacity-20 blur-2xl rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-orange-400 opacity-20 blur-2xl rounded-full"></div>

      {/* Safe Zones */}
      {safeZones.map((zone, idx) => {
        const x = 20 + (idx * 25) % 60;
        const y = 30 + (idx * 15) % 50;
        return (
          <div 
            key={zone.id}
            className="absolute transition-all duration-500 flex flex-col items-center"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div className={`p-2 rounded-full shadow-lg ${
              zone.type === 'hospital' ? 'bg-red-100 text-red-600' : 
              zone.type === 'police' ? 'bg-blue-100 text-blue-600' : 
              'bg-green-100 text-green-600'
            }`}>
              <i className={`fa-solid ${
                zone.type === 'hospital' ? 'fa-hospital' : 
                zone.type === 'police' ? 'fa-shield-halved' : 
                'fa-house-circle-check'
              }`}></i>
            </div>
            <span className="text-[10px] font-semibold mt-1 bg-white px-1 rounded shadow-sm whitespace-nowrap">
              {zone.name}
            </span>
          </div>
        );
      })}

      {/* User Indicator */}
      <div 
        className="absolute w-8 h-8 -ml-4 -mt-4 flex items-center justify-center"
        style={{ left: `${userPos.x}%`, top: `${userPos.y}%` }}
      >
        <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-25"></div>
        <div className="w-4 h-4 bg-blue-600 border-2 border-white rounded-full shadow-lg"></div>
      </div>

      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-slate-600 border border-slate-200">
        Live: Downtown District
      </div>
    </div>
  );
};

export default SafetyMap;
