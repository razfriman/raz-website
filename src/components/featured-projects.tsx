import { Link } from "@tanstack/react-router";
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
import { projects } from "@/data/projects";
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

export function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-3xl tracking-tight">Featured Projects</h2>
        <Button
          variant="link"
          render={<Link to="/projects">View all projects &rarr;</Link>}
        />
      </div>
      <div className="space-y-6">
        {featuredProjects.map((project) => {
          return (
            <Card
              key={project.title}
              className={cn(
                "group relative overflow-hidden border shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                project.borderColor || "border-border",
                project.hoverOverlayColor || "bg-card",
              )}
            >
              <div className="relative space-y-4 p-6">
                <div className="space-y-3">
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
                      <div>
                        <h3 className="font-bold text-gray-900 text-xl dark:text-white">
                          {project.title}
                        </h3>
                        <p className="mt-1 font-medium text-gray-600 text-sm dark:text-gray-400">
                          {project.subTitle}
                        </p>
                      </div>
                    </div>
                    {project.link && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="shrink-0"
                        render={
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Visit →
                          </a>
                        }
                      />
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 5).map((tag) => (
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

                <p className="text-base text-gray-600 leading-relaxed dark:text-gray-300">
                  {project.description}
                </p>

                {project.features && (
                  <ul className="grid grid-cols-1 gap-2.5 text-sm md:grid-cols-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                      >
                        <span
                          className={cn(
                            "text-lg",
                            project.iconBgColor
                              ? project.iconBgColor.replace("bg-", "text-")
                              : "text-primary",
                          )}
                        >
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
