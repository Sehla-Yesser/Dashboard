'use client';

import { ArrowUp, TrendingUp } from 'lucide-react';

interface SafeScoreCardProps {
  score: number;
  trend?: 'up' | 'down' | 'neutral';
}

export default function SafeScoreCard({ score, trend = 'neutral' }: SafeScoreCardProps) {
  const getScoreColor = (value: number) => {
    if (value >= 75) return '#10b981'; // green
    if (value >= 50) return '#f59e0b'; // yellow/amber
    return '#ef4444'; // red
  };

  const getScoreStatus = (value: number) => {
    if (value >= 75) return 'Safe';
    if (value >= 50) return 'Moderate';
    return 'Risky';
  };

  const color = getScoreColor(score);
  const status = getScoreStatus(score);

  return (
    <div className="mb-8 relative">
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl overflow-hidden border border-slate-800 p-8 shadow-2xl">
        {/* Background accent */}
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-500 via-transparent to-transparent" />
        
        <div className="relative z-10">
          {/* Title */}
          <div className="mb-8">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Your Contextual Driving Score</p>
          </div>

          {/* Score Display */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-7xl font-bold text-foreground" style={{ color }}>{score}</span>
              <span className="text-2xl text-muted-foreground">/100</span>
            </div>
            
            {trend === 'up' && (
              <div className="flex items-center gap-2 text-emerald-400 bg-emerald-950 rounded-full px-3 py-1">
                <ArrowUp className="w-4 h-4" />
                <span className="text-sm font-medium">+3</span>
              </div>
            )}
          </div>

          {/* Status Badge */}
          <div className="inline-block">
            <span
              className="px-4 py-2 rounded-full text-sm font-semibold"
              style={{
                backgroundColor: `${color}20`,
                color: color,
                border: `1px solid ${color}40`,
              }}
            >
              {status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
