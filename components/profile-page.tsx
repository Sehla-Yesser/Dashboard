'use client';

import { useState } from 'react';
import { AlertCircle, Shield, Bell, Settings, HelpCircle, Lock, LogOut } from 'lucide-react';
import { Card } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Switch } from './ui/switch';

export default function ProfilePage() {
  const [facialRec, setFacialRec] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [drivingMode, setDrivingMode] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-gradient-to-b from-background via-background to-transparent backdrop-blur-sm px-4 pt-4 pb-2">
        <h1 className="text-lg font-semibold text-foreground">Profile</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-8">
        {/* User Information Card */}
        <Card className="p-6 mb-6 bg-gradient-to-br from-blue-950/40 to-slate-900/40 border-blue-500/20">
          <div className="flex items-start gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/placeholder-user.jpg" alt="Profile" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-foreground">John Doe</h2>
              <p className="text-sm text-muted-foreground">34 years • Male</p>
              <p className="text-xs text-muted-foreground mt-1">Member since Jan 2024</p>
            </div>
          </div>
        </Card>

        {/* Insurance Details Card */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-foreground mb-3">Insurance Details</h3>
          <Card className="p-4 mb-3 bg-card/50 border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                ABC
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">ABC Insurance Co.</p>
                <p className="text-xs text-muted-foreground">Policy #INS-2024-5847</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-card/50 border-border">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Policy Type</span>
                <span className="text-sm font-medium text-foreground">Comprehensive</span>
              </div>
              <div className="h-px bg-border"></div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Vehicle Reg</span>
                <span className="text-sm font-medium text-foreground">ABC-2024-XYZ</span>
              </div>
              <div className="h-px bg-border"></div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Odometer Baseline</span>
                <span className="text-sm font-medium text-foreground">42,150 km</span>
              </div>
              <div className="h-px bg-border"></div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Calculated Mileage</span>
                <span className="text-sm font-medium text-foreground">2,385 km</span>
              </div>
            </div>
          </Card>

          {/* Fraud Detection Status */}
          <Card className="p-4 mt-3 bg-green-950/20 border-green-500/30">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <div>
                <p className="text-sm font-medium text-green-300">No fraud detected</p>
                <p className="text-xs text-green-200/70">Mileage consistent with driving patterns</p>
              </div>
            </div>
          </Card>
        </div>

        {/* App Settings */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-foreground mb-3">App Settings</h3>
          <div className="space-y-2">
            {/* Facial Recognition */}
            <Card className="p-4 bg-card/50 border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-foreground">Facial Recognition</p>
                  <p className="text-xs text-muted-foreground">For app unlock</p>
                </div>
              </div>
              <Switch checked={facialRec} onCheckedChange={setFacialRec} />
            </Card>

            {/* Notifications */}
            <Card className="p-4 bg-card/50 border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-foreground">Notifications</p>
                  <p className="text-xs text-muted-foreground">Risk alerts & updates</p>
                </div>
              </div>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </Card>

            {/* Driving Mode */}
            <Card className="p-4 bg-card/50 border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-foreground">Driving Mode</p>
                  <p className="text-xs text-muted-foreground">Auto-enable on trip start</p>
                </div>
              </div>
              <Switch checked={drivingMode} onCheckedChange={setDrivingMode} />
            </Card>
          </div>
        </div>

        {/* Support & Legal */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-foreground mb-3">Support & Legal</h3>
          <div className="space-y-2">
            <Card className="p-4 bg-card/50 border-border flex items-center justify-between hover:bg-card/70 cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Contact Support</span>
              </div>
              <span className="text-muted-foreground text-lg">→</span>
            </Card>

            <Card className="p-4 bg-card/50 border-border flex items-center justify-between hover:bg-card/70 cursor-pointer transition-colors">
              <span className="text-sm font-medium text-foreground">Terms & Conditions</span>
              <span className="text-muted-foreground text-lg">→</span>
            </Card>

            <Card className="p-4 bg-card/50 border-border flex items-center justify-between hover:bg-card/70 cursor-pointer transition-colors">
              <span className="text-sm font-medium text-foreground">Data Privacy</span>
              <span className="text-muted-foreground text-lg">→</span>
            </Card>

            <Card className="p-4 bg-card/50 border-border flex items-center justify-between hover:bg-card/70 cursor-pointer transition-colors">
              <span className="text-sm font-medium text-foreground">App Version</span>
              <span className="text-xs text-muted-foreground">v2.1.4</span>
            </Card>
          </div>
        </div>

        {/* Logout Button */}
        <button className="w-full px-4 py-3 bg-red-950/20 border border-red-500/30 text-red-400 rounded-lg font-medium text-sm hover:bg-red-950/30 transition-colors flex items-center justify-center gap-2">
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
