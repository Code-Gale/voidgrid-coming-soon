
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Skeleton } from '@/components/ui/skeleton';

const DashboardPreview = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { elementRef, isVisible } = useScrollAnimation({ 
    threshold: 0.2, 
    triggerOnce: true 
  });

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div 
      ref={elementRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="relative group cursor-pointer overflow-hidden rounded-xl">
        {!imageLoaded && (
          <Skeleton className="w-full h-[400px] md:h-[500px] animate-pulse" />
        )}
        
        {imageError ? (
          <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-br from-primary/20 to-green-500/20 rounded-xl border border-primary/20 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="text-6xl">🚀</div>
              <h3 className="text-xl font-semibold text-foreground">Dashboard Preview</h3>
              <p className="text-muted-foreground">Coming Soon</p>
            </div>
          </div>
        ) : (
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&crop=center"
            alt="VoidGrid Dashboard Preview - Modern hosting control panel interface"
            className={`w-full h-auto max-w-[800px] mx-auto rounded-xl border border-primary/20 transition-all duration-700 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary/25 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
          />
        )}
        
        {imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
        )}
      </div>
    </div>
  );
};

export default DashboardPreview;
