import { createRootRoute, Outlet } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

// Lazy load devtools (rule 2.3 - Defer Non-Critical Third-Party Libraries)
// Devtools don't block user interaction, load after initial render
const TanStackRouterDevtools = import.meta.env.PROD
  ? () => null
  : lazy(() =>
      import("@tanstack/react-router-devtools").then((mod) => ({
        default: mod.TanStackRouterDevtools,
      })),
    );

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 py-8 md:py-12">
          <Outlet />
        </main>
        <Footer />
        <Suspense fallback={null}>
          <TanStackRouterDevtools />
        </Suspense>
      </div>
    </ThemeProvider>
  ),
});
