import { createFileRoute, Link } from "@tanstack/react-router";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import Bootstepper from "@/components/icons/bootstepper";
import Canva from "@/components/icons/canva";
import SpaceX from "@/components/icons/spacex";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="space-y-12">
        <div className="space-y-6">
          <h1 className="font-extrabold text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-primary">Raz</span>
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed md:text-xl">
            Staff Software Engineer at <strong>Canva</strong>{" "}
            <Canva className="mb-1 inline h-5 w-5" />. I build high-impact
            AI-driven products. I am passionate about LLMs, generative design,
            and high-performance systems.
            <br />
            Outside of work, I run <strong>Bootstepper</strong>{" "}
            <Bootstepper color="default" className="mb-1 inline h-5 w-5" />, a
            platform for the line dance world.
          </p>
          <div className="flex gap-4">
            <Button
              render={
                <a
                  href="/Resume_Raz_Friman.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                >
                  GitHub
                </a>
              }
            />
          </div>
        </div>

        <section className="space-y-6">
          <h2 className="font-bold text-3xl tracking-tight">Experience</h2>
          <div className="grid gap-6">
            <Card className="group relative overflow-hidden border-muted p-6 transition-all hover:bg-muted/50">
              <div className="absolute top-0 left-0 h-full w-1 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div className="space-y-1">
                  <h3 className="flex items-center gap-2 font-bold text-xl">
                    Staff Software Engineer @ Canva
                    <Canva className="h-6 w-6" />
                  </h3>
                  <div className="font-medium text-primary text-sm">
                    MAR 2023 - PRESENT
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <p className="text-muted-foreground leading-relaxed">
                    Delivered high-impact AI design-generation capabilities
                    across Image2Design, Website Design, and Guided
                    Presentations.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <p className="text-muted-foreground leading-relaxed">
                    Productionized LocalDevProxy, a stable local development
                    platform used by 70+ engineers to dramatically speed up
                    backend iteration.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <p className="text-muted-foreground leading-relaxed">
                    Shipped novel techniques such as differential-diffusion
                    background generation (CMDBG) and LLM-guided design
                    creation.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="group relative overflow-hidden border-muted p-6 transition-all hover:bg-muted/50">
              <div className="absolute top-0 left-0 h-full w-1 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div className="space-y-1">
                  <h3 className="flex items-center gap-2 font-bold text-xl">
                    Senior Software Engineer @ Canva
                    <Canva className="h-6 w-6" />
                  </h3>
                  <div className="font-medium text-primary text-sm">
                    NOV 2018 - MAR 2023
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <p className="text-muted-foreground leading-relaxed">
                    Designed and implemented a system to search and index the
                    entire library of ~4,000,000 Canva templates in ~100 locales
                    globally.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <p className="text-muted-foreground leading-relaxed">
                    Implemented a real-time system to count template publishes
                    for creator compensation.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <p className="text-muted-foreground leading-relaxed">
                    Rewrote a local development tool and reduced runtime by 80%,
                    saving ~20,000 hours of CI work per year.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="group relative overflow-hidden border-muted p-6 transition-all hover:bg-muted/50">
              <div className="absolute top-0 left-0 h-full w-1 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div className="space-y-1">
                  <h3 className="flex items-center gap-2 font-bold text-xl">
                    Software Engineer II @ SpaceX
                    <SpaceX className="h-6 w-6" />
                  </h3>
                  <div className="font-medium text-primary text-sm">
                    MAY 2016 - DEC 2017
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <p className="text-muted-foreground leading-relaxed">
                    Designed and implemented integrations for commands and
                    telemetry into the mission-critical system for procedure
                    running used by all launch engineers.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <p className="text-muted-foreground leading-relaxed">
                    Created the algorithm for Falcon-9 rocket booster serial
                    number assignment and reusability management.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <p className="text-muted-foreground leading-relaxed">
                    Developed a FMECA (Failure Mode Effects and Criticality
                    Analysis) tool for detecting single points of failures on
                    the rocket.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="group relative overflow-hidden border-muted p-6 transition-all hover:bg-muted/50">
              <div className="absolute top-0 left-0 h-full w-1 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div className="space-y-1">
                  <h3 className="font-bold text-xl">
                    Software Engineer @ In-Com Data Systems
                  </h3>
                  <div className="font-medium text-primary text-sm">
                    JAN 2010 - MAY 2016 & DEC 2017 - NOV 2018
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <p className="text-muted-foreground leading-relaxed">
                    Designed and implemented a Language Parsing Framework used
                    by Fortune-500 companies (JP-Morgan, Nissan, etc.) for
                    COBOL, Java, C#, and Assembly.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <p className="text-muted-foreground leading-relaxed">
                    Architected and implemented a Chatbot application platform
                    with AI integrations including Google DialogFlow, Watson AI,
                    and Microsoft Luis.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <p className="text-muted-foreground leading-relaxed">
                    Developed integrations for Slack, Discord, and Facebook
                    Messenger.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <FeaturedProjects />

        <section className="space-y-6 rounded-3xl bg-muted/50 p-8 py-12 text-center">
          <h2 className="font-bold text-3xl">
            Interested in working together?
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <Button size="lg" render={<Link to="/contact">Get in Touch</Link>} />
        </section>
      </div>
    </div>
  );
}
