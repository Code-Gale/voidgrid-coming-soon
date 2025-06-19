import { useState, useEffect } from 'react';
import { Menu, X, Home, Settings, User, LogOut, ChevronLeft, ChevronRight } from 'lucide-react';

interface MobileEnhancementsProps {
  children: React.ReactNode;
}

const MobileEnhancements = ({ children }: MobileEnhancementsProps) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navigationItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'Features', icon: Settings, href: '#features' },
    { name: 'Pricing', icon: User, href: '#pricing' },
    { name: 'Contact', icon: User, href: '#contact' },
  ];

  return (
    <>
      {/* Mobile Navigation Drawer */}
      {isMobile && (
        <>
          {/* Drawer Overlay */}
          {isDrawerOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setDrawerOpen(false)}
            />
          )}

          {/* Drawer */}
          <div className={`fixed top-0 left-0 h-full w-64 bg-background/95 backdrop-blur-lg border-r border-border transform transition-transform duration-300 z-50 md:hidden ${
            isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <div className="p-4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-foreground">VoidGrid</h2>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 rounded-lg hover:bg-background/50 transition-colors"
                >
                  <X className="h-5 w-5 text-foreground" />
                </button>
              </div>

              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center p-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200"
                    onClick={() => setDrawerOpen(false)}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </a>
                ))}
              </nav>

              <div className="absolute bottom-4 left-4 right-4">
                <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-4 rounded-lg transition-all duration-200">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="fixed top-4 left-4 z-30 p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border md:hidden"
          >
            <Menu className="h-5 w-5 text-foreground" />
          </button>
        </>
      )}

      {/* Touch-Friendly Buttons */}
      <div className="md:hidden">
        {/* Floating Action Button */}
        <button className="fixed bottom-6 right-6 w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg flex items-center justify-center transition-all duration-200 active:scale-95">
          <span className="text-lg">+</span>
        </button>

        {/* Swipe Indicators */}
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <div className="w-2 h-2 bg-muted-foreground/30 rounded-full"></div>
          <div className="w-2 h-2 bg-muted-foreground/30 rounded-full"></div>
        </div>
      </div>

      {/* Mobile-Optimized Content */}
      <div className="md:hidden">
        {children}
      </div>

      {/* Desktop Content */}
      <div className="hidden md:block">
        {children}
      </div>
    </>
  );
};

// Mobile-specific components
export const MobileCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`glass-card p-4 mx-4 mb-4 ${className}`}>
    {children}
  </div>
);

export const MobileButton = ({ children, onClick, variant = 'primary' }: { 
  children: React.ReactNode; 
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
}) => {
  const baseClasses = "w-full py-4 px-6 rounded-lg font-medium transition-all duration-200 active:scale-95 touch-manipulation";
  
  const variantClasses = {
    primary: "bg-primary hover:bg-primary/90 text-primary-foreground",
    secondary: "bg-secondary hover:bg-secondary/80 text-secondary-foreground",
    outline: "border border-border hover:bg-background/50 text-foreground"
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const MobileSwipeable = ({ children, onSwipeLeft, onSwipeRight }: {
  children: React.ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}) => {
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const diff = startX - currentX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && onSwipeLeft) {
        onSwipeLeft();
      } else if (diff < 0 && onSwipeRight) {
        onSwipeRight();
      }
    }

    setStartX(0);
    setCurrentX(0);
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="touch-pan-y"
    >
      {children}
    </div>
  );
};

export default MobileEnhancements; 