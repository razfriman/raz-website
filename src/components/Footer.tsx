import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const links = [
	{
		href: "https://www.linkedin.com/in/razfriman",
		icon: (
			<svg
				aria-label="LinkedIn icon"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="h-5 w-5"
			>
				<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
				<rect width="4" height="12" x="2" y="9" />
				<circle cx="4" cy="4" r="2" />
			</svg>
		),
		label: "LinkedIn",
	},
	{
		href: "https://github.com/razfriman",
		icon: (
			<svg
				aria-label="GitHub icon"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="h-5 w-5"
			>
				<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
				<path d="M9 18c-4.51 2-5-2-7-2" />
			</svg>
		),
		label: "GitHub",
	},
	{
		href: "mailto:raz.friman@razfriman.com",
		icon: (
			<svg
				aria-label="Email icon"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="h-5 w-5"
			>
				<rect width="20" height="16" x="2" y="4" rx="2" />
				<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
			</svg>
		),
		label: "Email",
	},
];

export default function Footer() {
	return (
		<footer className="border-t py-6">
			<Container>
				<div className="flex justify-center gap-6">
					{links.map((link) => (
						<Button
							key={link.href}
							asChild
							variant="ghost"
							size="icon"
							className="h-10 w-10"
						>
							<a
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={link.label}
							>
								{link.icon}
							</a>
						</Button>
					))}
				</div>
			</Container>
		</footer>
	);
}
