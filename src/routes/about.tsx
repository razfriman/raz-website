import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
	component: About,
});

function About() {
	return (
		<Container>
			<div className="space-y-8">
				<div className="space-y-4">
					<h1 className="text-4xl font-bold">About Me</h1>
				</div>

				<Card className="p-6 space-y-4">
					<p className="text-muted-foreground">
						My name is Raz Friman. I recently spent 1.5 years as an Enterprise
						Software Engineer at SpaceX. I am now living in Sydney, Australia.
					</p>
					<p className="text-muted-foreground">
						I graduated with both an M.S and B.S. Degree in Computer Science
						from Southern Methodist University (SMU), Dallas, Texas.
					</p>
					<p className="text-muted-foreground">
						In my free time, you will almost surely find me travelling the world
						with my GoPro and my DJI Mavic Pro drone.
					</p>
					<p className="text-muted-foreground">
						I am an avid hiker and enjoy running. Lately, I have been getting
						into the sport of Orienteering, which combines running and
						navigational skills.
					</p>
					<p className="text-muted-foreground">
						I love cooking and baking. I will never pass up an opportunity to
						bake, as I absolutely love desserts and anything sweet.
					</p>
					<p className="text-muted-foreground">
						I have been an early enthusiast in the VR space, and am always
						working on projects to explore the possibilities of this technology.
					</p>
				</Card>
			</div>
		</Container>
	);
}
