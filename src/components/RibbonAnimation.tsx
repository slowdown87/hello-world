import React, { useEffect, useRef, useState } from 'react';

interface RibbonAnimationProps {
  isActive: boolean;
  onAnimationEnd: () => void;
}

const RibbonAnimation: React.FC<RibbonAnimationProps> = ({ isActive, onAnimationEnd }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const duration = 8000; // 动画持续时间（毫秒）

  useEffect(() => {
    if (isActive) {
      startTimeRef.current = Date.now();
      animate();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive]);

  const animate = () => {
    if (!isActive) return;

    const elapsed = Date.now() - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);

    // 计算路径：使用正弦和余弦函数创建飘动效果
    const x = Math.sin(progress * Math.PI * 2) * (window.innerWidth / 2 - 100) + window.innerWidth / 2;
    const y = Math.cos(progress * Math.PI * 2) * (window.innerHeight / 2 - 100) + window.innerHeight / 2;
    
    // 计算旋转角度
    const rotate = Math.sin(progress * Math.PI * 4) * 30;
    
    // 计算缩放效果
    const scaleValue = 1 + Math.sin(progress * Math.PI * 2) * 0.2;

    setPosition({ x, y });
    setRotation(rotate);
    setScale(scaleValue);

    if (progress < 1) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      onAnimationEnd();
    }
  };

  if (!isActive) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 50,
      }}
    >
      <div
        className="text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500"
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
          whiteSpace: 'nowrap',
          textShadow: '0 0 10px rgba(99, 102, 241, 0.5)',
          animation: 'glow 2s ease-in-out infinite alternate',
        }}
      >
        Hello World!
      </div>
      <style>
        {`
          @keyframes glow {
            from {
              filter: drop-shadow(0 0 5px rgba(99, 102, 241, 0.5));
            }
            to {
              filter: drop-shadow(0 0 20px rgba(244, 63, 94, 0.8));
            }
          }
        `}
      </style>
    </div>
  );
};

export default RibbonAnimation;