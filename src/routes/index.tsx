import Canva from "@/components/icons/canva";
import Fortnite from "@/components/icons/fortnite";
import SpaceX from "@/components/icons/spacex";
import Tesla from "@/components/icons/tesla";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<Container>
			<div className="space-y-12">
				<div className="space-y-4">
					<h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl">
						Hi, I'm <span className="text-primary">Raz</span>
					</h1>
					<p className="text-xl text-muted-foreground max-w-[700px]">
						Staff Software Engineer at <strong>Canva</strong>. I build high-impact AI-driven products and
						robust developer platforms. Passionate about LLMs, generative design, and high-performance systems.
					</p>
					<div className="flex gap-4">
						<Button asChild>
							<a
								href="/Resume_Raz_Friman.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								View Résumé
							</a>
						</Button>
						<Button variant="outline" asChild>
							<a href="https://github.com/razfriman" target="_blank" rel="noopener noreferrer">
								GitHub
							</a>
						</Button>
					</div>
				</div>

				<section className="space-y-6">
					<h2 className="text-3xl font-bold tracking-tight">Experience</h2>
					<div className="grid gap-6">
						<Card className="p-6">
							<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
								<div className="space-y-1">
									<h3 className="text-xl font-bold flex items-center gap-2">
										Staff Software Engineer @ Canva
										<Canva className="w-6 h-6" />
									</h3>
									<p className="text-sm text-muted-foreground">MAR 2023 - PRESENT</p>
								</div>
							</div>
							<ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
								<li>Delivered high-impact AI design-generation capabilities across Image2Design, Website Design, and Guided Presentations.</li>
								<li>Productionized LocalDevProxy, a stable local development platform used by 70+ engineers.</li>
								<li>Shipped novel techniques such as differential-diffusion background generation (CMDBG) and LLM-guided design creation.</li>
							</ul>
						</Card>

						<Card className="p-6">
							<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
								<div className="space-y-1">
									<h3 className="text-xl font-bold flex items-center gap-2">
										Senior Software Engineer @ Canva
										<Canva className="w-6 h-6" />
									</h3>
									<p className="text-sm text-muted-foreground">NOV 2018 - MAR 2023</p>
								</div>
							</div>
							<ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
								<li>Designed and implemented a system to search and index ~4,000,000 Canva templates in ~100 locales.</li>
								<li>Implemented real-time system to count template publishes for creator compensation.</li>
							</ul>
						</Card>

						<Card className="p-6">
							<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
								<div className="space-y-1">
									<h3 className="text-xl font-bold flex items-center gap-2">
										Software Engineer II @ SpaceX
										<SpaceX className="w-6 h-6" />
									</h3>
									<p className="text-sm text-muted-foreground">MAY 2016 - DEC 2017</p>
								</div>
							</div>
							<ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
								<li>Implemented mission-critical systems for procedure authoring used by all launch engineers.</li>
								<li>Created the algorithm for Falcon-9 rocket booster serial number assignment and reusability management.</li>
							</ul>
						</Card>
					</div>
				</section>

				<section className="space-y-6">
					<div className="flex items-center justify-between">
						<h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
						<Button variant="link" asChild>
							<Link to="/projects">View all projects &rarr;</Link>
						</Button>
					</div>
					<div className="space-y-6">
						<Card className="p-6 space-y-4 border-primary/50 bg-primary/5">
							<div className="space-y-2">
								<div className="flex items-center gap-2">
									<h3 className="text-xl font-bold">Bootstepper</h3>
								</div>
								<p className="text-sm text-muted-foreground">TypeScript, PostgreSQL, React, TanStack Start, AI</p>
							</div>
							<p className="text-muted-foreground leading-relaxed">
								Described as "Spotify meets IMDb" for the line dance world, Bootstepper is a high-performance, mobile-first platform serving 600+ users with over 160,000 dances and 650,000 videos.
							</p>
							<ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
								<li className="flex items-center gap-2">
									<span className="text-primary">✓</span> AI-Powered Step Sheet Editor
								</li>
								<li className="flex items-center gap-2">
									<span className="text-primary">✓</span> Live Session Management for Event Hosts
								</li>
								<li className="flex items-center gap-2">
									<span className="text-primary">✓</span> Smart Playlists with Spotify/YT Integration
								</li>
								<li className="flex items-center gap-2">
									<span className="text-primary">✓</span> Real-Time Analytics & Trending Charts
								</li>
							</ul>
						</Card>
						<Card className="p-6 space-y-4">
							<div className="space-y-2">
								<h3 className="text-xl font-bold flex items-center gap-2">
									RazTracker
									<Fortnite className="w-5 h-5" />
								</h3>
								<p className="text-sm text-muted-foreground">C#, MongoDB, Angular</p>
							</div>
							<p className="text-muted-foreground leading-relaxed">
								Fortnite Analytics application processing UE5 gameplay recordings.
								Analyzed 10M+ players and 300k+ matches.
							</p>
						</Card>
					</div>
				</section>

				<section className="py-12 bg-muted/50 rounded-3xl p-8 text-center space-y-6">
					<h2 className="text-3xl font-bold">Interested in working together?</h2>
					<p className="text-muted-foreground max-w-[600px] mx-auto">
						I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
					</p>
					<Button size="lg" asChild>
						<Link to="/contact">Get in Touch</Link>
					</Button>
				</section>
			</div>
		</Container>
	);
}
