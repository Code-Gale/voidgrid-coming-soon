
import Layout from '@/components/Layout';
import { CheckCircle, Circle, Clock, Rocket } from 'lucide-react';

const Roadmap = () => {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Website Launch',
      status: 'completed',
      date: 'Q4 2024',
      description: 'Launch of VoidGrid website with waitlist functionality and brand presence.',
      features: [
        'Brand identity and website',
        'Waitlist registration',
        'Community building',
        'Initial user feedback collection'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Core Hosting Functions',
      status: 'in-progress',
      date: 'Q1 2025',
      description: 'Development of core hosting infrastructure and basic deployment capabilities.',
      features: [
        'Basic deployment pipeline',
        'SSL certificate automation',
        'Domain management',
        'Static site hosting',
        'Basic monitoring dashboard'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Custom Hosting Panel',
      status: 'planned',
      date: 'Q2 2025',
      description: 'Advanced control panel with comprehensive management tools and analytics.',
      features: [
        'Advanced control panel UI',
        'Real-time analytics',
        'Resource management',
        'Team collaboration tools',
        'API access and webhooks'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Full Automation Rollout',
      status: 'planned',
      date: 'Q3 2025',
      description: 'Complete automation suite with AI-powered optimizations and enterprise features.',
      features: [
        'AI-powered auto-scaling',
        'Intelligent cost optimization',
        'Advanced security features',
        'Multi-region deployment',
        'Enterprise integrations'
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-6 w-6 text-green-400" />;
      case 'in-progress':
        return <Clock className="h-6 w-6 text-yellow-400" />;
      case 'planned':
        return <Circle className="h-6 w-6 text-gray-400" />;
      default:
        return <Circle className="h-6 w-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-400 bg-green-400/10';
      case 'in-progress':
        return 'border-yellow-400 bg-yellow-400/10';
      case 'planned':
        return 'border-gray-400 bg-gray-400/10';
      default:
        return 'border-gray-400 bg-gray-400/10';
    }
  };

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Development</span> Roadmap
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our journey from concept to the most powerful hosting platform for developers.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-yellow-400 to-gray-400"></div>

            {/* Phases */}
            <div className="space-y-12">
              {phases.map((phase, index) => (
                <div 
                  key={phase.phase}
                  className="relative flex items-start animate-slide-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Status Icon */}
                  <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-2 ${getStatusColor(phase.status)}`}>
                    {getStatusIcon(phase.status)}
                  </div>

                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <div className="glass-card p-8 hover:glow-effect transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-sm font-medium text-primary">{phase.phase}</span>
                          <h3 className="text-2xl font-bold text-white mt-1">{phase.title}</h3>
                        </div>
                        <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                          {phase.date}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {phase.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {phase.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center animate-fade-in">
            <div className="glass-card p-12">
              <Rocket className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Join Our Journey</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Be part of the VoidGrid revolution. Join our waitlist to get early access 
                and help shape the future of web hosting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors">
                  Join Waitlist
                </button>
                <button className="border border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors">
                  Get Updates
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Roadmap;
