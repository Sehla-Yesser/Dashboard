'use client';

import { useState } from 'react';
import SafeScoreCard from './safe-score-card';
import MetricsGrid from './metrics-grid';
import WeeklyChart from './weekly-chart';
import SmartTips from './smart-tips';
import BottomNav from './bottom-nav';
import TripsPage from './trips-page';
import MapPage from './map-page';
import InsightsPage from './insights-page';
import ProfilePage from './profile-page';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');

  const renderPage = () => {
    switch (activeTab) {
      case 'trips':
        return <TripsPage />;
      case 'map':
        return <MapPage />;
      case 'insights':
        return <InsightsPage />;
      case 'profile':
        return <ProfilePage />;
      case 'home':
      default:
        return (
          <div className="min-h-screen flex flex-col bg-background pb-24">
            {/* Header */}
            <div className="sticky top-0 z-30 bg-gradient-to-b from-background via-background to-transparent backdrop-blur-sm px-4 pt-4 pb-2">
              <h1 className="text-xs font-medium text-muted-foreground tracking-widest uppercase">SAFEpath AI</h1>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto px-4 pt-4 pb-8">
              {/* Safe Score Section */}
              <SafeScoreCard score={82} trend="up" />

              {/* Metrics Grid */}
              <MetricsGrid />

              {/* Weekly Summary */}
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-foreground mb-4">This Week Summary</h2>
                <WeeklyChart />
              </div>

              {/* Smart Tips */}
              <div className="mt-8 mb-4">
                <h2 className="text-lg font-semibold text-foreground mb-4">Smart Tips</h2>
                <SmartTips />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      {renderPage()}
      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </>
  );
}
