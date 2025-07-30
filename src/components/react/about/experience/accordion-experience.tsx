import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../ui/accordion";
import { cn } from "@/lib/utils";
import { AvatarProfile } from "../../avatar-profile";

export type AccordionItemType = {
  value: string;
  position?: string;
  company?: string;
  companyDescription?: string;
  workContent?: string;
  src: string;
  fallbackName?: string;
};

interface AccordionExperienceProps {
  type?: "single" | "multiple";
  collapsible?: boolean;
  className?: string;
  items: AccordionItemType[];
}

export const AccordionExperience: React.FC<AccordionExperienceProps> = ({
  type = "single",
  collapsible = true,
  className = "",
  items,
}) => {
  return (
    <Accordion
      type={type}
      collapsible={collapsible}
      className={cn("cursor-pointer flex flex-col gap-2", className)}
    >
      {items.map(
        ({
          position,
          value,
          src,
          fallbackName,
          company,
          companyDescription,
          workContent,
        }) => (
          <AccordionItem
            key={value}
            value={value}
            className="cursor-pointer dark:bg-neutral-600/50 bg-neutral-300/50 px-2 rounded-lg"
          >
            <AccordionTrigger className="cursor-pointer flex hover:no-underline ">
              <div className="flex items-center gap-3">
                <AvatarProfile src={src} fallbackName={fallbackName!} />
                <div>
                  <h1 className="font-bold text-sm text-neutral-950 dark:text-neutral-200">
                    {position}
                  </h1>
                  <h3 className="font-medium text-sm text-neutral-950 dark:text-neutral-200">
                    {company}
                  </h3>
                  <p className="text-xs text-neutral-950 dark:text-neutral-200/80">
                    {companyDescription}
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-neutral-950 dark:text-neutral-200 px-3 py-2 border-t-2">
              <ul className="list-disc pl-5 space-y-2 text-sm">
                {workContent!
                  .split("•")
                  .map(
                    (item, index) =>
                      item.trim() && <li key={index}>{item.trim()}</li>
                  )}
              </ul>
            </AccordionContent>
          </AccordionItem>
        )
      )}
    </Accordion>
  );
};
