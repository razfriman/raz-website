import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 py-8 md:py-12">
          <Outlet />
        </main>
        <Footer />
        <TanStackRouterDevtools />
      </div>
    </ThemeProvider>
  ),
});
