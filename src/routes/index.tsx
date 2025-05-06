import Canva from "@/components/icons/canva";
import Fortnite from "@/components/icons/fortnite";
import SpaceX from "@/components/icons/spacex";
import Tesla from "@/components/icons/tesla";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<Container>
			<div className="space-y-8">
				<div className="space-y-4">
					<h1 className="text-4xl font-bold">
						Hi, I'm <span className="text-primary">Raz</span>
					</h1>
					<p className="text-lg text-muted-foreground">
						I'm a Full-Stack Software Engineer with experience in .NET, Java,
						Angular, and React.
						<br />
						I'm also an aerial photographer and a VR enthusiast.
					</p>
				</div>

				<Card className="p-6">
					<ul className="space-y-4">
						<li className="flex items-center gap-2">
							<span className="text-primary">•</span>
							<span>
								Staff Software Engineer at{" "}
								<strong className="inline-flex items-center gap-1">
									Canva
									<Canva className="inline-block" />
								</strong>
							</span>
						</li>
						<li className="flex items-center gap-2">
							<span className="text-primary">•</span>
							<span>
								Senior Software Engineer at{" "}
								<strong className="inline-flex items-center gap-1">
									Canva
									<Canva className="inline-block" />
								</strong>
							</span>
						</li>
						<li className="flex items-center gap-2">
							<span className="text-primary">•</span>
							<span>
								Software Engineer II at{" "}
								<strong className="inline-flex items-center gap-1">
									SpaceX
									<SpaceX className="inline-block" />
								</strong>
							</span>
						</li>
						<li className="flex items-center gap-2">
							<span className="text-primary">•</span>
							<span>
								Software Engineer at{" "}
								<strong className="inline-flex items-center gap-1">
									In-Com Data Systems
								</strong>
							</span>
						</li>
						<li className="flex items-center gap-2">
							<span className="text-primary">•</span>
							<div>
								<span>
									Creator of{" "}
									<strong className="inline-flex items-center gap-1">
										RazTracker
										<Fortnite className="inline-block" />
									</strong>
								</span>
								<br />
								<small className="text-muted-foreground">
									Fortnite Stats Tracker and Match Analytics
								</small>
							</div>
						</li>
						<li className="flex items-center gap-2">
							<span className="text-primary">•</span>
							<div>
								<span>
									Creator of{" "}
									<strong className="inline-flex items-center gap-1">
										TeslaLib
										<Tesla className="inline-block" />
									</strong>
								</span>
								<br />
								<small className="text-muted-foreground">
									C# wrapper for Tesla Model S API
								</small>
							</div>
						</li>
					</ul>
				</Card>

				<div>
					<Button asChild variant="outline">
						<a
							href="/Resume_Raz_Friman.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							Download Résumé
						</a>
					</Button>
				</div>
			</div>
		</Container>
	);
}
