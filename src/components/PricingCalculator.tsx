import { useState } from 'react';
import { Calculator, Zap, HardDrive, Wifi, Cpu } from 'lucide-react';

interface PricingTier {
  name: string;
  basePrice: number;
  cpu: number;
  ram: number;
  storage: number;
  bandwidth: number;
}

const PricingCalculator = () => {
  const [selectedTier, setSelectedTier] = useState(1);
  const [customUsage, setCustomUsage] = useState({
    cpu: 1,
    ram: 1,
    storage: 10,
    bandwidth: 100,
  });

  const tiers: PricingTier[] = [
    { name: 'EdgeStarter', basePrice: 0, cpu: 0.3, ram: 0.25, storage: 0.5, bandwidth: 5 },
    { name: 'EdgeCore', basePrice: 1.50, cpu: 0.5, ram: 0.5, storage: 2, bandwidth: 20 },
    { name: 'PulseGrid', basePrice: 4.50, cpu: 1, ram: 1, storage: 10, bandwidth: 100 },
    { name: 'InfinityForge', basePrice: 8.00, cpu: 1.5, ram: 2, storage: 25, bandwidth: 500 },
  ];

  const calculateCustomPrice = () => {
    const cpuCost = customUsage.cpu * 2; // $2 per vCPU
    const ramCost = customUsage.ram * 1.5; // $1.5 per GB
    const storageCost = customUsage.storage * 0.1; // $0.1 per GB
    const bandwidthCost = customUsage.bandwidth * 0.01; // $0.01 per GB
    
    return Math.max(0, cpuCost + ramCost + storageCost + bandwidthCost);
  };

  const selectedTierData = tiers[selectedTier];
  const customPrice = calculateCustomPrice();

  return (
    <div className="py-12 bg-background/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pricing Calculator
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estimate your monthly costs based on your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Predefined Tiers */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Choose a Plan</h3>
            <div className="space-y-3">
              {tiers.map((tier, index) => (
                <button
                  key={tier.name}
                  onClick={() => setSelectedTier(index)}
                  className={`w-full p-4 rounded-lg border transition-all duration-200 text-left ${
                    selectedTier === index
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">{tier.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {tier.cpu}vCPU • {tier.ram}GB RAM • {tier.storage}GB Storage
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">${tier.basePrice}/mo</div>
                      {tier.basePrice === 0 && (
                        <div className="text-xs text-muted-foreground">Free</div>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Calculator */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Custom Estimate</h3>
            
            <div className="space-y-6">
              {/* CPU Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Cpu className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-medium">CPU (vCPU)</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{customUsage.cpu} vCPU</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="4"
                  step="0.1"
                  value={customUsage.cpu}
                  onChange={(e) => setCustomUsage(prev => ({ ...prev, cpu: parseFloat(e.target.value) }))}
                  className="w-full h-2 bg-background/50 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              {/* RAM Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Zap className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-medium">RAM (GB)</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{customUsage.ram} GB</span>
                </div>
                <input
                  type="range"
                  min="0.25"
                  max="8"
                  step="0.25"
                  value={customUsage.ram}
                  onChange={(e) => setCustomUsage(prev => ({ ...prev, ram: parseFloat(e.target.value) }))}
                  className="w-full h-2 bg-background/50 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              {/* Storage Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <HardDrive className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-medium">Storage (GB)</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{customUsage.storage} GB</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  step="1"
                  value={customUsage.storage}
                  onChange={(e) => setCustomUsage(prev => ({ ...prev, storage: parseInt(e.target.value) }))}
                  className="w-full h-2 bg-background/50 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              {/* Bandwidth Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Wifi className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-medium">Bandwidth (GB)</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{customUsage.bandwidth} GB</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={customUsage.bandwidth}
                  onChange={(e) => setCustomUsage(prev => ({ ...prev, bandwidth: parseInt(e.target.value) }))}
                  className="w-full h-2 bg-background/50 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              {/* Price Display */}
              <div className="pt-4 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    ${customPrice.toFixed(2)}/month
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Estimated monthly cost
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator; 