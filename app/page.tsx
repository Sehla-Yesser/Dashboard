import Dashboard from '@/components/dashboard';

export const metadata = {
  title: 'SAFEpath AI - Driving Risk Score',
  description: 'Real-time contextual driving risk scoring powered by AI',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-[#0a0e1a]">
      <Dashboard />
    </main>
  );
}
