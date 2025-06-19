
import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import AnimatedSection from './AnimatedSection';

const PricingCalculator = () => {
  const [projects, setProjects] = useState([3]);
  const [bandwidth, setBandwidth] = useState([50]);

  const calculatePrice = () => {
    const basePrice = 1.50;
    const projectMultiplier = projects[0] > 1 ? (projects[0] - 1) * 0.5 : 0;
    const bandwidthMultiplier = bandwidth[0] > 20 ? ((bandwidth[0] - 20) / 10) * 0.25 : 0;
    return (basePrice + projectMultiplier + bandwidthMultiplier).toFixed(2);
  };

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
            
            <div className="bg-primary/10 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">Estimated Monthly Cost</h3>
              <div className="text-4xl font-bold text-primary mb-4">${calculatePrice()}</div>
              <p className="text-sm text-muted-foreground">
                Perfect for {projects[0]} project{projects[0] > 1 ? 's' : ''} with {bandwidth[0]}GB bandwidth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
