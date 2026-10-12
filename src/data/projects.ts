import type { Project } from "../types/Project";

export const projects: Project[] = [
  {
    id: 1,
    logo: "/logos/maintenance-handover.webp",
    title: "Maintenance Handover Dashboard",
    description:
      "Full-stack shift handover application designed for mining maintenance workflows.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    githubUrl: "https://github.com/buildwithseb/maintenance-handover-tracker",
    demo: "https://maintenance-handover-tracker.vercel.app/",
  },
  {
    id: 2,
    logo: "/logos/game-hub.webp",
    title: "Game Hub",
    description:
      "Responsive video game discovery application built with React and TypeScript. Users can browse, search, and filter games by genre, platform, and rating using data from the RAWG API.",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Vite",
      "Chakra UI",
      "REST API",
      "RAWG API",
    ],
    githubUrl: "https://github.com/buildwithseb/game-hub",
    demo: "https://game-hub-seven-lime.vercel.app/",
  },
];
