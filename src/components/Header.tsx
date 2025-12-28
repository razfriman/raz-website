import { Link, useMatches } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "./theme-switcher";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

export default function Header() {
  const matches = useMatches();
  const currentPath = matches[matches.length - 1]?.pathname;

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-2 sm:gap-6">
            <Link
              to="/"
              className="shrink-0 font-bold text-lg text-primary tracking-tighter sm:text-xl"
            >
              Raz Friman
            </Link>
            <NavigationMenu className="hidden sm:flex">
              <NavigationMenuList className="gap-2">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.to}>
                    <Link to={item.to}>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          currentPath === item.to &&
                            "bg-accent text-accent-foreground",
                        )}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="no-scrollbar flex items-center gap-2 overflow-x-auto sm:hidden sm:gap-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-md px-2 py-1 font-medium text-xs transition-colors",
                  currentPath === item.to
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="shrink-0">
            <ThemeSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
