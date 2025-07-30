"use client";

import { useState } from "react";
import { Filters } from "./filters";
import { TextType } from "@/components/react/react-bits/text-type";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCard, type Project } from "./project-card";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<"All" | string>(
    "All"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(4);

  const filteredProjects = projects.filter(
    (p) => selectedCategory === "All" || p.categories.includes(selectedCategory)
  );

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div>
      {/* Título + Filtros */}
      <motion.div
        className="flex items-center justify-between gap-6 mb-10 max-lg:flex-col"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>
          <TextType
            text={"Meus Projetos."}
            className="text-5xl font-bold font-permanent text-neutral-950 text-center"
          />
        </h1>
        <div className="flex flex-col md:flex-row items-center">
          <Filters
            onChangeCategory={(cat) => {
              setSelectedCategory(cat);
              setCurrentPage(1);
            }}
          />
        </div>
      </motion.div>

      {/* Lista de projetos com animação */}
      <motion.div
        className="grid md:grid-cols-2 gap-12"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
          {paginatedProjects.map((project) => (
            <motion.a
              key={project.slug}
              href={`/projects/${project.slug}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard project={project} />
            </motion.a>
          ))}
      </motion.div>

      {/* Paginação */}
      <motion.footer
        className="flex flex-row justify-between items-center mt-12 max-sm:flex-col max-sm:gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <label
            htmlFor="perPageSelect"
            className="text-sm text-neutral-600 dark:text-neutral-300"
          >
            Por página:
          </label>
          <select
            id="perPageSelect"
            className="border rounded px-2 py-1 text-sm bg-neutral-200 dark:bg-neutral-950 dark:text-neutral-200 text-neutral-950"
            value={projectsPerPage}
            onChange={(e) => {
              setProjectsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={2}>2</option>
            <option value={4}>4</option>
            <option value={6}>6</option>
            <option value={8}>8</option>
            <option value={10}>10</option>
          </select>
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`cursor-pointer text-neutral-950 dark:text-neutral-200 
        ${
          currentPage === 1
            ? "bg-neutral-100 dark:bg-neutral-800 opacity-50 cursor-not-allowed"
            : "bg-neutral-200 dark:bg-neutral-950 hover:bg-neutral-300 dark:hover:bg-neutral-800 transition"
        }`}
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
              className={`cursor-pointer text-neutral-950 dark:text-neutral-200 
        ${
          currentPage === totalPages
            ? "bg-neutral-100 dark:bg-neutral-800 opacity-50 cursor-not-allowed"
            : "bg-neutral-200 dark:bg-neutral-950 hover:bg-neutral-300 dark:hover:bg-neutral-800 transition"
        }`}
            >
              Próxima
              <ChevronRight />
            </Button>
          </div>
        )}
      </motion.footer>
    </div>
  );
}
