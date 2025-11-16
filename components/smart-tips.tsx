'use client';

import { Lightbulb, CheckCircle2 } from 'lucide-react';

const tips = [
  {
    title: 'Avoid Late-Night Driving',
    description: 'Reduce fatigue risk by minimizing driving between 11 PM and 6 AM.',
    priority: 'high',
  },
  {
    title: 'Smooth Accelerations',
    description: 'Gentle acceleration improves your eco-score and overall driving safety.',
    priority: 'medium',
  },
  {
    title: 'Road Conditions Ahead',
    description: '3 potholes detected on your typical route. Consider alternate path.',
    priority: 'medium',
  },
  {
    title: 'Great Performance',
    description: "You've maintained 82+ score for 5 consecutive days. Keep it up!",
    priority: 'low',
  },
];

export default function SmartTips() {
  return (
    <div className="space-y-3">
      {tips.map((tip, idx) => (
        <div
          key={idx}
          className="bg-gradient-to-r from-slate-900 to-slate-950 rounded-xl border border-slate-700 p-4 hover:border-blue-500/30 transition-colors group cursor-pointer"
        >
          <div className="flex items-start gap-3">
            <div className="pt-1">
              {tip.priority === 'high' && (
                <div className="w-2 h-2 bg-red-500 rounded-full mt-1" />
              )}
              {tip.priority === 'medium' && (
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-1" />
              )}
              {tip.priority === 'low' && (
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-1" />
              )}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground text-sm mb-1">{tip.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{tip.description}</p>
            </div>
            <CheckCircle2 className="w-5 h-5 text-muted-foreground group-hover:text-blue-400 transition-colors flex-shrink-0" />
          </div>
        </div>
      ))}
    </div>
  );
}
