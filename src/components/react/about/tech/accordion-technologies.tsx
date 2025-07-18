import { Accordion } from "@/components/ui/accordion";
import { TechAccordionSection } from "./tech-accordion-section";
import {
  frontendTechs,
  backendTechs,
  devOpsTechs,
  toolsTechs,
} from "@/utils/techs";
import { Container, Proportions, Server, ToolCase } from "lucide-react";

// Importa certificados (mock)
import certificadoFrontend from "@/assets/certificados/certificado0.png";
import certificadoBackend from "@/assets/certificados/certificado1.png";
import certificadoDevOps from "@/assets/certificados/certificado10.png";

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
        title="Frontend"
        description="I specialize in creating modern, responsive user interfaces with a focus on performance and user experience. My expertise spans from component-based architectures to state management and styling solutions."
        techs={frontendTechs}
        certificates={[
          {
            label: "Certificados Frontend",
            images: [certificadoFrontend.src],
          },
        ]}
      />

      <TechAccordionSection
        value="backend"
        triggerIcon={Server}
        title="Backend"
        description="I excel at designing and building robust, scalable backend systems, from RESTful APIs to real-time communication and database optimization."
        techs={backendTechs}
        certificates={[
          {
            label: "Certificados Backend",
            images: [certificadoBackend.src, certificadoDevOps.src],
          },
        ]}
      />

      <TechAccordionSection
        value="devops"
        triggerIcon={Container}
        title="DevOps"
        description="I have experience with containerization, CI/CD pipelines, infrastructure as code, and monitoring tools to ensure reliable deployments."
        techs={devOpsTechs}
        certificates={[
          {
            label: "Certificados DevOps",
            images: [certificadoDevOps.src],
          },
        ]}
      />

      <TechAccordionSection
        value="tools"
        triggerIcon={ToolCase}
        title="Ferramentas"
        description="These are the tools and platforms I use daily to streamline development workflows, improve productivity, and ensure project quality."
        techs={toolsTechs}
      />
    </Accordion>
  );
}
