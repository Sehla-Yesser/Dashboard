'use client';

import { type LucideIcon } from 'lucide-react';

interface MetricItem {
  label: string;
  value: string;
  unit: string;
}

interface MetricCardProps {
  title: string;
  icon: LucideIcon;
  metrics: MetricItem[];
  bgGradient: string;
  accentColor: string;
}

export default function MetricCard({
  title,
  icon: Icon,
  metrics,
  bgGradient,
  accentColor,
}: MetricCardProps) {
  return (
    <div className={`bg-gradient-to-br ${bgGradient} rounded-2xl border border-slate-700 p-5 shadow-lg hover:border-slate-600 transition-colors`}>
      {/* Card Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="p-2.5 rounded-lg"
          style={{ backgroundColor: `${accentColor}20` }}
        >
          <Icon className="w-5 h-5" style={{ color: accentColor }} />
        </div>
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>

      {/* Metrics Grid */}
      <div className="space-y-3">
        {metrics.map((metric, idx) => (
          <div key={idx} className="flex justify-between items-start">
            <span className="text-sm text-muted-foreground">{metric.label}</span>
            <div className="text-right">
              <span className="text-sm font-semibold text-foreground" style={{ color: accentColor }}>
                {metric.value}
              </span>
              {metric.unit && (
                <span className="text-xs text-muted-foreground ml-1">{metric.unit}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
