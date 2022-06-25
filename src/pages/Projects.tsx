import { Icon } from "@/ui/Icon";
import { ActionIcon, Box, Card, Container, Text, Title } from "@mantine/core";

type Project = {
  title: string;
  subTitle: string;
  description: string;
  link?: string;
};
const projects: Project[] = [
  {
    title: "RazTracker",
    subTitle: "C#, .NET, Docker",
    description: "Fortnite Stats Tracker",
    link: "https://raztracker.com",
  },
  {
    title: "RazzleServer",
    subTitle: "C#, .NET, Docker",
    description:
      "MapleStory server emulator for MapleStory v40b written in C#. This server emulates the original game and allows user to play the game locally or online with friends",
    link: "https://github.com/razfriman/RazzleServer",
  },
  {
    title: "LineDance",
    subTitle: "C#, .NET, Angular 10, PostgreSQL, Entity Framework",
    description:
      "Online portal for finding, sharing, and learning line dances. Users can upload new dances that the whole community can benefit from. Uses Spotifys API to link each dance to the songs they go with.",
  },
  {
    title: "ScavengerCity",
    subTitle: "C#, .NET, Angular 10, PostgreSQL, Entity Framework",
    description:
      "Online scavenger hunts around major urban areas. Fun challenges and riddles, great for groups, results in self guided tours around the city.",
  },
  {
    title: "ARWorld",
    subTitle: "Swift, ARKit, C#, .NET",
    description: `Created a multiplayer iOS application using ARKit that allows
  users to collaboratively draw in 3D space using their phones`,
  },
  {
    title: "TeslaLib",
    subTitle: "C#, .NET",
    description: `C# Library to access Tesla Motors’ API to manage the car’s settings. Recently updated to .NET Core/Standard`,
    link: "https://github.com/razfriman/TeslaLib",
  },
  {
    title: "MyRealEstate",
    subTitle: "Swift, NodeJS, AngularJS",
    description: `Application to help owners manage rental properties and track investments. Includes functionality
  for tenants to communicate with their landlord and make payments. Implemented NodeJS backend API
  as well as an iOS frontend`,
  },
  {
    title: "Out&About",
    subTitle: "Ionic, Cordova, iOS, Android, AngularJS",
    description: `Cofounded startup to organize social event for groups. Implemented hybrid mobile application for
  iOS and Android`,
  },
  {
    title: "Snap2Ask",
    subTitle: "Objective-C, PHP",
    description: `Graphical question/answer service. Implemented iOS frontend and REST API backend`,
    link: "https://github.com/razfriman/Snap2Ask",
  },
  {
    title: "MapleStoryHooks",
    subTitle: "C#, C++, Assembly",
    description: `Developed an application to decrypt TCP/IP packets for online game by reverse engineering
  the game client's internal network functions and hooking them to intercept unencrypted data`,
    link: "https://github.com/razfriman/MapleStoryHooks",
  },
  {
    title: "MapleLib",
    subTitle: "C#, .NET Core",
    description: `C# Library to assist developers with all tasks related to MapleStory,
  including file decryption, data editing, and network encryption/decryption`,
    link: "https://github.com/razfriman/MapleLib",
  },
  {
    title: "SnowSniffer",
    subTitle: "Java, Winpcap",
    description:
      "Tool to sniff network packets specific to MapleStory. Helps developers capture, decode, and sort network traffic",
    link: "https://github.com/razfriman/SnowMS",
  },
  {
    title: "Cobol Parser",
    subTitle: "C#, Antlr",
    description: `Parsing framework that supports complete semantic parsing of all COBOL programs.
   This parser supports many of the most popular COBOL dialiects, including Enterprise,
   OS/VS, ILE, etc. The AST generated allows you to visit, crawl, filter, and transform
   the AST in any way desirable. The following projects are child projects that use this
   parser to demonstrate its applications.`,
  },
  {
    title: "Calculator for Glass",
    subTitle: "Java",
    description: `Application analyzes a user\'s voice as input in order to solve simple arithmetic equations.`,
    link: "https://github.com/razfriman/GlassCalculator",
  },
  {
    title: "Dalek Robot",
    subTitle: "Java",
    description: `Application written in Java that communicates with an Arduino controlled robot
  over a Serial connection. The robot was built and programmed from the ground up to complete
  an obstacle course with many tasks along the way. The movement of the robot is completely autonomous.
  This is done by using sensors to detect where the robot is and what its currently doing.`,
    link: "https://github.com/razfriman/DalekRobot",
  },
];

const Project = ({ project }: { project: Project }) => {
  return (
    <Card>
      <Title sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {project.title}
        {project.link && (
          <ActionIcon size={32} component="a" href={project.link}
            target="_blank" aria-label={`${project.title} link`} >
            <Icon size={32} icon={project.link.includes('github') ? 'github' : 'share'} />
          </ActionIcon>
        )}
      </Title>
      <Text color="dimmed" mt="md">{project.subTitle}</Text>
      <Text mt="md">{project.description}</Text>
    </Card>
  );
};

export const Projects = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </Box>
    </Container>
  );
};
