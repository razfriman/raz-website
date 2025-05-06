import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Link } from "@tanstack/react-router";
import { ThemeSwitcher } from "./theme-switcher";

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
							<Button asChild variant="ghost">
								<Link to="/">Home</Link>
							</Button>
							<Button asChild variant="ghost">
								<Link to="/about">About</Link>
							</Button>
							<Button asChild variant="ghost">
								<Link to="/projects">Projects</Link>
							</Button>
						</div>
					</div>
					<ThemeSwitcher />
				</nav>
			</Container>
		</header>
	);
}
