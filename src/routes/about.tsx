import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Code, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="space-y-16">
        {/* Header Section */}
        <div className="space-y-6">
          <h1 className="font-extrabold text-4xl tracking-tight sm:text-5xl md:text-6xl">
            About Me
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed md:text-xl">
            Staff Software Engineer, Line Dancer, and Tech Enthusiast based in
            Sydney.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          <Card
            className={cn("border-blue-500/20 p-8 dark:border-blue-500/40")}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-xl bg-blue-500 p-3 shadow-md">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <h2 className="font-bold text-3xl tracking-tight">
                  Professional Journey
                </h2>
              </div>
              <div className="space-y-5">
                <p className="text-base text-muted-foreground leading-relaxed md:text-lg">
                  I'm Raz Friman, a Staff Software Engineer currently based in
                  Sydney, Australia. My career has taken me from architecting
                  language parsers for Fortune 500 companies to building
                  mission-critical systems for SpaceX, and now building
                  AI-powered design generation products at Canva.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed md:text-lg">
                  I graduated with both an M.S. and B.S. in Computer Science
                  from Southern Methodist University (SMU) in Dallas, Texas,
                  with a specialization in Cybersecurity and a minor in
                  Mathematics.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed md:text-lg">
                  I thrive at the intersection of complex backend systems and
                  innovative frontend experiences, always looking for ways to
                  leverage AI to solve real-world problems.
                </p>
              </div>
            </div>
          </Card>

          <Card
            className={cn("border-pink-500/20 p-8 dark:border-pink-500/40")}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-xl bg-pink-500 p-3 shadow-md">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h2 className="font-bold text-3xl tracking-tight">
                  Interests & Hobbies
                </h2>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-xl">Line Dancing</h3>
                  <p className="text-base text-muted-foreground leading-relaxed md:text-lg">
                    An avid line dancer and the creator of{" "}
                    <strong className="text-foreground">Bootstepper</strong>, a
                    platform dedicated to modernizing the line dance community
                    through technology.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-xl">Outdoor Activities</h3>
                  <p className="text-base text-muted-foreground leading-relaxed md:text-lg">
                    I enjoy hiking, running, and Orienteering—a sport that
                    combines physical endurance with navigational challenges.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Skills Section */}
        <Card
          className={cn("border-emerald-500/20 p-8 dark:border-emerald-500/40")}
        >
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-xl bg-emerald-500 p-3 shadow-md">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h2 className="font-bold text-3xl tracking-tight">Skills</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-4">
                <h4 className="font-bold text-xl">Languages</h4>
                <ul className="space-y-2.5 text-base text-muted-foreground md:text-lg">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <a
                      href="https://www.typescriptlang.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-primary"
                    >
                      TypeScript
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <a
                      href="https://dotnet.microsoft.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-primary"
                    >
                      C# / .NET
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <a
                      href="https://www.java.com/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-primary"
                    >
                      Java
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <a
                      href="https://www.python.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-primary"
                    >
                      Python
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-xl">Cloud & Infra</h4>
                <ul className="space-y-2.5 text-base text-muted-foreground md:text-lg">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      <a
                        href="https://aws.amazon.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-primary"
                      >
                        AWS
                      </a>
                      {" / "}
                      <a
                        href="https://cloudflare.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-primary"
                      >
                        Cloudflare
                      </a>
                      {" / "}
                      <a
                        href="https://vercel.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-primary"
                      >
                        Vercel
                      </a>
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      <a
                        href="https://www.docker.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-primary"
                      >
                        Docker
                      </a>
                      {" / "}
                      <a
                        href="https://bazel.build/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-primary"
                      >
                        Bazel
                      </a>
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      <a
                        href="https://www.postgresql.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-primary"
                      >
                        PostgreSQL
                      </a>
                      {" / "}
                      <a
                        href="https://www.mongodb.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-primary"
                      >
                        MongoDB
                      </a>
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <a
                      href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-primary"
                    >
                      DynamoDB
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-xl">Observability</h4>
                <ul className="space-y-2.5 text-base text-muted-foreground md:text-lg">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <a
                      href="https://www.elastic.co/elasticsearch"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-primary"
                    >
                      Elasticsearch
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <a
                      href="https://prometheus.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-primary"
                    >
                      Prometheus
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <a
                      href="https://www.jaegertracing.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-primary"
                    >
                      Jaeger
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <a
                      href="https://grafana.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-primary"
                    >
                      Grafana
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <a
                      href="https://protobuf.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-primary"
                    >
                      Protocol Buffers
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-xl">Frontend</h4>
                <ul className="space-y-2.5 text-base text-muted-foreground md:text-lg">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      <a
                        href="https://react.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-primary"
                      >
                        React
                      </a>
                      {" / "}
                      <a
                        href="https://angular.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-primary"
                      >
                        Angular
                      </a>
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <a
                      href="https://tanstack.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-primary"
                    >
                      TanStack Router/Start
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <a
                      href="https://tailwindcss.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-primary"
                    >
                      Tailwind CSS
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <a
                      href="https://ui.shadcn.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-primary"
                    >
                      Shadcn UI
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
