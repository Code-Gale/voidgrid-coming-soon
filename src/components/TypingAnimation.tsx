import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypingAnimationProps {
  phrases?: string[];
  speed?: number;
  delay?: number;
  className?: string;
  cursor?: boolean;
}

const TypingAnimation = ({ 
  phrases = [
    "Deploy your app in seconds...",
    "Scale to millions of users...",
    "Built for developers...",
    "The future of hosting..."
  ], 
  speed = 50, 
  delay = 0, 
  className,
  cursor = true 
}: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = phrases[currentPhraseIndex] || '';

  useEffect(() => {
    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (delay > 0) {
      const delayTimer = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayedText('');
        setIsDeleting(false);
      }, delay);
      return () => clearTimeout(delayTimer);
    } else {
      setCurrentIndex(0);
      setDisplayedText('');
      setIsDeleting(false);
    }
  }, [delay]);

  useEffect(() => {
    if (!currentPhrase) return;

    let timer: NodeJS.Timeout;

    if (isDeleting) {
      // Deleting text
      if (currentIndex > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        }, speed / 2);
      } else {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setCurrentIndex(0);
        setDisplayedText('');
      }
    } else {
      // Typing text
      if (currentIndex < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, speed);
      } else {
        // Finished typing, wait then start deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Wait 2 seconds before deleting
      }
    }

    return () => clearTimeout(timer);
  }, [currentIndex, currentPhrase, speed, isDeleting, phrases.length]);

  return (
    <span className={cn("inline-block", className)}>
      {displayedText}
      {cursor && showCursor && (
        <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
      )}
    </span>
  );
};

export default TypingAnimation; 