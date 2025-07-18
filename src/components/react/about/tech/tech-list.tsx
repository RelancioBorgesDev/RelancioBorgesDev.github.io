import type { JSX } from "react";
import { TechItem } from "./tech-item";

interface TechListProps {
  techs: { icon: JSX.Element; label: string }[];
}

export function TechList({ techs }: TechListProps) {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex flex-wrap  gap-2">
        {techs.map((tech, index) => (
          <TechItem
            key={`${tech.label}-${index}`}
            icon={tech.icon}
            label={tech.label}
          />
        ))}
      </div>
    </div>
  );
}
