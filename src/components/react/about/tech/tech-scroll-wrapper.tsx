interface TechScrollWrapperProps {
  direction: "left" | "right";
  children: React.ReactNode;
}

export function TechScrollWrapper({ direction, children }: TechScrollWrapperProps) {
  return (
    <div className="relative overflow-hidden">
      <div className={`flex animate-scroll-${direction} space-x-3`}>
        {children}
      </div>
    </div>
  );
}
