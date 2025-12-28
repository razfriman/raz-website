import { createFileRoute } from "@tanstack/react-router";
import {
  Glasses,
  HardDrive,
  type LucideIcon,
  MessageCircleQuestion,
  RectangleEllipsis as RectangleGoggles,
} from "lucide-react";
import Bootstepper from "@/components/icons/bootstepper";
import Fortnite from "@/components/icons/fortnite";
import Tesla from "@/components/icons/tesla";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { type Project, projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const lucideIconMap: Record<string, LucideIcon> = {
  HardDrive,
  Glasses,
  MessageCircleQuestion,
  RectangleGoggles,
};

function LucideIconComponent({
  Icon,
  className,
}: {
  Icon: LucideIcon;
  className?: string;
}) {
  return <Icon className={className} />;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden border shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        project.borderColor || "border-border",
        project.hoverOverlayColor || "bg-card",
      )}
    >
      <div className="relative flex flex-col gap-6 p-6 md:flex-row">
        <div className="flex-1 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* Icon container */}
              {project.icon && project.iconBgColor && (
                <div
                  className={cn(
                    "flex items-center justify-center rounded-xl p-3 shadow-md transition-transform duration-300 group-hover:scale-110",
                    project.iconBgColor,
                  )}
                >
                  {project.icon === "bootstepper" && (
                    <Bootstepper color="white" className="h-6 w-6" />
                  )}
                  {project.icon === "fortnite" && (
                    <Fortnite color="white" className="h-5 w-5" />
                  )}
                  {project.icon === "tesla" && (
                    <Tesla color="white" className="h-6 w-6" />
                  )}
                  {project.icon === "lucide" &&
                    project.lucideIcon &&
                    lucideIconMap[project.lucideIcon] && (
                      <LucideIconComponent
                        Icon={lucideIconMap[project.lucideIcon]}
                        className="h-6 w-6 text-white"
                      />
                    )}
                </div>
              )}
              <div className="space-y-1">
                <h3 className="font-bold text-2xl text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="font-medium text-gray-600 text-sm dark:text-gray-400">
                  {project.subTitle}
                </p>
              </div>
            </div>
            {project.link && (
              <Button
                variant="outline"
                size="sm"
                className="shrink-0 transition-all duration-200 group-hover:shadow-md"
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
          <p className="text-base text-gray-600 leading-relaxed dark:text-gray-300">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="border-white/20 bg-background/90 text-[10px] shadow-sm backdrop-blur-sm dark:border-white/30"
              >
                {tag}
              </Badge>
            ))}
          </div>
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
    <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="font-extrabold text-4xl tracking-tight sm:text-5xl md:text-6xl">
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
