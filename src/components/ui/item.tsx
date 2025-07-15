import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

interface LinkProps extends ComponentProps<"li"> {
  children: ReactNode;
}

export function Item({ className, children }: LinkProps) {
  return (
    <li
      className={cn(
        "font-semibold text-lg dark:text-white text-black hover:brightness-50 transition all ease-in-out",
        className
      )}
    >
      {children}
    </li>
  );
}
