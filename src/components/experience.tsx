import { Briefcase, HardDrive } from "lucide-react";
import Canva from "@/components/icons/canva";
import SpaceX from "@/components/icons/spacex";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Experience = {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  iconType: "canva" | "spacex" | "briefcase" | "lucide";
  iconBgColor: string;
  borderColor: string;
  hoverOverlayColor: string;
  lucideIcon?: string;
};

const experiences: Experience[] = [
  {
    title: "Staff Software Engineer",
    company: "Canva",
    period: "MAR 2023 - PRESENT",
    achievements: [
      "Delivered high-impact AI design-generation capabilities across Image2Design, Website Design, and Guided Presentations.",
      "Productionized LocalDevProxy, a stable local development platform used by 70+ engineers to dramatically speed up backend iteration.",
      "Shipped novel techniques such as differential-diffusion background generation (CMDBG) and LLM-guided design creation.",
    ],
    iconType: "canva",
    iconBgColor: "bg-blue-500",
    borderColor: "border-blue-500/20 dark:border-blue-500/40",
    hoverOverlayColor: "bg-blue-500/10",
  },
  {
    title: "Senior Software Engineer",
    company: "Canva",
    period: "NOV 2018 - MAR 2023",
    achievements: [
      "Designed and implemented a system to search and index the entire library of ~4,000,000 Canva templates in ~100 locales globally.",
      "Implemented a real-time system to count template publishes for creator compensation.",
      "Rewrote a local development tool and reduced runtime by 80%, saving ~20,000 hours of CI work per year.",
    ],
    iconType: "canva",
    iconBgColor: "bg-blue-500",
    borderColor: "border-blue-500/20 dark:border-blue-500/40",
    hoverOverlayColor: "bg-blue-500/10",
  },
  {
    title: "Software Engineer II",
    company: "SpaceX",
    period: "MAY 2016 - DEC 2017",
    achievements: [
      "Designed and implemented integrations for commands and telemetry into the mission-critical system for procedure running used by all launch engineers.",
      "Created the algorithm for Falcon-9 rocket booster serial number assignment and reusability management.",
      "Developed a FMECA (Failure Mode Effects and Criticality Analysis) tool for detecting single points of failures on the rocket.",
    ],
    iconType: "spacex",
    iconBgColor: "bg-[#A7A9AC]",
    borderColor: "border-[#005288]/20 dark:border-[#005288]/40",
    hoverOverlayColor: "bg-[#005288]/10",
  },
  {
    title: "Software Engineer",
    company: "In-Com Data Systems",
    period: "JAN 2010 - MAY 2016 & DEC 2017 - NOV 2018",
    achievements: [
      "Designed and implemented a Language Parsing Framework used by Fortune-500 companies (JP-Morgan, Nissan, etc.) for COBOL, Java, C#, and Assembly.",
      "Architected and implemented a Chatbot application platform with AI integrations including Google DialogFlow, Watson AI, and Microsoft Luis.",
      "Developed integrations for Slack, Discord, and Facebook Messenger.",
    ],
    iconType: "lucide",
    lucideIcon: "HardDrive",
    iconBgColor: "bg-emerald-500",
    borderColor: "border-emerald-500/20 dark:border-emerald-500/40",
    hoverOverlayColor: "bg-emerald-500/10",
  },
];

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden border shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        experience.borderColor,
        experience.hoverOverlayColor,
      )}
    >
      <div className="relative flex flex-col gap-6 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "flex items-center justify-center rounded-xl p-3 shadow-md transition-transform duration-300 group-hover:scale-110",
                experience.iconBgColor,
              )}
            >
              {experience.iconType === "canva" && <Canva className="h-6 w-6" />}
              {experience.iconType === "spacex" && (
                <SpaceX className="h-6 w-6" color="#005288" />
              )}
              {experience.iconType === "briefcase" && (
                <Briefcase className="h-6 w-6 text-white" />
              )}
              {experience.iconType === "lucide" &&
                experience.lucideIcon === "HardDrive" && (
                  <HardDrive className="h-6 w-6 text-white" />
                )}
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-2xl text-gray-900 dark:text-white">
                {experience.title} @ {experience.company}
              </h3>
              <div className="font-medium text-gray-600 text-sm dark:text-gray-400">
                {experience.period}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {experience.achievements.map((achievement, index) => (
            <div key={index} className="flex items-start gap-3">
              <div
                className={cn(
                  "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                  experience.iconType === "spacex"
                    ? "bg-[#005288]"
                    : experience.iconBgColor,
                )}
              />
              <p className="text-base text-gray-600 leading-relaxed dark:text-gray-300">
                {achievement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export function Experience() {
  return (
    <section className="space-y-6">
      <h2 className="font-bold text-3xl tracking-tight">Experience</h2>
      <div className="grid gap-6">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`${experience.company}-${index}`}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
}
