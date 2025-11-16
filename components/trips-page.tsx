'use client';

import { useState } from 'react';
import { MapPin, AlertCircle, Phone, Zap } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

interface Trip {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  startLocation: string;
  endLocation: string;
  distance: number;
  score: number;
  events: {
    phoneUsage?: number;
    harshBraking?: number;
    roadQuality?: number;
  };
}

const sampleTrips: Trip[] = [
  {
    id: '1',
    date: 'Today',
    startTime: '09:15 AM',
    endTime: '09:45 AM',
    startLocation: 'Downtown Junction',
    endLocation: 'Tech Park Drive',
    distance: 12.5,
    score: 88,
    events: { phoneUsage: 1, harshBraking: 0, roadQuality: 1 },
  },
  {
    id: '2',
    date: 'Today',
    startTime: '02:30 PM',
    endTime: '03:15 PM',
    startLocation: 'Tech Park Drive',
    endLocation: 'Shopping District',
    distance: 8.2,
    score: 92,
    events: { phoneUsage: 0, harshBraking: 1, roadQuality: 0 },
  },
  {
    id: '3',
    date: 'Nov 14',
    startTime: '06:00 PM',
    endTime: '06:45 PM',
    startLocation: 'Shopping District',
    endLocation: 'Residential Area',
    distance: 15.7,
    score: 79,
    events: { phoneUsage: 2, harshBraking: 2, roadQuality: 2 },
  },
  {
    id: '4',
    date: 'Nov 14',
    startTime: '08:30 AM',
    endTime: '09:10 AM',
    startLocation: 'Residential Area',
    endLocation: 'Downtown Junction',
    distance: 18.3,
    score: 85,
    events: { phoneUsage: 1, harshBraking: 0, roadQuality: 1 },
  },
];

export default function TripsPage() {
  const [filter, setFilter] = useState<'day' | 'week' | 'month' | 'all'>('day');

  const getScoreBgColor = (score: number) => {
    if (score >= 85) return 'bg-green-950/30 border-green-500/30';
    if (score >= 70) return 'bg-yellow-950/30 border-yellow-500/30';
    return 'bg-red-950/30 border-red-500/30';
  };

  const getScoreTextColor = (score: number) => {
    if (score >= 85) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen flex flex-col bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-gradient-to-b from-background via-background to-transparent backdrop-blur-sm px-4 pt-4 pb-2">
        <h1 className="text-lg font-semibold text-foreground">Your Trips</h1>
      </div>

      {/* Filter Bar */}
      <div className="px-4 py-4 flex gap-2 overflow-x-auto scrollbar-hide">
        {(['day', 'week', 'month', 'all'] as const).map((f) => (
          <Button
            key={f}
            onClick={() => setFilter(f)}
            variant={filter === f ? 'default' : 'outline'}
            className={`whitespace-nowrap capitalize ${
              filter === f
                ? 'bg-primary text-primary-foreground'
                : 'border-border text-muted-foreground hover:text-foreground'
            }`}
          >
            {f}
          </Button>
        ))}
      </div>

      {/* Trips List */}
      <div className="flex-1 overflow-y-auto px-4 pb-8">
        <div className="space-y-3">
          {sampleTrips.map((trip) => (
            <Card
              key={trip.id}
              className={`p-4 border cursor-pointer transition-all hover:shadow-lg hover:shadow-primary/10 ${getScoreBgColor(trip.score)}`}
            >
              {/* Trip Header */}
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-xs text-muted-foreground">{trip.date} · {trip.startTime}</p>
                  <p className="text-sm text-foreground font-medium mt-1">{trip.distance}km</p>
                </div>
                <div className={`text-right ${getScoreTextColor(trip.score)}`}>
                  <p className="text-lg font-bold">{trip.score}</p>
                  <p className="text-xs text-muted-foreground">Safe Score</p>
                </div>
              </div>

              {/* Route */}
              <div className="flex items-start gap-3 mb-3">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-0.5 h-6 bg-border my-1"></div>
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground">{trip.startLocation}</p>
                  <p className="text-xs text-muted-foreground mt-3">{trip.endLocation}</p>
                </div>
              </div>

              {/* Events Icons */}
              <div className="flex gap-2 flex-wrap">
                {trip.events.phoneUsage! > 0 && (
                  <div className="flex items-center gap-1 bg-yellow-950/40 px-2 py-1 rounded text-xs">
                    <Phone className="w-3 h-3 text-yellow-400" />
                    <span className="text-yellow-400">{trip.events.phoneUsage}</span>
                  </div>
                )}
                {trip.events.harshBraking! > 0 && (
                  <div className="flex items-center gap-1 bg-red-950/40 px-2 py-1 rounded text-xs">
                    <Zap className="w-3 h-3 text-red-400" />
                    <span className="text-red-400">{trip.events.harshBraking}</span>
                  </div>
                )}
                {trip.events.roadQuality! > 0 && (
                  <div className="flex items-center gap-1 bg-orange-950/40 px-2 py-1 rounded text-xs">
                    <AlertCircle className="w-3 h-3 text-orange-400" />
                    <span className="text-orange-400">{trip.events.roadQuality}</span>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
