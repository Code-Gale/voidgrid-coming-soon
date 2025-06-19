
import { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to 30 days from now (you can adjust this)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-6 animate-fade-in-up">
      <h3 className="text-xl font-semibold text-primary animate-pulse-slow">
        Launching In
      </h3>
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="countdown-digit animate-scale-in" style={{ animationDelay: '0.1s' }}>
          <div className="text-2xl md:text-3xl font-bold text-foreground animate-bounce-slow">
            {timeLeft.days.toString().padStart(2, '0')}
          </div>
          <div className="text-xs text-muted-foreground font-medium">DAYS</div>
        </div>
        <div className="countdown-digit animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="text-2xl md:text-3xl font-bold text-foreground animate-bounce-slow">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="text-xs text-muted-foreground font-medium">HOURS</div>
        </div>
        <div className="countdown-digit animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <div className="text-2xl md:text-3xl font-bold text-foreground animate-bounce-slow">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-xs text-muted-foreground font-medium">MINS</div>
        </div>
        <div className="countdown-digit animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-2xl md:text-3xl font-bold text-foreground animate-bounce-slow">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-xs text-muted-foreground font-medium">SECS</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
