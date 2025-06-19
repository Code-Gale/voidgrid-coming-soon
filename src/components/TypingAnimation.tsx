
import { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  const codeLines = [
    'git clone https://github.com/yourapp.git',
    'cd yourapp',
    'npm install',
    'git push voidgrid main',
    '✅ Deployed to https://yourapp.voidgrid.io'
  ];

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const line = codeLines[currentLine];
      if (currentChar < line.length) {
        const timer = setTimeout(() => {
          setDisplayText(prev => prev + line[currentChar]);
          setCurrentChar(prev => prev + 1);
        }, 50);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setDisplayText(prev => prev + '\n');
          setCurrentLine(prev => prev + 1);
          setCurrentChar(0);
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, [currentChar, currentLine, codeLines]);

  return (
    <div className="glass-card p-6 max-w-2xl mx-auto">
      <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
        <div className="flex items-center mb-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="ml-4 text-muted-foreground">Terminal</span>
        </div>
        <pre className="text-green-400 whitespace-pre-wrap">
          {displayText}
          <span className="animate-pulse">|</span>
        </pre>
      </div>
    </div>
  );
};

export default TypingAnimation;
