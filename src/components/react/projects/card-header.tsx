interface CardHeaderProps {
  image: string;
  title: string;
}

export function CardHeader({ image, title }: CardHeaderProps) {
  return (
    <header className="p-6 max-sm:p-4 dark:bg-neutral-300/5 bg-neutral-900/5 rounded-t-3xl">
      <img
        src={image}
        alt={title}
        className="h-72 max-sm:h-fit rounded-xl w-full group-hover:scale-105 transition-transform ease-in-out duration-700"
      />
    </header>
  );
}
