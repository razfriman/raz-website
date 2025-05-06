import { Container } from "@/components/ui/container";
import { Link } from "@tanstack/react-router";
import { ThemeSwitcher } from "./theme-switcher";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

export default function Header() {
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
												className={navigationMenuTriggerStyle()}
											>
												Home
											</NavigationMenuLink>
										</Link>
									</NavigationMenuItem>
									<NavigationMenuItem>
										<Link to="/about">
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												About
											</NavigationMenuLink>
										</Link>
									</NavigationMenuItem>
									<NavigationMenuItem>
										<Link to="/projects">
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Projects
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
