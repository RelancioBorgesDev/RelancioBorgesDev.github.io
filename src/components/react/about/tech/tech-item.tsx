import type { ReactNode } from "react";

interface TechItemProps {
  icon: ReactNode;
  label: string;
}

export function TechItem({ icon, label }: TechItemProps) {
  return (
    <div className="w-fit flex items-center gap-2 p-3 dark:bg-neutral-200 bg-neutral-500/10 hover:bg-neutral-300 rounded-lg transition-colors cursor-pointer border whitespace-nowrap">
      {icon}
      <span className="text-sm font-medium text-gray-900">{label}</span>
    </div>
  );
}
