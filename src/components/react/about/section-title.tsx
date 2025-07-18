import { type ComponentProps, type ElementType } from "react";

interface SectionTitleProps extends ComponentProps<"div"> {
  icon: ElementType;
  title: string;
}

export function SectionTitle({
  icon: Icon,
  title,
  ...props
}: SectionTitleProps) {
  return (
    <div className="flex  gap-2" {...props}>
      <Icon className="w-5 h-5 text-gray-500" />
      <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">
        {title}
      </h2>
    </div>
  );
}
