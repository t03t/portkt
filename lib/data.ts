import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import canvaclone from "@/public/canvaclone.png";
import styleme from "@/public/styleme.png";
import captiony from "@/public/captiony.png";
import terminal from "@/public/terminal.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Teaching Assistant",
    location: "Waltham, MA",
    description:
      "Teaching Assistant for Advanced Programming in Java and Software Engineering at Brandeis University.",
    icon: React.createElement(CgWorkAlt),
    date: "2020-2022",
  },
  {
    title: "Lead Teaching Assistant",
    location: "Waltham, MA",
    description:
      "Lead Teaching Assistant for Operating Systems at Brandeis University.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Software Engineering Internship",
    location: "Mountain View, CA",
    description:
      "I interned at a Silicon Valley tech company (Pure Storage).",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Graduated University",
    location: "Waltham, MA",
    description:
      "I graduated with a Bachelor's degree in Computer Science and minor in Psychology from Brandeis University.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Software Engineer",
    location: "Mountain View, CA",
    description:
      "I worked as a software engineer at a Silicon Valley tech company.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "San Francisco, CA",
    description:
      "Freeeeeeeelancing",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Caption-Y",
    description:
      "A search engine for finding movies and TV shows. Users can enter queries and get results. Queries can be lines from movies or things that have been said in the movie (not necessarily quotes) or descriptions of the plot.",
    tags: ["Flask", "Python", "PostgreSQL", "React", "ElasticSearch"],
    imageUrl: captiony,
    imgCaption: "Screenshot of Caption-Y Website showing a search result for 'The Matrix'.",
  },
  {
    title: "styleMe",
    description:
      "StyleMe is a full-stack web application built using Ruby on Rails, designed to provide users with a dynamic platform for exploring and experimenting with different clothing styles and fashion combinations.",
    tags: ["Ruby on Rails", "PostgreSQL", "Bootstrap", "Amazon S3", "HTML", "CSS", "Javascript", "AJAX", "JQuery"],
    imageUrl: styleme,
    imgCaption: "Screenshot of styleMe application showing a user's profile with a customizable clothing style.",
  },
  {
    title: "Canva Clone",
    description:
      "A front-end prototype of a Canva clone application created using HTML, CSS, and JavaScript. This project showcases a visually appealing and intuitive user interface for users to design various graphics.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: canvaclone,
    imgCaption: "Screenshot of Canva Clone application showing a user's workspace with a simple design.",
  },
  {
    title: "Unixish",
    description:
      "Implemented a Unix shell using Java multi-threading to support background processes, file system, redirection, and text operation commands. Enabled use of basic commands e.g., cd, pwd, ls, >, grep, etc. and concurrent execution of piped commands with &",
    tags: ["Java", "Multithreading", "Concurrency"],
    imageUrl: terminal,
    imgCaption: "Screenshot of Unixish shell application showing a user entering commands and seeing their results.",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "GraphQL",
  "PostgreSQL",
  "Python",
  "Java",
] as const;