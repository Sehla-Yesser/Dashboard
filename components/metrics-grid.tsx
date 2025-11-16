'use client';

import MetricCard from './metric-card';
import { Activity, AlertCircle, Eye, Gauge } from 'lucide-react';

export default function MetricsGrid() {
  const metricsData = [
    {
      title: 'Driver Behavior',
      icon: Activity,
      metrics: [
        { label: 'Harsh Brakes', value: '2', unit: 'events' },
        { label: 'Speeding Events', value: '1', unit: 'event' },
        { label: 'Cornering', value: 'Smooth', unit: '' },
        { label: 'Phone Distraction', value: 'None', unit: '' },
      ],
      bgGradient: 'from-blue-950 to-slate-900',
      accentColor: '#4D9EFF',
    },
    {
      title: 'Environment Risk',
      icon: AlertCircle,
      metrics: [
        { label: 'Potholes Detected', value: '3', unit: 'near route' },
        { label: 'Road Quality', value: '7.2/10', unit: '' },
        { label: 'Weather Risk', value: 'Low', unit: '' },
        { label: 'Time-of-Day Risk', value: 'Moderate', unit: '' },
      ],
      bgGradient: 'from-amber-950 to-slate-900',
      accentColor: '#f59e0b',
    },
    {
      title: 'Driver State (AI Vision)',
      icon: Eye,
      metrics: [
        { label: 'Distraction Level', value: '12%', unit: '' },
        { label: 'Fatigue Indicator', value: 'Alert', unit: '' },
        { label: 'Face Attention', value: '94%', unit: 'focused' },
        { label: 'Eyes Off Road', value: '2s', unit: 'max duration' },
      ],
      bgGradient: 'from-emerald-950 to-slate-900',
      accentColor: '#10b981',
    },
    {
      title: 'Mileage Tracking',
      icon: Gauge,
      metrics: [
        { label: 'App Mileage', value: '1,284.3', unit: 'km' },
        { label: 'Odometer', value: '1,283.8', unit: 'km' },
        { label: 'Accuracy', value: '99.96%', unit: '' },
        { label: 'Fraud Flag', value: 'None', unit: '' },
      ],
      bgGradient: 'from-purple-950 to-slate-900',
      accentColor: '#a855f7',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {metricsData.map((card, idx) => (
        <MetricCard key={idx} {...card} />
      ))}
    </div>
  );
}
