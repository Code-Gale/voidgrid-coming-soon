
import { Check, X } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const FeatureComparison = () => {
  const features = [
    { name: 'Custom Domain', free: false, starter: true, pro: true, enterprise: true },
    { name: 'SSL Certificate', free: true, starter: true, pro: true, enterprise: true },
    { name: 'Git Integration', free: true, starter: true, pro: true, enterprise: true },
    { name: 'Auto Sleep', free: true, starter: true, pro: false, enterprise: false },
    { name: 'Database Access', free: false, starter: true, pro: true, enterprise: true },
    { name: 'Priority Support', free: false, starter: false, pro: true, enterprise: true },
  ];

  const plans = [
    { name: 'EdgeStarter', price: 'Free', popular: false },
    { name: 'EdgeCore', price: '$1.50', popular: true },
    { name: 'PulseGrid', price: '$4.50', popular: false },
    { name: 'InfinityForge', price: '$8.00', popular: false },
  ];

  return (
    <section className="py-20 border-t border-border bg-background/80" aria-label="Feature Comparison">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Compare Plans
          </h2>
        </AnimatedSection>
        <div className="overflow-x-auto">
          <table className="w-full bg-card/50 rounded-lg overflow-hidden">
            <thead>
              <tr className="border-b border-border">
                <th className="p-4 text-left">Features</th>
                {plans.map((plan) => (
                  <th key={plan.name} className={`p-4 text-center ${plan.popular ? 'bg-primary/10' : ''}`}>
                    <div className="font-bold">{plan.name}</div>
                    <div className="text-sm text-muted-foreground">{plan.price}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={feature.name} className={index % 2 === 0 ? 'bg-muted/20' : ''}>
                  <td className="p-4 font-medium">{feature.name}</td>
                  <td className="p-4 text-center">
                    {feature.free ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className={`p-4 text-center ${plans[1].popular ? 'bg-primary/5' : ''}`}>
                    {feature.starter ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {feature.pro ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {feature.enterprise ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FeatureComparison;
