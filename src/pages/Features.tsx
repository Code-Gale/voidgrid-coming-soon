
import Layout from '@/components/Layout';
import { Zap, Rocket, Settings, Code, Shield, BarChart3, Database, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Rocket,
      title: 'Automated Deployment',
      description: 'Deploy your applications with a single command. Our intelligent deployment system handles everything from build optimization to rollback strategies.',
      status: 'Coming Soon'
    },
    {
      icon: Settings,
      title: 'Custom Hosting Panel',
      description: 'A beautifully designed control panel that gives you complete visibility and control over your deployments, domains, and resources.',
      status: 'In Development'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Servers',
      description: 'Global edge network with sub-100ms response times. Your users will experience blazing fast loading speeds worldwide.',
      status: 'Core Feature'
    },
    {
      icon: Code,
      title: 'Developer-Centric Tools',
      description: 'CLI tools, API access, webhooks, and integrations with your favorite development tools. Built by developers, for developers.',
      status: 'Beta'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SSL certificates, DDoS protection, automated backups, and SOC 2 compliance. Your applications are secure by default.',
      status: 'Core Feature'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Detailed insights into your application performance, user behavior, and resource usage with beautiful, actionable dashboards.',
      status: 'Coming Soon'
    },
    {
      icon: Database,
      title: 'Database Integration',
      description: 'Seamless integration with popular databases. Automatic backups, scaling, and optimization for your data layer.',
      status: 'Planned'
    },
    {
      icon: Globe,
      title: 'Multi-Region Deployment',
      description: 'Deploy your applications across multiple regions with automatic failover and load balancing for maximum availability.',
      status: 'Core Feature'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Core Feature':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Beta':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'In Development':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Coming Soon':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Planned':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default:
        return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Features</span> That Matter
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to deploy, manage, and scale your applications with confidence.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="glass-card p-8 hover:glow-effect transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <feature.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:bg-primary/40 transition-all duration-300" />
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(feature.status)}`}>
                    {feature.status}
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center animate-fade-in">
            <div className="glass-card p-12 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience VoidGrid?</h2>
              <p className="text-muted-foreground mb-8">
                Join our waitlist to be the first to access these powerful features when we launch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors">
                  Join Waitlist
                </button>
                <button className="border border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors">
                  View Roadmap
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Features;
