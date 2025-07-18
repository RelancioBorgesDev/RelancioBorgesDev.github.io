import React, { type ElementType, type ReactNode } from "react";

interface TechItemProps {
  icon: ReactNode;
  color: string;
  name: string;
}

export function TechItem({ icon, color, name }: TechItemProps) {
  return (
    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200 whitespace-nowrap">
      {icon}
      <span className="text-sm font-medium text-gray-900">{name}</span>
    </div>
  );
}
