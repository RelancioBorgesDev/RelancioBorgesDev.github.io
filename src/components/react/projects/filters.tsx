import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandInput,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import React, { useState } from "react";
import image from "../../../assets/user_auth/GithubAnalytics.png";
import { MultiSelectFilter } from "./multiselect-filters";

const allProjects = [
  {
    title: "Code Screenshot",
    categories: ["Development", "Design"],
    topic: "Front End",
    languages: ["React", "Tailwind"],
    year: 2024,
    image,
  },
  {
    title: "Landing Page",
    categories: ["Design"],
    topic: "Front End",
    languages: ["HTML", "CSS"],
    year: 2023,
    image,
  },
  {
    title: "API Auth",
    categories: ["Development"],
    topic: "Back End",
    languages: ["Node.js", "PostgreSQL"],
    year: 2022,
    image,
  },
];

const topics = ["Front End", "Back End", "FullStack", "DevOps"];
const languages = ["React", "Node.js", "Tailwind", "HTML", "CSS", "PostgreSQL"];

type FiltersProps = {
  onChangeCategory: (cat: string) => void;
};

export function Filters({ onChangeCategory }: FiltersProps) {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const filteredProjects = allProjects.filter((p) => {
    const topicMatch =
      selectedTopics.length === 0 || selectedTopics.includes(p.topic);
    const languageMatch =
      selectedLanguages.length === 0 ||
      selectedLanguages.some((lang) => p.languages.includes(lang));
    return topicMatch && languageMatch;
  });

  return (
    <div className="p-8 space-y-6 max-lg:p-2 max-sm:w-full">
      {/* Filtros (command) */}
      <div className="flex gap-4 max-sm:flex-col ">
        <MultiSelectFilter
          label="Tópicos"
          placeholder="Filtrar por tópico"
          options={topics}
          selected={selectedTopics}
          setSelected={setSelectedTopics}
        />

        <MultiSelectFilter
          label="Linguagens"
          placeholder="Filtrar por linguagem"
          options={languages}
          selected={selectedLanguages}
          setSelected={setSelectedLanguages}
        />
      </div>
    </div>
  );
}
