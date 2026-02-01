
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { RiskIncident } from '../types';

const data: RiskIncident[] = [
  { day: 'Mon', incidents: 12, predicted: 10 },
  { day: 'Tue', incidents: 15, predicted: 14 },
  { day: 'Wed', incidents: 8, predicted: 12 },
  { day: 'Thu', incidents: 18, predicted: 16 },
  { day: 'Fri', incidents: 25, predicted: 22 },
  { day: 'Sat', incidents: 30, predicted: 28 },
  { day: 'Sun', incidents: 10, predicted: 15 },
];

const RiskChart: React.FC = () => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorIncidents" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
          <YAxis hide />
          <Tooltip 
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Area 
            type="monotone" 
            dataKey="incidents" 
            stroke="#ef4444" 
            fillOpacity={1} 
            fill="url(#colorIncidents)" 
            strokeWidth={3}
          />
          <Area 
            type="monotone" 
            dataKey="predicted" 
            stroke="#94a3b8" 
            strokeDasharray="5 5" 
            fill="transparent" 
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RiskChart;
