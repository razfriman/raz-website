import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import appCss from "../styles.css?url";


// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <meta name="theme-color" content="#1f3fad" />
//   <meta name="description"
//     content="Raz Friman - Staff Software Engineer at Canva building high-impact AI-driven design generation products. Passionate about LLMs, generative design, and high-performance systems. Creator of Bootstepper, the world's largest line dance database." />
//   <link rel="apple-touch-icon" href="/logo192.png" />
//   <link rel="manifest" href="/site.webmanifest" />
//   <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
//   <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
//   <link rel="shortcut icon" href="/favicon.ico" />
//   <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
//   <meta name="apple-mobile-web-app-title" content="Raz Friman" />
//   <link rel="manifest" href="/site.webmanifest" />
//   <title>Raz Friman</title>
// </head>


export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
      {
        name: "theme-color",
        content: "#1f3fad",
      },
      {
        name: "description",
        content:
          "Raz Friman - Staff Software Engineer at Canva building high-impact AI-driven design generation products. Passionate about LLMs, generative design, and high-performance systems. Creator of Bootstepper, the world's largest line dance database.",
      },
      {
        name: "apple-mobile-web-app-title",
        content: "Raz Friman",
      },
      {
        title: "Raz Friman",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "apple-touch-icon",
        href: "/logo192.png",
      },
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-96x96.png",
        sizes: "96x96",
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
      {
        rel: "shortcut icon",
        href: "/favicon.ico",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
  }),

  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-8 md:py-12">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
