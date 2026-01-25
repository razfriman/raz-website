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
    links: [
      {
        href: appCss,
        rel: "stylesheet",
      },
      {
        href: "/logo192.png",
        rel: "apple-touch-icon",
      },
      {
        href: "/site.webmanifest",
        rel: "manifest",
      },
      {
        href: "/favicon-96x96.png",
        rel: "icon",
        sizes: "96x96",
        type: "image/png",
      },
      {
        href: "/favicon.svg",
        rel: "icon",
        type: "image/svg+xml",
      },
      {
        href: "/favicon.ico",
        rel: "shortcut icon",
      },
      {
        href: "/apple-touch-icon.png",
        rel: "apple-touch-icon",
        sizes: "180x180",
      },
    ],
    meta: [
      {
        charSet: "utf8",
      },
      {
        content: "width=device-width, initial-scale=1.0",
        name: "viewport",
      },
      {
        content: "#1f3fad",
        name: "theme-color",
      },
      {
        content:
          "Raz Friman - Staff Software Engineer at Canva building high-impact AI-driven design generation products. Passionate about LLMs, generative design, and high-performance systems. Creator of Bootstepper, the world's largest line dance database.",
        name: "description",
      },
      {
        content: "Raz Friman",
        name: "apple-mobile-web-app-title",
      },
      {
        title: "Raz Friman",
      },
      // Open Graph
      {
        content: "Raz Friman",
        property: "og:title",
      },
      {
        content:
          "Raz Friman - Staff Software Engineer at Canva building high-impact AI-driven design generation products. Passionate about LLMs, generative design, and high-performance systems. Creator of Bootstepper, the world's largest line dance database.",
        property: "og:description",
      },
      {
        content: "website",
        property: "og:type",
      },
      {
        content: "https://razfriman.com",
        property: "og:url",
      },
      {
        content: "/og.png",
        property: "og:image",
      },
      {
        content: "1200",
        property: "og:image:width",
      },
      {
        content: "630",
        property: "og:image:height",
      },
      // Twitter Card
      {
        content: "summary_large_image",
        name: "twitter:card",
      },
      {
        content: "Raz Friman",
        name: "twitter:title",
      },
      {
        content:
          "Raz Friman - Staff Software Engineer at Canva building high-impact AI-driven design generation products. Passionate about LLMs, generative design, and high-performance systems. Creator of Bootstepper, the world's largest line dance database.",
        name: "twitter:description",
      },
      {
        content: "/og.png",
        name: "twitter:image",
      },
      {
        content: "https://razfriman.com",
        name: "twitter:url",
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
