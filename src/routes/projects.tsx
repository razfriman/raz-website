import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { type Project, projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

const ProjectCard = ({ project }: { project: Project }) => {
  const isBootstepper = project.title === "Bootstepper";

  return (
    <Card
      className={cn(
        "flex flex-col gap-6 p-6 md:flex-row",
        isBootstepper && "border-primary/50 bg-primary/5",
      )}
    >
      <div className="flex-1 space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-2xl">{project.title}</h3>
            </div>
            <p className="font-medium text-primary text-sm uppercase tracking-wide">
              {project.subTitle}
            </p>
          </div>
          {project.link && (
            <Button
              variant="outline"
              size="sm"
              render={
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  Visit Project
                  <svg
                    aria-label="External link icon"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              }
            />
          )}
        </div>
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-[10px]">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};

export const Route = createFileRoute("/projects")({
  component: Projects,
});

function Projects() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="font-extrabold text-4xl tracking-tight sm:text-5xl">
            Projects
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed md:text-xl">
            A collection of some of my favorite projects, ranging from
            large-scale analytics platforms to experimental AR applications.
          </p>
        </div>
        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
