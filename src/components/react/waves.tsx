import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const WaveTechBackground = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(40)].map((_, i) => {
        const width = Math.random() * 3 + 1;
        const height = Math.random() * 3 + 1;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const opacity = Math.random() * 0.5 + 0.1;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-zinc-950 dark:bg-white"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              left: `${left}%`,
              top: `${top}%`,
              opacity: opacity,
            }}
            animate={{
              y: [0, -20, 0, -10, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};
