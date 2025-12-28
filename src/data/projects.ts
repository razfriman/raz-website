export type Project = {
  title: string;
  subTitle: string;
  tags: string[];
  description: string;
  link?: string;
  featured?: boolean;
  features?: string[];
  iconBgColor?: string; // Background color for icon container
  hoverOverlayColor?: string; // Hover overlay color
  borderColor?: string; // Border color
  icon?: "bootstepper" | "fortnite" | "tesla" | "lucide"; // Icon identifier
  lucideIcon?: string; // Lucide icon name (e.g., "RectangleGoggles", "HardDrive")
};

export const projects: Project[] = [
  {
    title: "Bootstepper",
    subTitle: "The World's Largest Modern Line Dance Database",
    featured: true,
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
    description:
      "A high-performance, mobile-first platform that fixes everything wrong with traditional line dance websites. It's 'Spotify meets IMDb' for the line dance world, serving a massive library of 160,000+ dances, 22,000+ choreographers, and 650,000+ videos.",
    features: [
      "AI-Powered Step Sheet Editor",
      "Live Session Management for Event Hosts",
      "Smart Playlists with Spotify/YT Integration",
      "Real-Time Analytics & Trending Charts",
    ],
    link: "https://bootstepper.com",
    iconBgColor: "bg-orange-500",
    hoverOverlayColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20 dark:border-orange-500/40",
    icon: "bootstepper",
  },
  {
    title: "RazTracker",
    subTitle: "Fortnite Analytics Platform",
    featured: true,
    tags: ["C#", "MongoDB", "Angular", "Reverse Engineering", "UE5"],
    description:
      "Fortnite Analytics application that processes gameplay recordings from Unreal Engine 5. Provides insights into match history and performance for 2,000+ users and 10M+ analyzed players.",
    link: "https://raztracker.friman.au/",
    iconBgColor: "bg-blue-500",
    hoverOverlayColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20 dark:border-blue-500/40",
    icon: "fortnite",
  },
  {
    title: "TeslaLib",
    subTitle: "C# Wrapper for Tesla API",
    tags: ["C#", ".NET Core", "API"],
    description:
      "A comprehensive C# library to access Tesla Motors' API to manage vehicle settings. Supports .NET Core and Standard.",
    link: "https://github.com/razfriman/TeslaLib",
    iconBgColor: "bg-red-500",
    hoverOverlayColor: "bg-red-500/10",
    borderColor: "border-red-500/20 dark:border-red-500/40",
    icon: "tesla",
  },
  {
    title: "RazzleServer",
    subTitle: "MapleStory Server Emulator",
    tags: ["C#", ".NET", "Docker", "Networking"],
    description:
      "MapleStory server emulator for version v40b. Written in C#, it emulates the original game logic and network protocol, allowing for local or online play.",
    link: "https://github.com/razfriman/RazzleServer",
    iconBgColor: "bg-orange-500",
    hoverOverlayColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20 dark:border-orange-500/40",
    icon: "lucide",
    lucideIcon: "HardDrive",
  },
  {
    title: "Cobol Parser",
    subTitle: "Semantic COBOL Parsing Framework",
    tags: ["C#", "Antlr", "Language Design"],
    description:
      "Complete semantic parsing framework supporting multiple COBOL dialects. Used by Fortune 500 companies like JP-Morgan and Nissan for code transformation and analysis.",
    iconBgColor: "bg-emerald-500",
    hoverOverlayColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20 dark:border-emerald-500/40",
    icon: "lucide",
    lucideIcon: "HardDrive",
  },
  {
    title: "ARWorld",
    subTitle: "Multiplayer AR Drawing",
    tags: ["Swift", "ARKit", "C#", ".NET"],
    description:
      "A collaborative multiplayer iOS application using ARKit that allows users to draw in 3D space together in real-time.",
    iconBgColor: "bg-pink-500",
    hoverOverlayColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20 dark:border-pink-500/40",
    icon: "lucide",
    lucideIcon: "RectangleGoggles",
  },
  {
    title: "Snap2Ask",
    subTitle: "Visual Q&A Service",
    tags: ["Objective-C", "PHP", "REST API"],
    description:
      "A graphical question and answer service. Implemented the iOS frontend and a PHP REST API backend.",
    link: "https://github.com/razfriman/Snap2Ask",
    iconBgColor: "bg-cyan-500",
    hoverOverlayColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20 dark:border-cyan-500/40",
    icon: "lucide",
    lucideIcon: "MessageCircleQuestion",
  },
  {
    title: "Calculator for Glass",
    subTitle: "Voice-Controlled Calculator",
    tags: ["Java", "Google Glass", "Voice Recognition"],
    description:
      "Voice-activated calculator for Google Glass that analyzes voice input to solve arithmetic equations.",
    link: "https://github.com/razfriman/GlassCalculator",
    iconBgColor: "bg-indigo-500",
    hoverOverlayColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/20 dark:border-indigo-500/40",
    icon: "lucide",
    lucideIcon: "Glasses",
  },
];
