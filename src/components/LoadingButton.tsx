
import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface LoadingButtonProps {
  children: ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
}

const LoadingButton = ({ 
  children, 
  isLoading = false, 
  loadingText = 'Loading...', 
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  variant = 'default'
}: LoadingButtonProps) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={isLoading || disabled}
      variant={variant}
      className={`transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
        isLoading ? 'cursor-not-allowed' : ''
      } ${className}`}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {isLoading ? loadingText : children}
    </Button>
  );
};

export default LoadingButton;
