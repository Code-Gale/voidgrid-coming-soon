
import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface LoadingButtonProps {
  children: ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const LoadingButton = ({ 
  children, 
  isLoading = false, 
  loadingText = 'Loading...', 
  type = 'button',
  className = '',
  disabled = false,
  onClick
}: LoadingButtonProps) => {
  return (
    <Button
      type={type}
      disabled={isLoading || disabled}
      className={className}
      onClick={onClick}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </Button>
  );
};

export default LoadingButton;
