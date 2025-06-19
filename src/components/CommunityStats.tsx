import { useState, useEffect } from 'react';
import { Users, Github, Twitter, Zap } from 'lucide-react';

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  label: string;
  suffix?: string;
}

const CommunityStats = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const stats: StatItem[] = [
    { icon: Users, value: 1247, label: 'Waitlist Members' },
    { icon: Github, value: 892, label: 'GitHub Stars' },
    { icon: Twitter, value: 2341, label: 'Twitter Followers' },
    { icon: Zap, value: 156, label: 'Early Access', suffix: 'days' },
  ];

  useEffect(() => {
    const animateCounts = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        const newCounts = stats.map(stat => 
          Math.floor(stat.value * progress)
        );
        
        setCounts(newCounts);

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounts(stats.map(stat => stat.value));
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    // Start animation after a short delay
    const timer = setTimeout(animateCounts, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-12 bg-background/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Join Our Growing Community
          </h2>
          <p className="text-muted-foreground">
            Developers worldwide are already waiting for VoidGrid
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center glass-card p-6 hover:glow-effect transition-all duration-300">
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                {counts[index].toLocaleString()}
                {stat.suffix && <span className="text-lg text-muted-foreground ml-1">{stat.suffix}</span>}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityStats; 