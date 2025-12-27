import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";

type Project = {
	title: string;
	subTitle: string;
	tags: string[];
	description: string;
	link?: string;
};

const projects: Project[] = [
	{
		title: "Bootstepper",
		subTitle: "The World's Largest Modern Line Dance Database",
		tags: ["TypeScript", "PostgreSQL", "React", "TanStack Start", "AI", "Spotify API", "Analytics", "Music Recognition"],
		description:
			"A high-performance, mobile-first platform that fixes everything wrong with traditional line dance websites. It's 'Spotify meets IMDb' for the line dance world, serving a massive library of 160,000+ dances, 22,000+ choreographers, and 650,000+ videos. Features an AI Step Sheet Editor that helps choreographers format work in seconds, a Live Sessions tool for event hosts to manage real-time requests and auto-generate timetables with ETAs, and Smart Playlists with seamless Spotify/YouTube integration. Built to be 100% free, fast, and community-driven.",
		link: "https://bootstepper.com",
	},
	{
		title: "RazTracker",
		subTitle: "Fortnite Analytics Platform",
		tags: ["C#", "MongoDB", "Angular", "Reverse Engineering", "UE5"],
		description:
			"Fortnite Analytics application that processes gameplay recordings from Unreal Engine 5. Provides insights into match history and performance for 2,000+ users and 10M+ analyzed players.",
		link: "https://raztracker.com",
	},
	{
		title: "TeslaLib",
		subTitle: "C# Wrapper for Tesla API",
		tags: ["C#", ".NET Core", "API"],
		description:
			"A comprehensive C# library to access Tesla Motors' API to manage vehicle settings. Supports .NET Core and Standard.",
		link: "https://github.com/razfriman/TeslaLib",
	},
	{
		title: "RazzleServer",
		subTitle: "MapleStory Server Emulator",
		tags: ["C#", ".NET", "Docker", "Networking"],
		description:
			"MapleStory server emulator for version v40b. Written in C#, it emulates the original game logic and network protocol, allowing for local or online play.",
		link: "https://github.com/razfriman/RazzleServer",
	},
	{
		title: "Cobol Parser",
		subTitle: "Semantic COBOL Parsing Framework",
		tags: ["C#", "Antlr", "Language Design"],
		description:
			"Complete semantic parsing framework supporting multiple COBOL dialects. Used by Fortune 500 companies like JP-Morgan and Nissan for code transformation and analysis.",
	},
	{
		title: "ARWorld",
		subTitle: "Multiplayer AR Drawing",
		tags: ["Swift", "ARKit", "C#", ".NET"],
		description:
			"A collaborative multiplayer iOS application using ARKit that allows users to draw in 3D space together in real-time.",
	},
	{
		title: "Snap2Ask",
		subTitle: "Visual Q&A Service",
		tags: ["Objective-C", "PHP", "REST API"],
		description:
			"A graphical question and answer service. Implemented the iOS frontend and a PHP REST API backend.",
		link: "https://github.com/razfriman/Snap2Ask",
	},
	{
		title: "Calculator for Glass",
		subTitle: "Voice-Controlled Calculator",
		tags: ["Java", "Google Glass", "Voice Recognition"],
		description:
			"Voice-activated calculator for Google Glass that analyzes voice input to solve arithmetic equations.",
		link: "https://github.com/razfriman/GlassCalculator",
	},
];

const Project = ({ project }: { project: Project }) => {
	const isBootstepper = project.title === "Bootstepper";

	return (
		<Card className={cn("p-6 flex flex-col md:flex-row gap-6", isBootstepper && "border-primary/50 bg-primary/5")}>
			<div className="flex-1 space-y-4">
				<div className="flex items-center justify-between">
					<div className="space-y-1">
						<div className="flex items-center gap-2">
							<h3 className="text-2xl font-bold">{project.title}</h3>
						</div>
						<p className="text-sm font-medium text-primary uppercase tracking-wide">
							{project.subTitle}
						</p>
					</div>
					{project.link && (
						<Button asChild variant="outline" size="sm">
							<a href={project.link} target="_blank" rel="noopener noreferrer" className="gap-2">
								Visit Project
								<svg
									aria-label="External link icon"
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
									className="h-4 w-4"
								>
									<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
									<polyline points="15 3 21 3 21 9" />
									<line x1="10" y1="14" x2="21" y2="3" />
								</svg>
							</a>
						</Button>
					)}
				</div>
				<p className="text-muted-foreground leading-relaxed">
					{project.description}
				</p>
				<div className="flex flex-wrap gap-2">
					{project.tags.map((tag) => (
						<Badge key={tag} variant="secondary" className="text-[10px]">
							{tag}
						</Badge>
					))}
				</div>
			</div>
		</Card>
	);
};

export const Route = createFileRoute("/projects")({
	component: Projects,
});

function Projects() {
	return (
		<Container>
			<div className="space-y-8">
				<div className="space-y-4 text-center md:text-left">
					<h1 className="text-4xl font-bold tracking-tight">Projects</h1>
					<p className="text-muted-foreground max-w-2xl">
						A collection of some of my favorite projects, ranging from large-scale
						analytics platforms to experimental AR applications.
					</p>
				</div>
				<div className="space-y-6">
					{projects.map((project) => (
						<Project key={project.title} project={project} />
					))}
				</div>
			</div>
		</Container>
	);
}
