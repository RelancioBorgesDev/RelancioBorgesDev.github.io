import { motion } from "framer-motion";

export function WavingHand() {
  return (
    <p className="text-lg text-gray-900 dark:text-neutral-200 mb-2">
      Olá{" "}
      <motion.span
        initial={{ rotate: 0 }}
        animate={{
          rotate: [0, 20, -10, 20, -5, 10, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1.5,
        }}
        className="inline-block origin-[70%_70%]"
      >
        👋
      </motion.span>
      , eu sou
    </p>
  );
}
