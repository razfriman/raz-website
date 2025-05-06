import Contact from "@/pages/contact";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
	component: Contact,
});
