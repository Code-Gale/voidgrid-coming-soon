
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const DashboardPreview = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      <div className="relative max-w-4xl mx-auto">
        <div className="glass-card p-4 rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
            alt="VoidGrid Dashboard Preview"
            className="w-full h-auto rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
        </div>
        
        {/* Floating elements for visual appeal */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-sm animate-pulse" />
        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default DashboardPreview;
