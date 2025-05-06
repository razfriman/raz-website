import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
	return (
		<Container className="py-16">
			<div className="mx-auto max-w-2xl">
				<Card>
					<CardHeader>
						<CardTitle>Contact Me</CardTitle>
						<CardDescription>
							Feel free to reach out if you have any questions or opportunities.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form className="space-y-6">
							<div className="space-y-2">
								<Label htmlFor="name">Name</Label>
								<Input id="name" placeholder="Your name" />
							</div>
							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="your.email@example.com"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="message">Message</Label>
								<Textarea
									id="message"
									placeholder="Your message..."
									className="min-h-[150px]"
								/>
							</div>
							<Button type="submit" className="w-full">
								Send Message
							</Button>
						</form>
					</CardContent>
				</Card>
			</div>
		</Container>
	);
}
