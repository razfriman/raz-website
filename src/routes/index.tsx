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
								Staff Software Engineer at <strong>Canva</strong>
							</span>
						</li>
						<li className="flex items-center gap-2">
							<span className="text-primary">•</span>
							<span>
								Senior Software Engineer at <strong>Canva</strong>
							</span>
						</li>
						<li className="flex items-center gap-2">
							<span className="text-primary">•</span>
							<span>
								Software Engineer II at <strong>SpaceX</strong>
							</span>
						</li>
						<li className="flex items-center gap-2">
							<span className="text-primary">•</span>
							<span>
								Software Engineer at <strong>In-Com Data Systems</strong>
							</span>
						</li>
						<li className="flex items-center gap-2">
							<span className="text-primary">•</span>
							<div>
								<span>
									Creator of <strong>RazTracker</strong>
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
									Creator of <strong>TeslaLib</strong>
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
