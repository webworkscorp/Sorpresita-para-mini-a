
import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const FloatingHearts: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [hearts, setHearts] = useState<any[]>([]);

  useEffect(() => {
    // Initial batch
    const initialHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: Math.random(),
      left: `${Math.random() * 100}%`,
      duration: `${10 + Math.random() * 20}s`,
      size: 8 + Math.random() * 24,
      opacity: 0.1 + Math.random() * 0.2,
      delay: `${-Math.random() * 20}s`
    }));
    setHearts(initialHearts);

    const interval = setInterval(() => {
      setHearts(prev => [
        ...prev.slice(-40),
        {
          id: Math.random(),
          left: `${Math.random() * 100}%`,
          duration: `${15 + Math.random() * 15}s`,
          size: 10 + Math.random() * 20,
          opacity: 0.1 + Math.random() * 0.2,
          delay: '0s'
        }
      ]);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}>
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="heart-particle text-rose-200"
          style={{
            left: heart.left,
            animationDuration: heart.duration,
            animationDelay: heart.delay,
            fontSize: `${heart.size}px`,
            '--target-opacity': heart.opacity
          } as React.CSSProperties}
        >
          <Heart fill="currentColor" size={heart.size} />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
