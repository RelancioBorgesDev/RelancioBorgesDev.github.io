export type Project = {
  slug: string;
  title: string;
  categories: string[];
  year: string;
  image: ImageMetadata;
  langs: {
    lang: string;
  }[];
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { image, title, year, categories, langs } = project;

  return (
    <article className="group overflow-hidden rounded-2xl bg-neutral-900/5 dark:bg-neutral-300/5 transition hover:shadow-xl border border-neutral-500/50 dark:border-neutral-700">
      <div className="overflow-hidden">
        <img
          src={image.src}
          alt={title}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold dark:text-neutral-200 text-neutral-600">
            {title}
          </h3>

          <span className="text-sm text-neutral-500 dark:text-neutral-200">
            {year}
          </span>
        </div>

        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {categories.join(" & ")}
        </p>

        <div className="flex flex-wrap gap-2">
          {langs.slice(0, 3).map(({ lang }, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-md bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-200 text-neutral-600"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
