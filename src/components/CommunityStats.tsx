
import { Users, Star, GitBranch, Zap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const CommunityStats = () => {
  const stats = [
    { icon: Users, label: 'Developers Joined', value: '2,847', color: 'text-blue-400' },
    { icon: Star, label: 'GitHub Stars', value: '1,234', color: 'text-yellow-400' },
    { icon: GitBranch, label: 'Projects Deployed', value: '892', color: 'text-green-400' },
    { icon: Zap, label: 'Uptime', value: '99.9%', color: 'text-primary' }
  ];

  return (
    <section className="py-20 border-t border-border bg-background/80" aria-label="Community Stats">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Join Our Growing Community
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 100}>
              <div className="glass-card p-6 text-center">
                <stat.icon className={`h-8 w-8 mx-auto mb-4 ${stat.color}`} />
                <div className={`text-2xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
