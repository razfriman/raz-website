import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    ignorePatterns: ["src/routeTree.gen.ts", "src/components/ui/**"],
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: false,
    quoteProps: "as-needed",
    jsxSingleQuote: false,
    trailingComma: "es5",
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: "always",
    endOfLine: "lf",
    experimentalSortPackageJson: true,
    experimentalSortImports: {
      ignoreCase: true,
      newlinesBetween: true,
      order: "asc",
    },
  },
  lint: {
    ignorePatterns: ["src/routeTree.gen.ts", "src/components/ui/**"],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    devtools(),
    cloudflare({ viteEnvironment: { name: "ssr" } }),
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
    viteReact(),
  ],
  server: {
    cors: true,
  },
});
