/** @format */

import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  // {
  //   name: 'Projects',
  //   hash: '#projects',
  // },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Education',
    hash: '#education',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Full Stack Developer',
    location: 'Miyagami · Amsterdam, Netherlands',
    description:
      'Building scalable custom software for innovators. Through pioneering brand strategy, design and development, we uncover the cultural tensions and human experiences that help companies stand out.',
    icon: React.createElement(CgWorkAlt),
    date: '08/2024 - Present',
    imageUrl: '/Miyagami.png',
  },
  {
    title: 'Full-Stack Web Development Teacher',
    location: 'Le Wagon · Amsterdam, Netherlands',
    description:
      'Teaching fundamental programming concepts in Ruby and database management. Providing personalized guidance in Ruby, Object-Oriented Programming (OOP), JavaScript, Ruby on Rails, and MVC architecture.',
    icon: React.createElement(LuGraduationCap),
    date: '06/2024 - Present',
    imageUrl: '/leWagon.png',
  },
  {
    title: 'Junior Software Developer',
    location: 'WebSpace · Remote',
    description:
      'Developing web applications for clients in a team using mainly React and Next.js. Crafting seamless solutions and ensuring effective client-centric project delivery.',
    icon: React.createElement(FaReact),
    date: '03/2024 - Present',
    imageUrl: '/WebSpace.png',
  },
  {
    title: 'Sales Associate / Learning Advisor',
    location: 'Le Wagon · Remote',
    description:
      'Advised future tech talents at Le Wagon on their coding journey through Data, Web Development, and No-Code bootcamps.',
    icon: React.createElement(CgWorkAlt),
    date: '05/2024 - 08/2024',
    imageUrl: '/leWagon.png',
  },
  {
    title: 'Teaching Assistant',
    location: 'Le Wagon · Amsterdam, Netherlands',
    description:
      'Assisted instructors during lectures, conducted code reviews, provided one-on-one guidance to students, and assisted with technical troubleshooting (mostly in HTML, CSS, JavaScript, and Ruby on Rails).',
    icon: React.createElement(LuGraduationCap),
    date: '03/2024 - 07/2024',
    imageUrl: '/leWagon.png',
  },
  {
    title: 'Branch Manager',
    location: 'Sushito · Amsterdam, Netherlands',
    description:
      'Rapidly promoted from Crew Member to Shift Lead, Assistant Manager, and finally Branch Manager. Responsible for team leadership, people management, stakeholder engagement, and ensuring operational efficiency.',
    icon: React.createElement(CgWorkAlt),
    date: '09/2021 - 02/2024',
    imageUrl: '/Sushito.png',
  },
  {
    title: 'Sustainable Projects Manager',
    location: 'Belgrade Pride · Serbia',
    description:
      'Planned and implemented sustainable projects for a queer education and engagement organization. Focused on stakeholder engagement and community outreach.',
    icon: React.createElement(CgWorkAlt),
    date: '11/2020 - 08/2021',
    imageUrl: '/prideBelgrade.png',
  },
  {
    title: 'High School Professor of Biology',
    location: 'XIV Belgrade Grammar School · Serbia',
    description:
      'Taught biology to high school students with a focus on making complex concepts (cell function, DNA replication) engaging. Aimed to inspire interest in natural sciences beyond the standard curriculum and foster a positive learning environment.',
    icon: React.createElement(LuGraduationCap),
    date: '02/2021 - 08/2021',
  },
  {
    title: 'Laboratory Assistant',
    location: 'Serbian Environmental Protection Agency · Serbia',
    description:
      'Examined samples from freshwater ecosystems. Conducted field sampling and organism classification to categorize water pollution levels, followed by detailed reporting.',
    icon: React.createElement(CgWorkAlt),
    date: '09/2020 - 02/2021',
    imageUrl: '/laboratoryAssistant.png',
  },
] as const;

export const educationData = [
  {
    title: 'Le Wagon coding bootcamp',
    location: 'Amsterdam, Netherlands',
    description:
      '9 week full-time intensive coding bootcamp where I learned how to code from scratch using HTML, CSS, Bootstrap, Javascript, Vue.js, React, Figma, SQL, Git, GitHub,Heroku, Ruby on Rails. Participated in two projects: Thriftique, a clone of AirBnb for selling second-hand clothes and Wise Voyage, a travel app impowered by AI APIs.',
    icon: React.createElement(LuGraduationCap),
    date: '01/2024 - 03/2024',
  },
  {
    title: 'MSc Environment and Resource Management',
    location: 'Vrije University Amsterdam',
    description:
      'Thesis: Drivers and patterns of agricultural change and their socio-environmental impact in Loznica, Serbia',
    icon: React.createElement(LuGraduationCap),
    date: '09/2021 - 07/2022',
  },
  {
    title: 'MSc Environmental Policy',
    location: 'University of Belgrade',
    description:
      'Thesis: Impact of mass fast fashion consumption on the environment',
    icon: React.createElement(LuGraduationCap),
    date: '10/2020 - 07/2021',
  },
  {
    title: 'BSc Biology',
    location: 'University of Belgrade',
    description:
      'With specialization in Ecology and protection of the environment',
    icon: React.createElement(LuGraduationCap),
    date: '10/2016 - 07/2020',
  },
] as const;

export const projectsData = [
  {
    title: 'Wise Voyage',
    description:
      'Led a 4-person team to develop a robust web app for trip planning, integrating advanced AI APIs. Using Ruby on Rails and JavaScript, focusing on seamless integration with accommodation booking services for enhanced user experience.',
    tags: [
      'Ruby on Rails',
      'HTML',
      'CSS',
      'Javascript',
      'Heroku',
      'SQL',
      'GitHub',
      'Bootstrap',
    ],
    imageUrls: [
      '/wisevouyage.jpeg',
      '/wv1.jpeg',
      '/wv2.jpeg',
      '/wv3.jpeg',
      '/wv4.jpeg',
      '/wv5.jpeg',
      '/wv7.jpeg',
    ],
  },
  {
    title: 'Thriftique',
    description:
      'In a team of 4, crafted a pioneering marketplace merging sustainability with web development, specializing in second-hand clothing sales. Utilized Ruby on Rails, JavaScript, and more to innovate eco-conscious shopping in fashion.',
    tags: [
      'Ruby on Rails',
      'HTML',
      'CSS',
      'Javascript',
      'Heroku',
      'Figma',
      'GitHub',
      'Bootstrap',
    ],
    imageUrls: ['/th2.jpeg', '/thriftique.jpeg'],
  },
] as const;

export const skillsData = [
  // Frontend Technologies
  'React',
  'TypeScript',
  'Redux & Redux Toolkit',
  'Tailwind CSS',
  'Recharts',
  'Next.js',

  // Backend & Cloud
  'Firebase (Functions, Firestore, Auth, Hosting)',
  'Supabase (PostgreSQL, GoTrue)',
  'Google Cloud Platform (GCP)',
  'Cloud Functions',
  'Node.js',

  // Databases
  'PostgreSQL',
  'Firestore',
  'Firebase Realtime Database',
  'SQL',

  // CI/CD & DevOps
  'CircleCI',
  'Docker',
  'Firebase Tools',

  // Testing & Quality
  'Jest',

  // API & Integrations
  'Axios',

  // Languages & Scripting
  'JavaScript',
  'HTML',
  'CSS',
  'SASS',
  'Ruby on Rails',
  'Ruby',
  'Python',

  // Design & UX
  'Figma',

  // Development Patterns
  'Microservices',
  'Real-time Applications',

  // Version Control & Collaboration
  'GitHub',

  // Additional Tools
  'Postman',
  'Heroku',
  'Vercel',
  'Sentry',
] as const;
