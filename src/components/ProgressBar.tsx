import { useState, useEffect } from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
  showPercentage?: boolean;
}

const ProgressBar = ({ current, total, label = "Progress", showPercentage = true }: ProgressBarProps) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const calculatedPercentage = Math.min((current / total) * 100, 100);
    setPercentage(calculatedPercentage);
  }, [current, total]);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{label}</span>
        {showPercentage && (
          <span className="text-sm text-muted-foreground">{Math.round(percentage)}%</span>
        )}
      </div>
      <div className="w-full bg-background/50 rounded-full h-2 border border-border overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between items-center mt-1">
        <span className="text-xs text-muted-foreground">{current} joined</span>
        <span className="text-xs text-muted-foreground">{total} spots</span>
      </div>
    </div>
  );
};

export default ProgressBar; 