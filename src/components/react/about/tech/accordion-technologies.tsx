import { Accordion } from "@/components/ui/accordion";
import { TechAccordionSection } from "./tech-accordion-section";
import {
  frontendTechs,
  backendTechs,
  devOpsTechs,
  toolsTechs,
} from "@/utils/techs";
import { Container, Proportions, Server, ToolCase } from "lucide-react";

import { frontendCerts, backendCerts, devOpsCerts } from "@/utils/certificates";

export function AccordionTechnologies() {
  return (
    <Accordion
      type="single"
      collapsible
      className="cursor-pointer flex flex-col gap-3"
    >
      <TechAccordionSection
        value="frontend"
        triggerIcon={Proportions}
        title="Front-End"
        description="Experiência na criação de interfaces modernas, responsivas e acessíveis, sempre com foco em performance e experiência do usuário. Trabalho com arquiteturas baseadas em componentes, gerenciamento de estado e boas práticas de estilização."
        techs={frontendTechs}
        certificates={[
          {
            label: "Certificados",
            certType: "Front-End",
            images: frontendCerts,
          },
        ]}
      />

      <TechAccordionSection
        value="backend"
        triggerIcon={Server}
        title="Back-End"
        description="Atuação no desenvolvimento de sistemas robustos e escaláveis, incluindo APIs RESTful, otimização de banco de dados e comunicação em tempo real. Priorizo código limpo, arquitetura bem definida e soluções seguras."
        techs={backendTechs}
        certificates={[
          {
            label: "Certificados",
            certType: "Back-End",
            images: backendCerts,
          },
        ]}
      />

      <TechAccordionSection
        value="devops"
        triggerIcon={Container}
        title="DevOps"
        description="Experiência em automação e infraestrutura como código, utilizando containers, pipelines de CI/CD e monitoramento de aplicações. Busco garantir entregas rápidas, confiáveis e ambientes preparados para escalar."
        techs={devOpsTechs}
        certificates={[
          {
            label: "Certificados",
            certType: "DevOps",
            images: devOpsCerts,
          },
        ]}
      />

      <TechAccordionSection
        value="tools"
        triggerIcon={ToolCase}
        title="Ferramentas"
        description="Ferramentas e plataformas que utilizo ou já utilizei, as quais facilitam e agilizam os fluxos de trabalho, aumentam a produtividade e asseguram qualidade em todas as etapas do desenvolvimento."
        techs={toolsTechs}
      />
    </Accordion>
  );
}
