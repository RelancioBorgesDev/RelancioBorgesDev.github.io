import { Badge } from "@/components/ui/badge";
import type { ElementType } from "react";

export type Langs = {
  icon: ElementType;
  lang: string;
};

interface CardFooterProps {
  title: string;
  categories: string[];
  year: string;
  langs: Langs[];
}

export function CardFooter({
  title,
  langs,
  year,
  categories,
}: CardFooterProps) {
  return (
    <footer className="flex max-sm:flex-col max-sm:gap-4 justify-between p-4 font-inter rounded-b-3xl bg-neutral-300/5">
      <div className="flex flex-col gap-1 max-sm:flex-row max-sm:justify-between">
        <h3 className="text-xl font-bold text-black dark:text-white">
          {title}
        </h3>
        <p className="text-neutral-600 dark:text-gray-300 text-sm mt-1 italic font-medium max-sm:text-end">
          {categories.join(" & ")}
        </p>
      </div>

      <div className="flex flex-col items-end gap-3 max-sm:flex-row-reverse max-sm:justify-between">
        <p className="text-neutral-600 dark:text-neutral-200 text-md items-end font-bold">
          {year}
        </p>
        <div className="flex flex-wrap gap-2 items-end justify-end">
          {langs.map(({ icon: Icon, lang }, index) => (
            <Badge
              key={index}
              variant="outline"
              className="hover:bg-primary/5 border-0 bg-neutral-400/20 dark:bg-neutral-600 text-neutral-600 dark:text-neutral-300 text-sm rounded-2xl inline-flex items-center gap-1"
            >
              <Icon />
              <span>{lang}</span>
            </Badge>
          ))}
        </div>
      </div>
    </footer>
  );
}
