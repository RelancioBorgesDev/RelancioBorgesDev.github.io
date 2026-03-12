interface CardHeaderProps {
  image: string;
  title: string;
}

export function CardHeader({ image, title }: CardHeaderProps) {
  return (
    <header className="p-6 max-sm:p-4 dark:bg-neutral-300/5 bg-neutral-900/5 rounded-t-3xl border-2 group-hover:border-2 group-hover:border-neutral-500/50 dark:group-hover:border-neutral-500/50">
      <img
        src={image}
        alt={`Imagem do projeto ${title}`}
        loading="lazy"
        decoding="async"
        className="h-72 max-sm:h-fit rounded-xl w-full "
      />
    </header>
  );
}
