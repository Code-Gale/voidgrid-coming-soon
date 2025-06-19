
import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="text-center glass-card p-8 hover:glow-effect transition-all duration-500 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 group hover:scale-105 hover:-translate-y-2 cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative mb-4 mx-auto w-fit">
        <Icon className="h-12 w-12 text-primary mx-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
