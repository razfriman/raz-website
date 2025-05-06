import { ThemeProvider } from "@/components/theme-provider";
import { Container } from "@/components/ui/container";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const Route = createRootRoute({
	component: () => (
		<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
			<Container className="min-h-screen flex flex-col">
				<Header />
				<main className="flex-1 py-8">
					<Outlet />
				</main>
				<Footer />
				<TanStackRouterDevtools />
			</Container>
		</ThemeProvider>
	),
});
