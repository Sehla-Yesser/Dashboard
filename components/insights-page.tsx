'use client';

import { TrendingUp, AlertCircle, Wind, Clock } from 'lucide-react';
import { Card } from './ui/card';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const weeklyData = [
  { day: 'Mon', score: 78, events: 3 },
  { day: 'Tue', score: 82, events: 2 },
  { day: 'Wed', score: 85, events: 2 },
  { day: 'Thu', score: 88, events: 1 },
  { day: 'Fri', score: 82, events: 3 },
  { day: 'Sat', score: 91, events: 0 },
  { day: 'Sun', score: 87, events: 1 },
];

const distanceData = [
  { day: 'Mon', km: 42 },
  { day: 'Tue', km: 38 },
  { day: 'Wed', km: 45 },
  { day: 'Thu', km: 52 },
  { day: 'Fri', km: 40 },
  { day: 'Sat', km: 28 },
  { day: 'Sun', km: 35 },
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-gradient-to-b from-background via-background to-transparent backdrop-blur-sm px-4 pt-4 pb-2">
        <h1 className="text-lg font-semibold text-foreground">AI Insights</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-8">
        {/* Behavior Insights Section */}
        <div className="mb-6">
          <h2 className="text-base font-semibold text-foreground mb-3">Behavior Insights</h2>
          <div className="grid grid-cols-2 gap-3">
            {/* Distraction Score */}
            <Card className="p-4 bg-card/50 border-border">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-xs text-muted-foreground">Distraction</p>
                  <p className="text-2xl font-bold text-foreground">23%</p>
                </div>
                <div className="text-yellow-400">
                  <AlertCircle className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Moderate level</p>
            </Card>

            {/* Fatigue Probability */}
            <Card className="p-4 bg-card/50 border-border">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-xs text-muted-foreground">Fatigue Risk</p>
                  <p className="text-2xl font-bold text-foreground">8%</p>
                </div>
                <div className="text-green-400">
                  <AlertCircle className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Low risk</p>
            </Card>

            {/* Aggressiveness Index */}
            <Card className="p-4 bg-card/50 border-border">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-xs text-muted-foreground">Aggression</p>
                  <p className="text-2xl font-bold text-foreground">15%</p>
                </div>
                <div className="text-green-400">
                  <AlertCircle className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Calm driving</p>
            </Card>

            {/* Stability Score */}
            <Card className="p-4 bg-card/50 border-border">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-xs text-muted-foreground">Stability</p>
                  <p className="text-2xl font-bold text-foreground">92%</p>
                </div>
                <div className="text-blue-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Excellent</p>
            </Card>
          </div>
        </div>

        {/* Environment Insights */}
        <div className="mb-6">
          <h2 className="text-base font-semibold text-foreground mb-3">Environment Insights</h2>
          <div className="grid grid-cols-2 gap-3">
            <Card className="p-4 bg-card/50 border-border">
              <p className="text-xs text-muted-foreground mb-2">Road Quality</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-foreground">72%</span>
              </div>
            </Card>

            <Card className="p-4 bg-card/50 border-border">
              <p className="text-xs text-muted-foreground mb-2">Weather Risk</p>
              <div className="flex items-center gap-2">
                <Wind className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold text-foreground">Moderate</span>
              </div>
            </Card>
          </div>
        </div>

        {/* Weekly Charts */}
        <div className="mb-6">
          <h2 className="text-base font-semibold text-foreground mb-3">This Week Summary</h2>

          {/* Score Evolution */}
          <Card className="p-4 bg-card/50 border-border mb-4">
            <p className="text-sm font-medium text-foreground mb-3">Safety Score</p>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.2 0.01 240)" />
                <XAxis dataKey="day" stroke="oklch(0.65 0.02 240)" style={{ fontSize: '12px' }} />
                <YAxis stroke="oklch(0.65 0.02 240)" style={{ fontSize: '12px' }} domain={[60, 95]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'oklch(0.12 0.01 240)',
                    border: '1px solid oklch(0.2 0.01 240)',
                    borderRadius: '6px',
                  }}
                  labelStyle={{ color: 'oklch(0.98 0 0)' }}
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#4D9EFF"
                  dot={{ fill: '#4D9EFF', r: 4 }}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Distance Driven */}
          <Card className="p-4 bg-card/50 border-border">
            <p className="text-sm font-medium text-foreground mb-3">Distance Driven (km)</p>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={distanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.2 0.01 240)" />
                <XAxis dataKey="day" stroke="oklch(0.65 0.02 240)" style={{ fontSize: '12px' }} />
                <YAxis stroke="oklch(0.65 0.02 240)" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'oklch(0.12 0.01 240)',
                    border: '1px solid oklch(0.2 0.01 240)',
                    borderRadius: '6px',
                  }}
                  labelStyle={{ color: 'oklch(0.98 0 0)' }}
                />
                <Bar dataKey="km" fill="#4D9EFF" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* AI Recommendations */}
        <div className="mb-4">
          <h2 className="text-base font-semibold text-foreground mb-3">Smart Recommendations</h2>
          <div className="space-y-3">
            <Card className="p-4 bg-blue-950/20 border-blue-500/30">
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-foreground font-medium">Avoid night driving</p>
                  <p className="text-xs text-muted-foreground">Your fatigue risk increases 3x after 11 PM</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-yellow-950/20 border-yellow-500/30">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-foreground font-medium">Reduce phone usage</p>
                  <p className="text-xs text-muted-foreground">You had 12 phone events this week, try hands-free</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-green-950/20 border-green-500/30">
              <div className="flex gap-3">
                <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-foreground font-medium">Great stability</p>
                  <p className="text-xs text-muted-foreground">Your cornering skills improved 8% this month</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
