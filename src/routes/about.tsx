import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="font-extrabold text-4xl tracking-tight sm:text-5xl">
            About Me
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed md:text-xl">
            Staff Software Engineer, Line Dancer, and Tech Enthusiast based in
            Sydney.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="space-y-4 p-6">
            <h2 className="font-semibold text-2xl">Professional Journey</h2>
            <p className="text-muted-foreground">
              I'm Raz Friman, a Staff Software Engineer currently based in
              Sydney, Australia. My career has taken me from architecting
              language parsers for Fortune 500 companies to building
              mission-critical systems for SpaceX, and now leading AI design
              generation at Canva.
            </p>
            <p className="text-muted-foreground">
              I graduated with both an M.S. and B.S. in Computer Science from
              Southern Methodist University (SMU) in Dallas, Texas, with a
              specialization in Cybersecurity and a minor in Mathematics.
            </p>
            <p className="text-muted-foreground">
              I thrive at the intersection of complex backend systems and
              innovative frontend experiences, always looking for ways to
              leverage AI to solve real-world problems.
            </p>
          </Card>

          <Card className="space-y-4 p-6">
            <h2 className="font-semibold text-2xl">Interests & Hobbies</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">Line Dancing</h3>
                <p className="text-muted-foreground">
                  An avid line dancer and the creator of{" "}
                  <strong>Bootstepper</strong>, a platform dedicated to
                  modernizing the line dance community through technology.
                </p>
              </div>
              <div>
                <h3 className="font-bold">Photography & Travel</h3>
                <p className="text-muted-foreground">
                  You'll often find me traveling with my DJI Mavic Pro drone and
                  GoPro, capturing the world from new perspectives.
                </p>
              </div>
              <div>
                <h3 className="font-bold">Outdoor Activities</h3>
                <p className="text-muted-foreground">
                  I enjoy hiking, running, and Orienteering—a sport that
                  combines physical endurance with navigational challenges.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="mb-4 font-semibold text-2xl">Skills</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div>
              <h4 className="mb-2 font-bold">Languages</h4>
              <ul className="text-muted-foreground text-sm">
                <li>TypeScript / JavaScript</li>
                <li>C# / .NET</li>
                <li>Java</li>
                <li>Python</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-bold">Cloud & Infra</h4>
              <ul className="text-muted-foreground text-sm">
                <li>AWS / Cloudflare / Vercel</li>
                <li>Docker / Bazel</li>
                <li>PostgreSQL / MongoDB</li>
                <li>DynamoDB</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-bold">AI & Search</h4>
              <ul className="text-muted-foreground text-sm">
                <li>Generative AI / LLMs</li>
                <li>ElasticSearch</li>
                <li>Prometheus / Jaeger</li>
                <li>Protocol Buffers</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-bold">Frontend</h4>
              <ul className="text-muted-foreground text-sm">
                <li>React / Angular</li>
                <li>TanStack Router/Start</li>
                <li>Tailwind CSS</li>
                <li>Shadcn UI</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
