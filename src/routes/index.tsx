import { createFileRoute, Link } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { Experience } from "@/components/experience";
import { FeaturedProjects } from "@/components/featured-projects";
import Bootstepper from "@/components/icons/bootstepper";
import Canva from "@/components/icons/canva";
import Github from "@/components/icons/github";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="space-y-12">
        <div className="space-y-6">
          <h1 className="font-extrabold text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-primary">Raz</span>
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed md:text-xl">
            Staff Software Engineer at{" "}
            <strong>
              <a
                href="https://canva.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                Canva
              </a>
            </strong>{" "}
            <Canva className="mb-1 inline h-5 w-5" />, where I build high-impact
            AI-driven design generation products. I am passionate about LLMs,
            generative design, and high-performance systems.
            <br />
            Outside of work, I run{" "}
            <strong>
              <a
                href="https://bootstepper.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                Bootstepper
              </a>
            </strong>{" "}
            <Bootstepper color="default" className="mb-1 inline h-5 w-5" />, the
            world's largest line dance database—an all-in-one platform for
            discovering dances, following choreographers, and accessing step
            sheets.
          </p>
          <div className="flex gap-4">
            <Button
              render={
                <a
                  href="/Resume_Raz_Friman.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  View Résumé
                </a>
              }
            />
            <Button
              variant="outline"
              render={
                <a
                  href="https://github.com/razfriman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              }
            />
            <Button
              variant="outline"
              render={
                <a
                  href="https://canva.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Canva className="h-4 w-4" />
                  Canva
                </a>
              }
            />
            <Button
              variant="outline"
              render={
                <a
                  href="https://bootstepper.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Bootstepper color="default" className="h-4 w-4" />
                  Bootstepper
                </a>
              }
            />
          </div>
        </div>

        <Experience />

        <FeaturedProjects />

        <section className="space-y-6 rounded-3xl bg-muted/50 p-8 py-12 text-center">
          <h2 className="font-bold text-3xl">Let's Connect</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground">
            Have an interesting idea or just want to chat about tech, design, or
            line dancing? Feel free to reach out.
          </p>
          <Button size="lg" render={<Link to="/contact">Say Hello</Link>} />
        </section>
      </div>
    </div>
  );
}
