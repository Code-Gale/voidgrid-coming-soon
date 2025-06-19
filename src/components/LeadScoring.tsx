import { useState, useEffect } from 'react';
import { Trophy, Star, Target, TrendingUp, Award, Zap } from 'lucide-react';

interface LeadAction {
  id: string;
  name: string;
  points: number;
  completed: boolean;
  icon: React.ComponentType<{ className?: string }>;
}

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  unlocked: boolean;
  pointsRequired: number;
}

const LeadScoring = () => {
  const [totalPoints, setTotalPoints] = useState(0);
  const [level, setLevel] = useState(1);
  const [actions, setActions] = useState<LeadAction[]>([
    {
      id: 'visit-homepage',
      name: 'Visit Homepage',
      points: 10,
      completed: true,
      icon: Star
    },
    {
      id: 'view-features',
      name: 'View Features',
      points: 20,
      completed: true,
      icon: Zap
    },
    {
      id: 'check-pricing',
      name: 'Check Pricing',
      points: 30,
      completed: false,
      icon: Target
    },
    {
      id: 'submit-contact',
      name: 'Submit Contact Form',
      points: 50,
      completed: false,
      icon: TrendingUp
    },
    {
      id: 'share-social',
      name: 'Share on Social Media',
      points: 25,
      completed: false,
      icon: Star
    },
    {
      id: 'demo-request',
      name: 'Request Demo',
      points: 100,
      completed: false,
      icon: Award
    }
  ]);

  const achievements: Achievement[] = [
    {
      id: 'explorer',
      name: 'Explorer',
      description: 'First steps into VoidGrid',
      icon: Star,
      unlocked: totalPoints >= 10,
      pointsRequired: 10
    },
    {
      id: 'enthusiast',
      name: 'Enthusiast',
      description: 'Showing real interest',
      icon: Zap,
      unlocked: totalPoints >= 50,
      pointsRequired: 50
    },
    {
      id: 'advocate',
      name: 'Advocate',
      description: 'Spreading the word',
      icon: Trophy,
      unlocked: totalPoints >= 100,
      pointsRequired: 100
    },
    {
      id: 'champion',
      name: 'Champion',
      description: 'Ready to convert',
      icon: Award,
      unlocked: totalPoints >= 200,
      pointsRequired: 200
    }
  ];

  useEffect(() => {
    const completedPoints = actions
      .filter(action => action.completed)
      .reduce((sum, action) => sum + action.points, 0);
    
    setTotalPoints(completedPoints);
    setLevel(Math.floor(completedPoints / 50) + 1);
  }, [actions]);

  const completeAction = (actionId: string) => {
    setActions(prev => 
      prev.map(action => 
        action.id === actionId 
          ? { ...action, completed: true }
          : action
      )
    );
  };

  const getLevelTitle = (level: number) => {
    if (level <= 2) return 'Visitor';
    if (level <= 4) return 'Prospect';
    if (level <= 6) return 'Lead';
    return 'Hot Lead';
  };

  const nextLevelPoints = level * 50;
  const progressToNextLevel = ((totalPoints % 50) / 50) * 100;

  return (
    <div className="py-12 bg-background/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Progress
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track your engagement and unlock achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Progress Overview */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Your Status</h3>
            
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-primary mb-2">{totalPoints}</div>
              <div className="text-muted-foreground">Total Points</div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">
                  Level {level} - {getLevelTitle(level)}
                </span>
                <span className="text-sm text-muted-foreground">
                  {totalPoints % 50}/{50} points
                </span>
              </div>
              <div className="w-full bg-background/50 rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressToNextLevel}%` }}
                />
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {nextLevelPoints - totalPoints} points to next level
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-400">
                  {actions.filter(a => a.completed).length}
                </div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-muted-foreground">
                  {actions.filter(a => !a.completed).length}
                </div>
                <div className="text-sm text-muted-foreground">Remaining</div>
              </div>
            </div>
          </div>

          {/* Available Actions */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Available Actions</h3>
            
            <div className="space-y-3">
              {actions.map((action) => (
                <div 
                  key={action.id}
                  className={`p-3 rounded-lg border transition-all duration-200 ${
                    action.completed 
                      ? 'border-green-400 bg-green-400/10' 
                      : 'border-border hover:border-primary/50 cursor-pointer'
                  }`}
                  onClick={() => !action.completed && completeAction(action.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <action.icon className={`h-5 w-5 mr-3 ${
                        action.completed ? 'text-green-400' : 'text-primary'
                      }`} />
                      <div>
                        <div className="font-medium text-foreground">{action.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {action.points} points
                        </div>
                      </div>
                    </div>
                    <div className={`text-sm font-medium ${
                      action.completed ? 'text-green-400' : 'text-muted-foreground'
                    }`}>
                      {action.completed ? '✓' : '→'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-8">
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">Achievements</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {achievements.map((achievement) => (
                <div 
                  key={achievement.id}
                  className={`text-center p-4 rounded-lg border transition-all duration-200 ${
                    achievement.unlocked 
                      ? 'border-primary bg-primary/10' 
                      : 'border-border opacity-50'
                  }`}
                >
                  <achievement.icon className={`h-8 w-8 mx-auto mb-2 ${
                    achievement.unlocked ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                  <div className="font-medium text-foreground">{achievement.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {achievement.description}
                  </div>
                  {!achievement.unlocked && (
                    <div className="text-xs text-muted-foreground mt-2">
                      {achievement.pointsRequired} points needed
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadScoring; 