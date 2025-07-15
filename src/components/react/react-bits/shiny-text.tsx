import React from "react";
import { cn } from "@/lib/utils"; // assuming you use shadcn or created your own cn helper

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 3,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "text-[#b5b5b5e8] dark:text-[#b5b5b5e8] bg-clip-text font-bold inline-block",
        !disabled && "animate-[var(--animate-shine)]",
        className
      )}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.651) 50%, rgba(255, 255, 255, 0) 60%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        ["--animate-shine" as any]: `shine ${speed}s linear infinite`,
      }}
    >
      {text}
    </div>
  );
};
