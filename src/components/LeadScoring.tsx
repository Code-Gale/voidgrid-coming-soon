
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

const LeadScoring = () => {
  const [completedActions, setCompletedActions] = useState<string[]>([]);

  const actions = [
    { id: 'waitlist', text: 'Joined the waitlist', points: 10 },
    { id: 'social', text: 'Followed us on social media', points: 5 },
    { id: 'share', text: 'Shared VoidGrid with friends', points: 15 },
    { id: 'feedback', text: 'Provided feedback or suggestions', points: 20 },
  ];

  const toggleAction = (actionId: string) => {
    setCompletedActions(prev => 
      prev.includes(actionId) 
        ? prev.filter(id => id !== actionId)
        : [...prev, actionId]
    );
  };

  const totalPoints = actions
    .filter(action => completedActions.includes(action.id))
    .reduce((sum, action) => sum + action.points, 0);

  const getRewardLevel = () => {
    if (totalPoints >= 40) return { level: 'VIP Early Access', color: 'text-yellow-400' };
    if (totalPoints >= 25) return { level: 'Priority Beta', color: 'text-green-400' };
    if (totalPoints >= 10) return { level: 'Beta Access', color: 'text-blue-400' };
    return { level: 'Standard Access', color: 'text-muted-foreground' };
  };

  const reward = getRewardLevel();

  return (
    <section className="py-20 border-t border-border" aria-label="Community Rewards">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
            Earn Early Access Rewards
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Complete actions to earn points and unlock exclusive early access tiers!
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-6 text-foreground">Complete Actions</h3>
            <div className="space-y-4">
              {actions.map((action) => (
                <div
                  key={action.id}
                  className={`flex items-center justify-between p-4 rounded-lg border transition-colors cursor-pointer ${
                    completedActions.includes(action.id)
                      ? 'bg-primary/10 border-primary/30'
                      : 'bg-muted/20 border-border hover:bg-muted/30'
                  }`}
                  onClick={() => toggleAction(action.id)}
                >
                  <div className="flex items-center">
                    <CheckCircle
                      className={`h-5 w-5 mr-3 ${
                        completedActions.includes(action.id) ? 'text-primary' : 'text-muted-foreground'
                      }`}
                    />
                    <span className="text-foreground">{action.text}</span>
                  </div>
                  <span className="text-primary font-semibold">+{action.points}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-card p-6 text-center">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Your Status</h3>
            <div className="text-4xl font-bold text-primary mb-2">{totalPoints}</div>
            <div className="text-sm text-muted-foreground mb-4">Points Earned</div>
            <div className={`text-lg font-semibold mb-6 ${reward.color}`}>
              {reward.level}
            </div>
            <Button className="w-full">
              Claim Rewards
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadScoring;
