import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import { SectionTitle } from "../section-title";
import { CertificateTooltip } from "../education/certificate-tooltip";
import { LiaCertificateSolid } from "react-icons/lia";

export interface CertificateItem {
  id: string;
  title: string;
  description: string;
  src: string;
  fallbackName?: string;
}

interface AchievementsProps {
  certificates: CertificateItem[];
}

export function Achievements({ certificates }: AchievementsProps) {
  return (
    <section>
      <SectionTitle icon={Medal} title="Conquistas" />

      <ul className="space-y-4 mt-4">
        {certificates.map((cert) => (
          <li key={cert.id} className="text-neutral-950 dark:text-neutral-200">
            <p className="font-semibold">{cert.title}</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {cert.description}
            </p>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-4">
        {certificates.map((certificate) => (
          <CertificateTooltip key={certificate.id} images={[certificate.src]}>
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
