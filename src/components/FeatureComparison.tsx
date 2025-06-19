import { useState } from 'react';
import { Check, X, Star, Zap, Shield, Globe, Database, GitBranch } from 'lucide-react';

interface Feature {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  edgeStarter: boolean | string;
  edgeCore: boolean | string;
  pulseGrid: boolean | string;
  infinityForge: boolean | string;
}

const FeatureComparison = () => {
  const [selectedPlans, setSelectedPlans] = useState(['edgeStarter', 'pulseGrid']);

  const features: Feature[] = [
    {
      name: 'CPU',
      description: 'Virtual CPU cores',
      icon: Zap,
      edgeStarter: '0.3 vCPU',
      edgeCore: '0.5 vCPU',
      pulseGrid: '1 vCPU',
      infinityForge: '1.5 vCPU',
    },
    {
      name: 'RAM',
      description: 'Memory allocation',
      icon: Zap,
      edgeStarter: '256 MB',
      edgeCore: '512 MB',
      pulseGrid: '1 GB',
      infinityForge: '2 GB',
    },
    {
      name: 'Storage',
      description: 'SSD storage space',
      icon: Database,
      edgeStarter: '500 MB',
      edgeCore: '2 GB',
      pulseGrid: '10 GB',
      infinityForge: '25 GB',
    },
    {
      name: 'Bandwidth',
      description: 'Monthly data transfer',
      icon: Globe,
      edgeStarter: '5 GB',
      edgeCore: '20 GB',
      pulseGrid: '100 GB',
      infinityForge: '500 GB',
    },
    {
      name: 'Custom Domain',
      description: 'Use your own domain',
      icon: Globe,
      edgeStarter: false,
      edgeCore: true,
      pulseGrid: true,
      infinityForge: true,
    },
    {
      name: 'SSL Certificate',
      description: 'Free HTTPS encryption',
      icon: Shield,
      edgeStarter: true,
      edgeCore: true,
      pulseGrid: true,
      infinityForge: true,
    },
    {
      name: 'Git Deploy',
      description: 'Deploy from Git repository',
      icon: GitBranch,
      edgeStarter: true,
      edgeCore: true,
      pulseGrid: true,
      infinityForge: true,
    },
    {
      name: 'Auto Scaling',
      description: 'Automatic resource scaling',
      icon: Zap,
      edgeStarter: false,
      edgeCore: false,
      pulseGrid: true,
      infinityForge: true,
    },
    {
      name: 'Priority Support',
      description: '24/7 priority support',
      icon: Star,
      edgeStarter: false,
      edgeCore: false,
      pulseGrid: true,
      infinityForge: true,
    },
    {
      name: 'Advanced Analytics',
      description: 'Detailed performance metrics',
      icon: Star,
      edgeStarter: false,
      edgeCore: false,
      pulseGrid: true,
      infinityForge: true,
    },
  ];

  const plans = [
    { id: 'edgeStarter', name: 'EdgeStarter', price: 'Free', color: 'text-green-400' },
    { id: 'edgeCore', name: 'EdgeCore', price: '$1.50/mo', color: 'text-blue-400' },
    { id: 'pulseGrid', name: 'PulseGrid', price: '$4.50/mo', color: 'text-purple-400' },
    { id: 'infinityForge', name: 'InfinityForge', price: '$8.00/mo', color: 'text-primary' },
  ];

  const togglePlan = (planId: string) => {
    setSelectedPlans(prev => 
      prev.includes(planId) 
        ? prev.filter(id => id !== planId)
        : [...prev, planId]
    );
  };

  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-5 w-5 text-green-400" />
      ) : (
        <X className="h-5 w-5 text-red-400" />
      );
    }
    return <span className="text-sm text-foreground">{value}</span>;
  };

  return (
    <div className="py-12 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Feature Comparison
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compare VoidGrid plans to find the perfect fit for your project
          </p>
        </div>

        {/* Plan Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => togglePlan(plan.id)}
              className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                selectedPlans.includes(plan.id)
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <div className="font-semibold">{plan.name}</div>
              <div className="text-sm opacity-75">{plan.price}</div>
            </button>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="min-w-full glass-card rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
              {/* Feature Column */}
              <div className="bg-background/80 p-4 border-r border-border">
                <div className="font-bold text-foreground mb-4">Features</div>
                {features.map((feature) => (
                  <div key={feature.name} className="py-3 border-b border-border last:border-b-0">
                    <div className="flex items-center mb-1">
                      <feature.icon className="h-4 w-4 text-primary mr-2" />
                      <span className="font-medium text-sm">{feature.name}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Plan Columns */}
              {plans.map((plan) => (
                <div key={plan.id} className={`p-4 ${plan.color} ${selectedPlans.includes(plan.id) ? '' : 'opacity-50'}`}>
                  <div className="font-bold mb-1">{plan.name}</div>
                  <div className="text-sm mb-4">{plan.price}</div>
                  {features.map((feature) => (
                    <div key={feature.name} className="py-3 border-b border-border last:border-b-0 flex justify-center">
                      {renderFeatureValue(feature[plan.id as keyof Feature])}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommendation */}
        <div className="text-center mt-8">
          <div className="glass-card p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Need Help Choosing?
            </h3>
            <p className="text-muted-foreground mb-4">
              Most developers start with PulseGrid for the best balance of features and price.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg transition-all duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureComparison; 