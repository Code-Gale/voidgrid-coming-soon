import { useState } from 'react';
import { Calendar, CheckCircle, Circle, Clock, Zap, Rocket, Globe, Users } from 'lucide-react';

interface Milestone {
  id: string;
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  icon: React.ComponentType<{ className?: string }>;
  details: string[];
}

const InteractiveTimeline = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<string | null>(null);

  const milestones: Milestone[] = [
    {
      id: 'concept',
      title: 'Concept & Research',
      description: 'Initial idea and market research',
      date: 'Q3 2024',
      status: 'completed',
      icon: Zap,
      details: [
        'Market analysis completed',
        'Competitor research finished',
        'Technical architecture designed',
        'Team assembled'
      ]
    },
    {
      id: 'prototype',
      title: 'Prototype Development',
      description: 'Building the first working prototype',
      date: 'Q4 2024',
      status: 'completed',
      icon: Rocket,
      details: [
        'Core infrastructure built',
        'Basic deployment pipeline',
        'Dashboard prototype',
        'Performance testing'
      ]
    },
    {
      id: 'beta',
      title: 'Private Beta',
      description: 'Limited access for early users',
      date: 'Q1 2025',
      status: 'in-progress',
      icon: Users,
      details: [
        'Invite-only access',
        'Feedback collection',
        'Bug fixes and improvements',
        'Performance optimization'
      ]
    },
    {
      id: 'public-beta',
      title: 'Public Beta',
      description: 'Open access for all developers',
      date: 'Q2 2025',
      status: 'upcoming',
      icon: Globe,
      details: [
        'Public waitlist launch',
        'Free tier available',
        'Documentation release',
        'Community building'
      ]
    },
    {
      id: 'launch',
      title: 'Official Launch',
      description: 'Full platform release',
      date: 'Q3 2025',
      status: 'upcoming',
      icon: CheckCircle,
      details: [
        'All features available',
        'Paid plans launched',
        'Enterprise features',
        'Global availability'
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-6 w-6 text-green-400" />;
      case 'in-progress':
        return <Clock className="h-6 w-6 text-primary animate-pulse" />;
      case 'upcoming':
        return <Circle className="h-6 w-6 text-muted-foreground" />;
      default:
        return <Circle className="h-6 w-6 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-400 bg-green-400/10';
      case 'in-progress':
        return 'border-primary bg-primary/10';
      case 'upcoming':
        return 'border-border bg-background/50';
      default:
        return 'border-border bg-background/50';
    }
  };

  return (
    <div className="py-12 bg-background/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Roadmap
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow our journey as we build the future of hosting
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-8 top-6 w-4 h-4 rounded-full border-2 transform -translate-x-1/2 hidden md:block z-10">
                  {getStatusIcon(milestone.status)}
                </div>

                <div className="md:ml-16">
                  <div 
                    className={`glass-card p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedMilestone === milestone.id ? 'ring-2 ring-primary' : ''
                    } ${getStatusColor(milestone.status)}`}
                    onClick={() => setSelectedMilestone(
                      selectedMilestone === milestone.id ? null : milestone.id
                    )}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <milestone.icon className="h-6 w-6 text-primary mr-3" />
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{milestone.title}</h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {milestone.date}
                      </div>
                    </div>

                    {/* Expandable Details */}
                    {selectedMilestone === milestone.id && (
                      <div className="mt-4 pt-4 border-t border-border animate-in slide-in-from-top-2">
                        <h4 className="font-semibold text-foreground mb-2">What's included:</h4>
                        <ul className="space-y-1">
                          {milestone.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Summary */}
        <div className="mt-12 text-center">
          <div className="glass-card p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">Current Progress</h3>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">2</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1</div>
                <div className="text-sm text-muted-foreground">In Progress</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-muted-foreground">2</div>
                <div className="text-sm text-muted-foreground">Upcoming</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTimeline; 