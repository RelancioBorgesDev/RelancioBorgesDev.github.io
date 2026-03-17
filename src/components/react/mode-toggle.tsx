import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  React.useEffect(() => {
    const isDark = theme === "dark";

    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Button
      variant="ghost"
      size="lg"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="rounded-full cursor-pointer"
    >
      <Sun
        className={`transition-all ${
          theme === "dark"
            ? "scale-0 rotate-90"
            : "scale-100 rotate-0 text-zinc-950"
        }`}
      />
      <Moon
        className={`absolute transition-all ${
          theme === "dark" ? "scale-100 rotate-0" : "scale-0 rotate-90 "
        }`}
      />
    </Button>
  );
}
