import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

interface LinkProps extends ComponentProps<"a"> {
  children: ReactNode;
}

export function Link({ href, className, children }: LinkProps) {
  return (
    <a className={cn(className)} href={href}>
      {children}
    </a>
  );
}
