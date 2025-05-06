import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { Link, useMatches } from "@tanstack/react-router";
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

	return (
		<header className="border-b">
			<Container>
				<nav className="flex h-16 items-center justify-between">
					<div className="flex items-center gap-6">
						<Link to="/" className="text-xl font-bold">
							Raz Friman
						</Link>
						<div className="flex items-center gap-4">
							<NavigationMenu>
								<NavigationMenuList>
									<NavigationMenuItem>
										<Link to="/">
											<NavigationMenuLink
												className={cn(
													navigationMenuTriggerStyle(),
													currentPath === "/" &&
														"bg-accent text-accent-foreground",
												)}
											>
												Home
											</NavigationMenuLink>
										</Link>
									</NavigationMenuItem>
									<NavigationMenuItem>
										<Link to="/about">
											<NavigationMenuLink
												className={cn(
													navigationMenuTriggerStyle(),
													currentPath === "/about" &&
														"bg-accent text-accent-foreground",
												)}
											>
												About
											</NavigationMenuLink>
										</Link>
									</NavigationMenuItem>
									<NavigationMenuItem>
										<Link to="/projects">
											<NavigationMenuLink
												className={cn(
													navigationMenuTriggerStyle(),
													currentPath === "/projects" &&
														"bg-accent text-accent-foreground",
												)}
											>
												Projects
											</NavigationMenuLink>
										</Link>
									</NavigationMenuItem>
									<NavigationMenuItem>
										<Link to="/contact">
											<NavigationMenuLink
												className={cn(
													navigationMenuTriggerStyle(),
													currentPath === "/contact" &&
														"bg-accent text-accent-foreground",
												)}
											>
												Contact
											</NavigationMenuLink>
										</Link>
									</NavigationMenuItem>
								</NavigationMenuList>
							</NavigationMenu>
						</div>
					</div>
					<ThemeSwitcher />
				</nav>
			</Container>
		</header>
	);
}
