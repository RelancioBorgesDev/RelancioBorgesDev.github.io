import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Medal } from "lucide-react";
import { FcDiploma1 } from "react-icons/fc";
import { SectionTitle } from "../section-title";
import { CertificateTooltip } from "../education/certificate-tooltip";
import type { AccordionItemType } from "../experience/accordion-experience";
import { LiaCertificateSolid } from "react-icons/lia";

const experienceItems: AccordionItemType[] = [
  {
    value: "cert1",
    src: "a.png",
  },
];

interface AchievementsProps {
  certificates: AccordionItemType[];
}

export function Achievements({ certificates }: AchievementsProps) {
  return (
    <section>
      <SectionTitle icon={Medal} title="Conquistas" />
      <ul className="space-y-2">
        <li className="text-neutral-950 dark:text-neutral-200">
          🏅 Prêmio Desenvolvedor do Ano - 2024
        </li>
        <li className="text-neutral-950 dark:text-neutral-200">
          🥇 Hackathon Nacional - 1º Lugar
        </li>
      </ul>

      <div className="flex flex-wrap gap-2 mt-2">
        {certificates.map((certificate, index) => (
          <CertificateTooltip key={index} images={[certificate.src]}>
            <Button
              size="sm"
              variant="secondary"
              className="flex cursor-pointer items-center gap-2 rounded-full transition dark:bg-neutral-500/50 text-neutral-950 dark:text-neutral-200"
            >
              <LiaCertificateSolid
                size={18}
                className="text-blue-950 dark:text-blue-200"
              />
              {certificate.fallbackName ?? "Certificado"}
            </Button>
          </CertificateTooltip>
        ))}
      </div>
    </section>
  );
}
