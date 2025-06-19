
import { useState } from 'react';
import { ChevronRight, Calendar, Code, Rocket, Users } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const InteractiveTimeline = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      icon: Calendar,
      title: 'Planning Phase',
      date: 'Q4 2024',
      description: 'Finalizing features, architecture design, and security audits.',
      completed: true
    },
    {
      icon: Code,
      title: 'Development',
      date: 'Q1 2025',
      description: 'Core platform development, testing, and optimization.',
      completed: false
    },
    {
      icon: Users,
      title: 'Beta Testing',
      date: 'Q2 2025',
      description: 'Limited beta release with selected developers and feedback collection.',
      completed: false
    },
    {
      icon: Rocket,
      title: 'Public Launch',
      date: 'Q3 2025',
      description: 'Full public launch with all features and pricing plans.',
      completed: false
    }
  ];

  return (
    <section className="py-20 border-t border-border" aria-label="Roadmap Timeline">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Our Journey to Launch
          </h2>
        </AnimatedSection>
        <div className="space-y-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`glass-card p-6 cursor-pointer transition-all duration-300 ${
                activePhase === index ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setActivePhase(index)}
            >
              <div className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full mr-4 ${
                  phase.completed ? 'bg-green-500/20 text-green-400' : 'bg-primary/20 text-primary'
                }`}>
                  <phase.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">{phase.title}</h3>
                    <span className="text-sm text-muted-foreground">{phase.date}</span>
                  </div>
                  {activePhase === index && (
                    <p className="text-muted-foreground mt-2">{phase.description}</p>
                  )}
                </div>
                <ChevronRight className={`h-5 w-5 text-muted-foreground transition-transform ${
                  activePhase === index ? 'rotate-90' : ''
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;
