'use client';

import { useState } from 'react';
import { MapPin, AlertTriangle, Cloud, Navigation } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

type RiskToggle = 'road-quality' | 'accident-zones' | 'weather' | 'my-trips';

export default function MapPage() {
  const [activeToggles, setActiveToggles] = useState<RiskToggle[]>(['road-quality']);

  const toggleRisk = (toggle: RiskToggle) => {
    setActiveToggles((prev) =>
      prev.includes(toggle)
        ? prev.filter((t) => t !== toggle)
        : [...prev, toggle]
      );
  };

  const toggleOptions: { id: RiskToggle; label: string }[] = [
    { id: 'road-quality', label: 'Road Quality' },
    { id: 'accident-zones', label: 'Accident Zones' },
    { id: 'weather', label: 'Weather Risk' },
    { id: 'my-trips', label: 'My Trips' },
  ];

  return (
    <div className="relative w-full h-screen bg-background flex flex-col overflow-hidden">
      {/* Map Container (simulated) */}
      <div className="flex-1 relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
        {/* Heatmap visualization */}
        <div className="absolute inset-0">
          {/* High Risk Zone (Red) */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-600/20 rounded-full blur-3xl"></div>
          {/* Moderate Risk Zone (Yellow) */}
          <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-yellow-500/15 rounded-full blur-3xl"></div>
          {/* Safe Zone (Green) */}
          <div className="absolute bottom-1/3 left-1/2 w-36 h-36 bg-green-500/15 rounded-full blur-3xl"></div>
        </div>

        {/* Map overlay content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-muted-foreground/30 mx-auto mb-2" />
            <p className="text-muted-foreground text-sm">Interactive Map View</p>
          </div>
        </div>

        {/* Toggle Buttons (Top) */}
        <div className="absolute top-4 left-4 right-4 z-20">
          <div className="flex flex-wrap gap-2">
            {toggleOptions.map((option) => (
              <Button
                key={option.id}
                onClick={() => toggleRisk(option.id)}
                variant="outline"
                size="sm"
                className={`text-xs ${
                  activeToggles.includes(option.id)
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-slate-900/50 border-slate-700 text-slate-300 hover:border-primary/50'
                }`}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>

        {/* FAB - Recenter Button */}
        <button className="absolute bottom-8 right-4 z-20 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/50 hover:shadow-primary/70 transition-shadow">
          <Navigation className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Info Chips */}
      <div className="bg-gradient-to-t from-background via-background to-transparent backdrop-blur-md border-t border-border p-4 pb-6">
        <div className="grid grid-cols-3 gap-2">
          {/* Potholes Card */}
          <Card className="p-3 bg-card/50 border-border">
            <div className="text-xs text-muted-foreground mb-1">Potholes Today</div>
            <div className="text-lg font-semibold text-yellow-400">7</div>
          </Card>

          {/* Weather Alerts */}
          <Card className="p-3 bg-card/50 border-border">
            <div className="text-xs text-muted-foreground mb-1">Weather</div>
            <div className="flex items-center gap-1">
              <Cloud className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-foreground">Rain</span>
            </div>
          </Card>

          {/* Traffic Risk */}
          <Card className="p-3 bg-card/50 border-border">
            <div className="text-xs text-muted-foreground mb-1">Traffic</div>
            <div className="text-lg font-semibold text-red-400">High</div>
          </Card>
        </div>

        {/* Risk Legend */}
        <div className="mt-4 flex gap-4 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-xs text-muted-foreground">High Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span className="text-xs text-muted-foreground">Moderate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs text-muted-foreground">Safe</span>
          </div>
        </div>
      </div>
    </div>
  );
}
