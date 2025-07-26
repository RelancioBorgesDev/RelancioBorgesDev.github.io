// components/react/projects/project-section.tsx
"use client";

import { useState } from "react";
import { Filters } from "./filters";
import { TextType } from "@/components/react/react-bits/text-type";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCard, type Project } from "./project-card";

const PROJECTS_PER_PAGE = 4;

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<"All" | string>(
    "All"
  );
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = projects.filter(
    (p) => selectedCategory === "All" || p.categories.includes(selectedCategory)
  );

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div>
      <div className="flex items-center justify-between gap-6 mb-10 max-lg:flex-col">
        <h1>
          <TextType
            text={"Meus Projetos."}
            className="text-5xl font-bold font-permanent text-neutral-950 text-center"
          />
        </h1>
        <Filters
          onChangeCategory={(cat) => {
            setSelectedCategory(cat);
            setCurrentPage(1);
          }}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {paginatedProjects.map((project, index) => (
          <a key={project.slug} href={`/projects/${project.slug}`}>
            <ProjectCard project={project} />
          </a>
        ))}
      </div>

      {totalPages > 1 && (
        <footer className="flex flex-row justify-between items-center mt-12 max-sm:flex-col max-sm:gap-4">
          <div className="text-muted-foreground text-sm">
            Exibindo {paginatedProjects.length} de {filteredProjects.length}{" "}
            projetos
          </div>
          <div className="flex justify-center items-center gap-4">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="cursor-pointer text-neutral-950 dark:text-neutral-200"
            >
              <ChevronLeft />
              Anterior
            </Button>

            <div className="text-sm font-medium text-muted-foreground">
              Página {currentPage} de {totalPages}
            </div>

            <Button
              variant="outline"
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="cursor-pointer text-neutral-950 dark:text-neutral-200"
            >
              Próxima
              <ChevronRight />
            </Button>
          </div>
        </footer>
      )}
    </div>
  );
}
