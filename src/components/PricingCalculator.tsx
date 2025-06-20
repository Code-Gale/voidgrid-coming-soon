
import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';
import { Cpu, HardDrive, Wifi, CircleDollarSign } from 'lucide-react';

const PricingCalculator = () => {
  // Resource sliders state
  const [cpu, setCpu] = useState([0.5]);
  const [ram, setRam] = useState([1]);
  const [storage, setStorage] = useState([10]);
  const [bandwidth, setBandwidth] = useState([50]);
  
  // Selected predefined plan state
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  // Pricing rates per unit per month
  const rates = {
    cpu: 2.00,      // $2.00 per vCPU
    ram: 1.50,      // $1.50 per GB RAM
    storage: 0.10,  // $0.10 per GB storage
    bandwidth: 0.01 // $0.01 per GB bandwidth
  };

  // Predefined plans
  const predefinedPlans = [
    {
      id: 'edgestarter',
      name: 'EdgeStarter',
      price: 0,
      cpu: 0.3,
      ram: 0.25,
      storage: 0.5,
      bandwidth: 5,
      description: 'Free tier - Perfect for hobby projects'
    },
    {
      id: 'edgecore',
      name: 'EdgeCore',
      price: 1.50,
      cpu: 0.5,
      ram: 0.5,
      storage: 2,
      bandwidth: 20,
      description: 'Starter plan - Small projects and startups'
    },
    {
      id: 'pulsegrid',
      name: 'PulseGrid',
      price: 4.50,
      cpu: 1.0,
      ram: 1.0,
      storage: 10,
      bandwidth: 100,
      description: 'Mid-tier - Growing apps and production'
    },
    {
      id: 'infinityforge',
      name: 'InfinityForge',
      price: 8.00,
      cpu: 1.5,
      ram: 2.0,
      storage: 25,
      bandwidth: 500,
      description: 'Premium - High-traffic applications'
    }
  ];

  // Calculate custom cost
  const calculateCustomCost = () => {
    const cpuCost = cpu[0] * rates.cpu;
    const ramCost = ram[0] * rates.ram;
    const storageCost = storage[0] * rates.storage;
    const bandwidthCost = bandwidth[0] * rates.bandwidth;
    return Math.max(0, cpuCost + ramCost + storageCost + bandwidthCost);
  };

  // Set predefined plan values
  const selectPlan = (plan: typeof predefinedPlans[0]) => {
    setSelectedPlan(plan.id);
    setCpu([plan.cpu]);
    setRam([plan.ram]);
    setStorage([plan.storage]);
    setBandwidth([plan.bandwidth]);
  };

  const customCost = calculateCustomCost();

  return (
    <section className="py-20 border-t border-border" aria-label="Pricing Calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Calculate Your Perfect Plan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estimate your monthly hosting costs with our interactive calculator. 
              Adjust the sliders to match your requirements and see real-time pricing.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Predefined Plans Section */}
          <AnimatedSection>
            <div className="glass-card p-6">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Predefined Plans</h3>
              <div className="space-y-4">
                {predefinedPlans.map((plan) => (
                  <Button
                    key={plan.id}
                    onClick={() => selectPlan(plan)}
                    variant={selectedPlan === plan.id ? "default" : "outline"}
                    className={`w-full p-4 h-auto text-left justify-start transition-all duration-200 ${
                      selectedPlan === plan.id 
                        ? 'ring-2 ring-primary bg-primary text-primary-foreground' 
                        : 'hover:border-primary/50'
                    }`}
                  >
                    <div className="w-full">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-bold text-lg">{plan.name}</h4>
                          <p className="text-sm opacity-80">{plan.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">
                            {plan.price === 0 ? 'Free' : `$${plan.price.toFixed(2)}`}
                          </div>
                          <div className="text-xs opacity-80">per month</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs opacity-80">
                        <div>CPU: {plan.cpu} vCPU</div>
                        <div>RAM: {plan.ram} GB</div>
                        <div>Storage: {plan.storage} GB</div>
                        <div>Bandwidth: {plan.bandwidth} GB</div>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Custom Calculator Section */}
          <AnimatedSection>
            <div className="glass-card p-6">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Custom Calculator</h3>
              
              {/* CPU Slider */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-primary" />
                    <label className="text-sm font-medium text-foreground">CPU</label>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {cpu[0].toFixed(1)} vCPU
                  </span>
                </div>
                <Slider
                  value={cpu}
                  onValueChange={setCpu}
                  max={4}
                  min={0.1}
                  step={0.1}
                  className="mb-2"
                />
                <div className="text-xs text-muted-foreground text-right">
                  ${(cpu[0] * rates.cpu).toFixed(2)}/month
                </div>
              </div>

              {/* RAM Slider */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <CircleDollarSign className="w-5 h-5 text-primary" />
                    <label className="text-sm font-medium text-foreground">RAM</label>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {ram[0].toFixed(2)} GB
                  </span>
                </div>
                <Slider
                  value={ram}
                  onValueChange={setRam}
                  max={8}
                  min={0.25}
                  step={0.25}
                  className="mb-2"
                />
                <div className="text-xs text-muted-foreground text-right">
                  ${(ram[0] * rates.ram).toFixed(2)}/month
                </div>
              </div>

              {/* Storage Slider */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <HardDrive className="w-5 h-5 text-primary" />
                    <label className="text-sm font-medium text-foreground">Storage</label>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {storage[0]} GB
                  </span>
                </div>
                <Slider
                  value={storage}
                  onValueChange={setStorage}
                  max={100}
                  min={1}
                  step={1}
                  className="mb-2"
                />
                <div className="text-xs text-muted-foreground text-right">
                  ${(storage[0] * rates.storage).toFixed(2)}/month
                </div>
              </div>

              {/* Bandwidth Slider */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Wifi className="w-5 h-5 text-primary" />
                    <label className="text-sm font-medium text-foreground">Bandwidth</label>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {bandwidth[0]} GB
                  </span>
                </div>
                <Slider
                  value={bandwidth}
                  onValueChange={setBandwidth}
                  max={1000}
                  min={10}
                  step={10}
                  className="mb-2"
                />
                <div className="text-xs text-muted-foreground text-right">
                  ${(bandwidth[0] * rates.bandwidth).toFixed(2)}/month
                </div>
              </div>

              {/* Cost Breakdown */}
              <div className="border-t border-border pt-6">
                <h4 className="font-semibold mb-4 text-foreground">Cost Breakdown</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">CPU ({cpu[0].toFixed(1)} vCPU × $2.00)</span>
                    <span>${(cpu[0] * rates.cpu).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">RAM ({ram[0].toFixed(2)} GB × $1.50)</span>
                    <span>${(ram[0] * rates.ram).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Storage ({storage[0]} GB × $0.10)</span>
                    <span>${(storage[0] * rates.storage).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bandwidth ({bandwidth[0]} GB × $0.01)</span>
                    <span>${(bandwidth[0] * rates.bandwidth).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-border pt-2 mt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span className="text-foreground">Total Monthly Cost</span>
                      <span className="text-primary">${customCost.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formula Display */}
              <div className="mt-6 p-4 bg-muted/20 rounded-lg">
                <h5 className="text-sm font-medium text-foreground mb-2">Pricing Formula</h5>
                <p className="text-xs text-muted-foreground font-mono">
                  (CPU × $2.00) + (RAM × $1.50) + (Storage × $0.10) + (Bandwidth × $0.01)
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Educational Note */}
        <AnimatedSection delay={400}>
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              <strong>Transparent Pricing:</strong> No hidden fees, no setup costs, no surprises. 
              Pay only for the resources you use with the flexibility to scale up or down anytime.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PricingCalculator;
