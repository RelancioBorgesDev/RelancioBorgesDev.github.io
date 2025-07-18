import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TechScrollWrapper } from "./tech-scroll-wrapper";

interface TechAccordionSectionProps {
  value: string;
  title: string;
  description: string;
  children: React.ReactNode;
  scrollDirection?: "left" | "right";
}

export function TechAccordionSection({
  value,
  title,
  description,
  children,
  scrollDirection = "left",
}: TechAccordionSectionProps) {
  return (
    <AccordionItem value={value} className="border-b border-gray-200 w-full">
      <AccordionTrigger>
        <button className="w-full text-left py-4 text-gray-900 font-medium hover:no-underline">
          {title}
        </button>
      </AccordionTrigger>
      <AccordionContent className="pb-4">
        <div className="space-y-4">
          <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
          <TechScrollWrapper direction={scrollDirection}>
            {children}
          </TechScrollWrapper>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
