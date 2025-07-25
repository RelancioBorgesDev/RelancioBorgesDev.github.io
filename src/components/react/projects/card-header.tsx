interface CardHeaderProps {
  image: string;
  title: string;
}

export function CardHeader({ image, title }: CardHeaderProps) {
  return (
    <header className="p-6 bg-neutral-300/5 rounded-t-3xl">
      <img
        src={image}
        alt={title}
        className="rounded-xl w-full group-hover:scale-105 transition-transform ease-in-out duration-700"
      />
    </header>
  );
}
