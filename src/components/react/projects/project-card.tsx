import { CardHeader } from "./card-header";
import { CardFooter, type Langs } from "./card-footer";

type Project = {
  title: string;
  categories: string[];
  year: string;
  image: { src: string };
  langs: Langs[];
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { categories, image, title, year, langs }: Project = project;
  return (
    <div className="transition flex flex-col cursor-pointer group ">
      <CardHeader image={image.src} title={title} />
      <CardFooter
        categories={categories}
        title={title}
        year={year}
        langs={langs}
      />
    </div>
  );
}
