import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark" | "system">(
    "system"
  );

  React.useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle("dark", isDark);
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
