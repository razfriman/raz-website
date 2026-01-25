import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

const config = defineConfig(async () => {
  const isCloudflare = process.env.CLOUDFLARE !== undefined;

  return {
    server: {
      cors: true,
    },
    plugins: [
      devtools(),
      ...(isCloudflare
        ? [cloudflare({ viteEnvironment: { name: "ssr" } })]
        : [nitro()]),
      tsConfigPaths(),
      tailwindcss(),
      tanstackStart(),
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
  };
});

export default config;
