import {
  Monitor as MonitorIcon,
  Moon as MoonIcon,
  Sun as SunIcon,
} from "lucide-react";
import { useCallback } from "react";

import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const ThemeSwitcher = () => {
  const { setTheme } = useTheme();

  const handleLightClick = useCallback(() => {
    setTheme("light");
  }, [setTheme]);

  const handleDarkClick = useCallback(() => {
    setTheme("dark");
  }, [setTheme]);

  const handleSystemClick = useCallback(() => {
    setTheme("system");
  }, [setTheme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="outline" size="icon">
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        }
      />
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleLightClick}>
          <SunIcon /> Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleDarkClick}>
          <MoonIcon /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleSystemClick}>
          <MonitorIcon /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
