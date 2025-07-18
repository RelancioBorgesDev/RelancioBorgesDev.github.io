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
    <AccordionItem value={value} className="border-b border-gray-200">
      <AccordionTrigger className="text-left hover:no-underline py-4 flex cursor-pointer bg-neutral-300/50 px-2 rounded-t-lg">
        <div className="flex items-center gap-3 text-gray-900">
          <span>
            <Icon />
          </span>
          <h2 className="text-gray-900 font-bold">{title}</h2>
        </div>
      </AccordionTrigger>

      <AccordionContent className="p-3 bg-neutral-50 rounded-md border border-neutral-200 shadow-sm">
        <div className="space-y-4">
          {/* Descrição */}
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

          {/* Lista de tecnologias */}
          <TechList techs={techs} />

          {/* Botões de certificados */}
          {certificates.length > 0 && (
            <div className="flex flex-wrap justify-end gap-2">
              {certificates.map((certificate, index) => (
                <CertificateTooltip
                  key={index}
                  label={certificate.label}
                  images={certificate.images}
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex cursor-pointer items-center gap-2 rounded-full border-blue-500 text-blue-500 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    <LiaCertificateSolid size={18} />
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
