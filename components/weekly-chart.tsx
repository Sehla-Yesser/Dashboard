'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', score: 75, trips: 3, distance: 42 },
  { day: 'Tue', score: 78, trips: 2, distance: 28 },
  { day: 'Wed', score: 72, trips: 4, distance: 56 },
  { day: 'Thu', score: 80, trips: 3, distance: 35 },
  { day: 'Fri', score: 82, trips: 5, distance: 68 },
  { day: 'Sat', score: 81, trips: 2, distance: 24 },
  { day: 'Sun', score: 82, trips: 3, distance: 31 },
];

export default function WeeklyChart() {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border border-slate-700 p-6 shadow-lg">
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
          <XAxis
            dataKey="day"
            stroke="#94a3b8"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke="#94a3b8"
            style={{ fontSize: '12px' }}
            domain={[60, 100]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e293b',
              border: '1px solid #475569',
              borderRadius: '8px',
            }}
            labelStyle={{ color: '#e2e8f0' }}
          />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#4D9EFF"
            strokeWidth={3}
            dot={{ fill: '#4D9EFF', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-700">
        <div className="text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Avg Score</p>
          <p className="text-xl font-bold text-blue-400">79</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Total Trips</p>
          <p className="text-xl font-bold text-blue-400">22</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Distance</p>
          <p className="text-xl font-bold text-blue-400">284 km</p>
        </div>
      </div>
    </div>
  );
}
