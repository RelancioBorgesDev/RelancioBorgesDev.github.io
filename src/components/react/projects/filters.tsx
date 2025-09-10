import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandInput,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { MultiSelectFilter } from "./multiselect-filters";
import type { Project } from "./project-card";

type FiltersProps = {
  onChangeFilters: (filters: { topics: string[]; languages: string[] }) => void;
  projects: Project[];
};

export function Filters({ onChangeFilters, projects }: FiltersProps) {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  // Extrair tópicos únicos dos projetos reais
  const topics = React.useMemo(() => {
    const allTopics = projects.flatMap((project) => project.categories || []);
    return [...new Set(allTopics)].sort();
  }, [projects]);

  // Extrair linguagens únicas dos projetos reais
  const languages = React.useMemo(() => {
    const allLanguages = projects.flatMap(
      (project) => project.langs?.map((lang) => lang.lang) || []
    );
    return [...new Set(allLanguages)].sort();
  }, [projects]);

  useEffect(() => {
    onChangeFilters({
      topics: selectedTopics,
      languages: selectedLanguages,
    });
  }, [selectedTopics, selectedLanguages, onChangeFilters]);

  const clearAllFilters = () => {
    setSelectedTopics([]);
    setSelectedLanguages([]);
  };

  const hasActiveFilters =
    selectedTopics.length > 0 || selectedLanguages.length > 0;

  return (
    <div className="p-8 space-y-6 max-lg:p-2 max-sm:w-full">
      <div className="flex gap-4 max-sm:flex-col">
        <MultiSelectFilter
          label="Tópicos"
          placeholder="Filtrar por tópico"
          options={topics}
          selected={selectedTopics}
          setSelected={setSelectedTopics}
        />
        <MultiSelectFilter
          label="Linguagens/Ferramentas"
          placeholder="Filtrar por linguagem/ferramenta"
          options={languages}
          selected={selectedLanguages}
          setSelected={setSelectedLanguages}
        />

        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="flex items-center gap-2 cursor-pointer text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors underline"
          >
            Limpar filtros
            <X size={12} />
          </button>
        )}
      </div>

      {/* Mostrar filtros ativos */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {selectedTopics.map((topic) => (
            <Badge
              key={topic}
              variant="secondary"
              className="flex items-center gap-1"
            >
              {topic}
              <button
                onClick={() =>
                  setSelectedTopics((prev) => prev.filter((t) => t !== topic))
                }
                className="hover:bg-neutral-300 dark:hover:bg-neutral-600 rounded-full p-1"
              >
                <X size={12} />
              </button>
            </Badge>
          ))}
          {selectedLanguages.map((language) => (
            <Badge
              key={language}
              variant="outline"
              className="flex items-center gap-1"
            >
              {language}
              <button
                onClick={() =>
                  setSelectedLanguages((prev) =>
                    prev.filter((l) => l !== language)
                  )
                }
                className="hover:bg-neutral-300 dark:hover:bg-neutral-600 rounded-full p-1"
              >
                <X size={12} />
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
