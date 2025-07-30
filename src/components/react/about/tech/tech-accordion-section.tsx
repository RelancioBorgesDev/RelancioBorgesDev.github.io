import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import type { ElementType, JSX } from "react";
import { TechList } from "./tech-list";
import { CertificateTooltip } from "../education/certificate-tooltip";
import { Button } from "@/components/ui/button";
import { LiaCertificateSolid } from "react-icons/lia";

interface Certificate {
  label: string;
  images: string[];
  certType: string;
}

interface AccordionSectionProps {
  triggerIcon: ElementType;
  value: string;
  title: string;
  description: string;
  techs: { icon: JSX.Element; label: string }[];
  certificates?: Certificate[];
}

export function TechAccordionSection({
  value,
  triggerIcon: Icon,
  title,
  description,
  techs,
  certificates = [],
}: AccordionSectionProps) {
  return (
    <AccordionItem
      value={value}
      className="cursor-pointer dark:bg-neutral-600/50 bg-neutral-300/50 px-2 rounded-lg"
    >
      <AccordionTrigger className="text-left border-0 rounded-t-lg rounded-b-none  hover:no-underline py-4 flex cursor-pointer  ">
        <div className="flex items-center gap-3 text-neutral-950 dark:text-neutral-200">
          <span className="relative flex items-center justify-center p-2 rounded-full bg-neutral-900 dark:bg-neutral-200 text-neutral-200 dark:text-neutral-950">
            <Icon class="text-neutral-200 dark:text-neutral-950" />
          </span>
          <h2 className="text-neutral-950 dark:text-neutral-200 font-bold">
            {title}
          </h2>
        </div>
      </AccordionTrigger>

      <AccordionContent className="p-3 shadow-sm">
        <div className="space-y-4">
          <p className="text-neutral-950 dark:text-neutral-200 text-sm leading-relaxed">
            {description}
          </p>

          <TechList techs={techs} />

          {certificates.length > 0 && (
            <div className="flex flex-wrap justify-end gap-2">
              {certificates.map((certificate, index) => (
                <CertificateTooltip
                  key={index}
                  label={certificate.label}
                  images={certificate.images}
                  certType={certificate.certType}
                >
                  <Button
                    size="sm"
                    variant="secondary"
                    className="flex cursor-pointer items-center gap-2 rounded-full transition dark:bg-neutral-500/50 text-neutral-950 dark:text-neutral-200"
                  >
                    <LiaCertificateSolid
                      size={18}
                      className="text-blue-950 dark:text-blue-200"
                    />
                    {certificate.label}
                  </Button>
                </CertificateTooltip>
              ))}
            </div>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
