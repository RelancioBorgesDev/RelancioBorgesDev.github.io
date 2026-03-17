import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const WaveTechBackground = () => {
  const [isClient, setIsClient] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsDark(document.documentElement.classList.contains('dark'));
    
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  if (!isClient) return null;
  
  const starColor = isDark ? '#ffffff' : '#525252';
  const starGlow = isDark ? 'rgba(255,255,255,0.9)' : 'rgba(82,82,82,0.6)';
  
  const stars = [...Array(60)].map((_, i) => {
    const size = Math.random() * 2.5 + 1;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const duration = 3 + Math.random() * 4;
    const delay = Math.random() * 5;
    
    return { i, size, left, top, duration, delay };
  });

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {stars.map(({ i, size, left, top, duration, delay }) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            top: `${top}%`,
            backgroundColor: starColor,
            boxShadow: `0 0 ${size * 3}px ${starGlow}`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.9, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
