import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../ui/accordion";
import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import { AvatarProfile } from "../../avatar-profile";

type AccordionItemType = {
  value: string;
  title: string;
  content: string;
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
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="cursor-pointer bg-neutral-300/50 px-2 rounded-lg"
        >
          <AccordionTrigger className="cursor-pointer flex hover:no-underline ">
            <div className="flex items-center gap-3">
              <AvatarProfile src="" fallbackName="RB" />
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-xs">
                  Tech Corp Solutions | Set 2020 - Dez 2025
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
