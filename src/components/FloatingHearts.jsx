import React, { useState } from 'react';

const generateHearts = () =>
  Array.from({ length: 18 }).map((_, i) => ({
    id: i,
    left: Math.random() * 94 + 3,
    size: Math.random() * 16 + 14,
    duration: Math.random() * 8 + 9,
    delay: Math.random() * 8,
    opacity: Math.random() * 0.35 + 0.25,
    type: i % 4 === 0 ? '✨' : i % 3 === 0 ? '🌸' : i % 2 === 0 ? '💖' : '🤍',
  }));

const FloatingHearts = () => {
  const [elements] = useState(generateHearts);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((item) => (
        <span
          key={item.id}
          className="absolute select-none"
          style={{
            left: `${item.left}%`,
            bottom: '-40px',
            fontSize: `${item.size}px`,
            opacity: item.opacity,
            animation: `driftUp ${item.duration}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
            animationDelay: `${item.delay}s`,
            filter: 'drop-shadow(0 2px 4px rgba(255, 180, 200, 0.3))',
          }}
        >
          {item.type}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
