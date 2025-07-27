import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandInput,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import React from "react";

type MultiSelectProps = {
  placeholder: string;
  options: string[];
  selected: string[];
  setSelected: (value: string[]) => void;
  label: string;
};

export function MultiSelectFilter({
  placeholder,
  options,
  selected,
  setSelected,
  label,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);

  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((o) => o !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] max-sm:w-full bg-neutral-200 justify-between truncate overflow-hidden whitespace-nowrap text-neutral-950 dark:text-neutral-200"
          title={selected.join(", ")}
        >
          {selected.length > 0
            ? selected.length <= 2
              ? selected.join(", ")
              : `${selected.slice(0, 2).join(", ")}, ...`
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 max-sm:w-full">
        <Command className="bg-neutral-200 dark:bg-neutral-950">
          <CommandInput  placeholder={`Buscar ${label.toLowerCase()}...`} />
          <CommandGroup className="bg-neutral-200 dark:bg-neutral-950">
            {options.map((option) => (
              <CommandItem key={option} onSelect={() => toggleOption(option)}>
                <div
                  className={cn(
                    "mr-2 h-4 w-4 border border-primary rounded-sm flex items-center justify-center",
                    selected.includes(option) ? "bg-primary text-white" : ""
                  )}
                >
                  {selected.includes(option) && <Check className="h-3 w-3 text-neutral-200 dark:text-neutral-950" />}
                </div>
                {option}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
