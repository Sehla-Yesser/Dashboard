'use client';

import { Home, MapPin, BarChart3, Trello, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'trips', label: 'Trips', icon: Trello },
    { id: 'map', label: 'Map', icon: MapPin },
    { id: 'insights', label: 'Insights', icon: BarChart3 },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background to-background/80 backdrop-blur-md border-t border-slate-800">
      <div className="flex justify-around items-center h-20 max-w-md mx-auto lg:max-w-2xl">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg transition-all ${
                isActive
                  ? 'text-blue-400 bg-blue-950/40 shadow-lg shadow-blue-500/10'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
