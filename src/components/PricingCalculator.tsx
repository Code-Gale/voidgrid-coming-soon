
import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import AnimatedSection from './AnimatedSection';

const PricingCalculator = () => {
  const [projects, setProjects] = useState([1]);
  const [bandwidth, setBandwidth] = useState([5]);
  const [storage, setStorage] = useState([0.5]);

  const plans = [
    {
      name: 'EdgeStarter',
      basePrice: 0,
      cpu: '0.3 vCPU (Shared)',
      memory: '256 MB',
      storage: 0.5, // GB
      bandwidth: 5, // GB
      buildMinutes: 300,
      autoSleep: '15 min inactivity',
      coldStart: '~10s',
      useCase: 'Hobby, Portfolio, Experiments'
    },
    {
      name: 'EdgeCore',
      basePrice: 1.50,
      cpu: '0.5 vCPU (Shared)',
      memory: '512 MB',
      storage: 2, // GB
      bandwidth: 20, // GB
      buildMinutes: 600,
      autoSleep: '30 min inactivity',
      coldStart: '~5s',
      useCase: 'Small Projects, Early Stage Startups'
    },
    {
      name: 'PulseGrid',
      basePrice: 4.50,
      cpu: '1 vCPU (Shared)',
      memory: '1 GB',
      storage: 10, // GB
      bandwidth: 100, // GB
      buildMinutes: 1200,
      autoSleep: 'No Sleep',
      coldStart: 'Near-Instant',
      useCase: 'Growing Apps, Production Workloads'
    },
    {
      name: 'InfinityForge',
      basePrice: 8.00,
      cpu: '1.5 vCPU (Shared)',
      memory: '2 GB',
      storage: 25, // GB
      bandwidth: 500, // GB
      buildMinutes: 'Unlimited',
      autoSleep: 'No Sleep',
      coldStart: 'Instant',
      useCase: 'High-Traffic, Resource-Intensive Projects'
    }
  ];

  const getRecommendedPlan = () => {
    const requiredStorage = storage[0];
    const requiredBandwidth = bandwidth[0];
    
    // Find the best plan based on requirements
    for (let i = 0; i < plans.length; i++) {
      const plan = plans[i];
      if (plan.storage >= requiredStorage && plan.bandwidth >= requiredBandwidth) {
        return plan;
      }
    }
    
    // If no plan meets requirements, return the highest tier
    return plans[plans.length - 1];
  };

  const recommendedPlan = getRecommendedPlan();

  return (
    <section className="py-20 border-t border-border" aria-label="Pricing Calculator">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Calculate Your Perfect Plan
          </h2>
        </AnimatedSection>
        <div className="glass-card p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-foreground mb-4">
                Number of Projects: {projects[0]}
              </label>
              <Slider
                value={projects}
                onValueChange={setProjects}
                max={10}
                min={1}
                step={1}
                className="mb-6"
              />
              
              <label className="block text-sm font-medium text-foreground mb-4">
                Storage Needed (GB): {storage[0]}
              </label>
              <Slider
                value={storage}
                onValueChange={setStorage}
                max={50}
                min={0.5}
                step={0.5}
                className="mb-6"
              />
              
              <label className="block text-sm font-medium text-foreground mb-4">
                Bandwidth (GB/month): {bandwidth[0]}
              </label>
              <Slider
                value={bandwidth}
                onValueChange={setBandwidth}
                max={500}
                min={5}
                step={5}
                className="mb-6"
              />
            </div>
            
            <div className="bg-primary/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Recommended Plan</h3>
              <div className="text-3xl font-bold text-primary mb-2">{recommendedPlan.name}</div>
              <div className="text-2xl font-bold text-foreground mb-4">
                ${recommendedPlan.basePrice.toFixed(2)}/month
              </div>
              
              <div className="space-y-2 text-sm text-muted-foreground mb-4">
                <div><strong>CPU:</strong> {recommendedPlan.cpu}</div>
                <div><strong>Memory:</strong> {recommendedPlan.memory}</div>
                <div><strong>Storage:</strong> {recommendedPlan.storage} GB SSD</div>
                <div><strong>Bandwidth:</strong> {recommendedPlan.bandwidth} GB/month</div>
                <div><strong>Build Minutes:</strong> {recommendedPlan.buildMinutes}/month</div>
                <div><strong>Cold Start:</strong> {recommendedPlan.coldStart}</div>
              </div>
              
              <p className="text-sm text-muted-foreground font-medium">
                {recommendedPlan.useCase}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
