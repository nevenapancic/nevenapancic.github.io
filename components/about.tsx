"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a bachelor degree in{" "}
        <span className="font-medium">Biology</span>, one master in <span className="font-medium">Environmental Policy</span> and second in <span className="font-medium">Environment and Resource Management</span> I decided to pursue my
        passion for programming. I enrolled in the <span className="font-medium">Le Wagon</span> coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I love the feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, and Ruby on Rails
        </span>
        . I am also familiar with TypeScript. I am always looking to
        learn new technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy running halfmarathones (I am a proud owner of 25+ medals) and sweing clothes. In fact I had my own fashion brand Kalas <a href="https://www.instagram.com/__kalas___/?hl=en" target="_blank" rel="noopener noreferrer">
        <span className="underline">(check it out)</span>.
</a>  I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning more about{" "}
        <span className="font-medium">Project management</span>.
      </p>
    </motion.section>
  );
}
