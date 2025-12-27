import { Link } from "@tanstack/react-router";
import Bootstepper from "@/components/icons/bootstepper";
import Fortnite from "@/components/icons/fortnite";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

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
          const isBootstepper = project.title === "Bootstepper";
          const isRazTracker = project.title === "RazTracker";

          return (
            <Card
              key={project.title}
              className={cn(
                "space-y-4 p-6",
                isBootstepper && "border-primary/50 bg-primary/5",
              )}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="flex items-center gap-2 font-bold text-xl">
                    {project.title}
                    {isBootstepper && (
                      <Bootstepper color="default" className="h-6 w-6" />
                    )}
                    {isRazTracker && (
                      <Fortnite color="default" className="h-5 w-5" />
                    )}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 5).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-[10px]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              {project.features && (
                <ul className="grid grid-cols-1 gap-2 text-muted-foreground text-sm md:grid-cols-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-primary">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          );
        })}
      </div>
    </section>
  );
}
