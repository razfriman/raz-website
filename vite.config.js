import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

const config = defineConfig(() => {
  const isCloudflare = process.env.CLOUDFLARE !== undefined;

  return {
    plugins: [
      devtools(),
      ...(isCloudflare
        ? [cloudflare({ viteEnvironment: { name: "ssr" } })]
        : [nitro()]),
      tsConfigPaths(),
      tailwindcss(),
      tanstackStart({
        prerender: {
          crawlLinks: true,
          enabled: true,
          filter: (url) => !url.path.endsWith(".pdf"),
        },
        sitemap: {
          enabled: true,
          host: "https://razfriman.com",
        },
      }),
      viteReact({
        babel: {
          plugins: [
            [
              "babel-plugin-react-compiler",
              {
                target: "19",
              },
            ],
          ],
        },
      }),
    ],
    server: {
      cors: true,
    },
  };
});

export default config;
