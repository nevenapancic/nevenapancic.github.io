import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wvImg from "@/public/wisevouyage.jpeg";
import thriftImg from "@/public/thriftique.jpeg";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Teaching assistant at Le Wagon bootcamp",
    location: "Amsterdam, Netherlands",
    description:
    "As a Teaching Assistant at Le Wagon's coding bootcamp, responsibilities include assisting instructors during lectures, conducting code reviews, providing one-on-one guidance to students, facilitating group projects, and assisting with technical troubleshooting (mostly in HTML, CSS, JavaScript, and Ruby/Ruby on Rails).",
    icon: React.createElement(LuGraduationCap),
    date: "03/2024 - present",
  },
  {
    title: "Junior software developer",
    location: "Amsterdam, Netherlands",
    description:
      "Freelancer utilizing React, Next Js, and JavaScript, crafting seamless solutions, collaborating closely with the team on implementation, code cleanliness ensuring effective client-centric project delivery.",
    icon: React.createElement(FaReact),
    date: "03/2024 - present",
  },
] as const;

export const educationData = [
  {
    title: "BSc Biology",
    location: "University of Belgrade",
    description:
    "With specialization in Ecology and protection of the environment",
    icon: React.createElement(LuGraduationCap),
    date: "10/2016 - 07/2020",
  },
  {
    title: "MSc Environmental Policy",
    location: "University of Belgrade",
    description:
    "Thesis: Impact of mass fast fashion consumption on the environment",
    icon: React.createElement(LuGraduationCap),
    date: "10/2020 - 07/2021",
  },
  {
    title: "MSc Environment and Resource Management",
    location: "Vrije University Amsterdam",
    description:
    "Thesis: Drivers and patterns of agricultural change and their socio-environmental impact in Loznica, Serbia",
    icon: React.createElement(LuGraduationCap),
    date: "09/2021 - 07/2022",
  },
  {
    title: "Le Wagon coding bootcamp",
    location: "Amsterdam, Netherlands",
    description:
      "9 week full-time intensive coding bootcamp where I learned how to code from scratch using HTML, CSS, Bootstrap, Javascript, Vue.js, React, Figma, SQL, Git, GitHub,Heroku, Ruby on Rails. Participated in two projects: Thriftique, a clone of AirBnb for selling second-hand clothes and Wise Voyage, a travel app impowered by AI APIs.",
    icon: React.createElement(LuGraduationCap),
    date: "01/2024 - 03/2024",
  },
] as const;

export const projectsData = [
  {
    title: "Thriftique",
    description:
      "In a team of 4, crafted a pioneering marketplace merging sustainability with web development, specializing in second-hand clothing sales. Utilized Ruby on Rails, JavaScript, and more to innovate eco-conscious shopping in fashion.",
    tags: ["Ruby on Rails", "HTML", "CSS", "Javascript", "Heroku", "Figma", "SQL", "Git", "GitHub", "Bootstrap"],
    imageUrl: thriftImg,
  },
  {
    title: "Wise Voyage",
    description: "Led a 4-person team to develop a robust web app for trip planning, integrating advanced AI APIs. Using Ruby on Rails and JavaScript, focusing on seamless integration with accommodation booking services for enhanced user experience.",
    tags: ["Ruby on Rails", "HTML", "CSS", "Javascript", "Heroku", "Figma", "SQL", "Git", "GitHub", "Bootstrap"],
    imageUrl: wvImg,
  },
] as const;

export const skillsData = [
  "Ruby on Rails",
  "Ruby",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "SQL",
  "PostgreSQL",
  "Python",
  "Figma",
  "Bootstrap",
  "Framer Motion",
  "Heroku",
  "Postman",
  "SASS",
] as const;
