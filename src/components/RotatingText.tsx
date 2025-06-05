import { useState, useEffect } from 'react';

interface RotatingTextProps {
  words: Array<{
    text: string;
    color: string;
  }>;
  interval?: number;
  className?: string;
}

export function RotatingText({ words, interval = 3000, className = '' }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  const currentWord = words[currentIndex];

  return (
    <span 
      className={`transition-all duration-500 ease-in-out ${currentWord.color} ${className}`}
      key={currentIndex}
    >
      {currentWord.text}
    </span>
  );
}