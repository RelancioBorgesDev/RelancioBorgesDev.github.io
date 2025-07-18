import type { ReactNode } from "react";

interface TechItemProps {
  icon: ReactNode;
  label: string;
}

export function TechItem({ icon, label }: TechItemProps) {
  return (
    <div className="w-fit flex items-center gap-2 p-3 bg-neutral-200 rounded-lg hover:bg-neutral-300 transition-colors cursor-pointer border whitespace-nowrap">
      {icon}
      <span className="text-sm font-medium text-gray-900">{label}</span>
    </div>
  );
}
