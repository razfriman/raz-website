export interface Project {
  title: string;
  subTitle: string;
  tags: string[];
  description: string;
  link?: string;
  featured?: boolean;
  features?: string[];
  /** Background color for icon container */
  iconBgColor?: string;
  /** Hover overlay color */
  hoverOverlayColor?: string;
  /** Border color */
  borderColor?: string;
  /** Icon identifier */
  icon?: "bootstepper" | "fortnite" | "tesla" | "lucide";
  /** Lucide icon name (e.g., "RectangleGoggles", "HardDrive") */
  lucideIcon?: string;
}

export const projects: Project[] = [
  {
    borderColor: "border-orange-500/20 dark:border-orange-500/40",
    description:
      "A high-performance, mobile-first platform that fixes everything wrong with traditional line dance websites. It's 'Spotify meets IMDb' for the line dance world, serving a massive library of 160,000+ dances, 22,000+ choreographers, and 650,000+ videos.",
    featured: true,
    features: [
      "AI-Powered Step Sheet Editor",
      "Live Session Management for Event Hosts",
      "Smart Playlists with Spotify/YT Integration",
      "Real-Time Analytics & Trending Charts",
    ],
    hoverOverlayColor: "bg-orange-500/10",
    icon: "bootstepper",
    iconBgColor: "bg-orange-500",
    link: "https://bootstepper.com",
    subTitle: "The World's Largest Modern Line Dance Database",
    tags: [
      "TypeScript",
      "PostgreSQL",
      "React",
      "TanStack Start",
      "AI",
      "Spotify API",
      "Analytics",
      "Music Recognition",
    ],
    title: "Bootstepper",
  },
  {
    borderColor: "border-blue-500/20 dark:border-blue-500/40",
    description:
      "Fortnite Analytics application that processes gameplay recordings from Unreal Engine 5. Provides insights into match history and performance for 2,000+ users and 10M+ analyzed players.",
    featured: true,
    hoverOverlayColor: "bg-blue-500/10",
    icon: "fortnite",
    iconBgColor: "bg-blue-500",
    subTitle: "Fortnite Analytics Platform",
    tags: ["C#", "MongoDB", "Angular", "Reverse Engineering", "UE5"],
    title: "RazTracker",
  },
  {
    borderColor: "border-red-500/20 dark:border-red-500/40",
    description:
      "A comprehensive C# library to access Tesla Motors' API to manage vehicle settings. Supports .NET Core and Standard.",
    hoverOverlayColor: "bg-red-500/10",
    icon: "tesla",
    iconBgColor: "bg-red-500",
    link: "https://github.com/razfriman/TeslaLib",
    subTitle: "C# Wrapper for Tesla API",
    tags: ["C#", ".NET Core", "API"],
    title: "TeslaLib",
  },
  {
    borderColor: "border-orange-500/20 dark:border-orange-500/40",
    description:
      "MapleStory server emulator for version v40b. Written in C#, it emulates the original game logic and network protocol, allowing for local or online play.",
    hoverOverlayColor: "bg-orange-500/10",
    icon: "lucide",
    iconBgColor: "bg-orange-500",
    link: "https://github.com/razfriman/RazzleServer",
    lucideIcon: "HardDrive",
    subTitle: "MapleStory Server Emulator",
    tags: ["C#", ".NET", "Docker", "Networking"],
    title: "RazzleServer",
  },
  {
    borderColor: "border-emerald-500/20 dark:border-emerald-500/40",
    description:
      "Complete semantic parsing framework supporting multiple COBOL dialects. Used by Fortune 500 companies like JP-Morgan and Nissan for code transformation and analysis.",
    hoverOverlayColor: "bg-emerald-500/10",
    icon: "lucide",
    iconBgColor: "bg-emerald-500",
    lucideIcon: "HardDrive",
    subTitle: "Semantic COBOL Parsing Framework",
    tags: ["C#", "Antlr", "Language Design"],
    title: "Cobol Parser",
  },
  {
    borderColor: "border-pink-500/20 dark:border-pink-500/40",
    description:
      "A collaborative multiplayer iOS application using ARKit that allows users to draw in 3D space together in real-time.",
    hoverOverlayColor: "bg-pink-500/10",
    icon: "lucide",
    iconBgColor: "bg-pink-500",
    lucideIcon: "RectangleGoggles",
    subTitle: "Multiplayer AR Drawing",
    tags: ["Swift", "ARKit", "C#", ".NET"],
    title: "ARWorld",
  },
  {
    borderColor: "border-cyan-500/20 dark:border-cyan-500/40",
    description:
      "A graphical question and answer service. Implemented the iOS frontend and a PHP REST API backend.",
    hoverOverlayColor: "bg-cyan-500/10",
    icon: "lucide",
    iconBgColor: "bg-cyan-500",
    link: "https://github.com/razfriman/Snap2Ask",
    lucideIcon: "MessageCircleQuestion",
    subTitle: "Visual Q&A Service",
    tags: ["Objective-C", "PHP", "REST API"],
    title: "Snap2Ask",
  },
  {
    borderColor: "border-indigo-500/20 dark:border-indigo-500/40",
    description:
      "Voice-activated calculator for Google Glass that analyzes voice input to solve arithmetic equations.",
    hoverOverlayColor: "bg-indigo-500/10",
    icon: "lucide",
    iconBgColor: "bg-indigo-500",
    link: "https://github.com/razfriman/GlassCalculator",
    lucideIcon: "Glasses",
    subTitle: "Voice-Controlled Calculator",
    tags: ["Java", "Google Glass", "Voice Recognition"],
    title: "Calculator for Glass",
  },
];
