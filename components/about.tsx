/** @format */

'use client';

import React from 'react';
import SectionHeading from './sectionHeading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        After completing a bachelor's degree in{' '}
        <span className='font-medium'>Biology</span> and two master's
        degrees—one in <span className='font-medium'>Environmental Policy</span>{' '}
        and another in{' '}
        <span className='font-medium'>Environment and Resource Management</span>
        —I decided to pursue my passion for programming. I enrolled in the{' '}
        <span className='font-medium'>Le Wagon</span> coding bootcamp, where I
        learned <span className='font-medium'>full-stack web development</span>.
      </p>

      <p className='mb-3'>
        What I enjoy most about programming is the problem-solving aspect; I{' '}
        <span className='italic'>
          love the moment when everything finally clicks
        </span>{' '}
        and a solution comes together. My core stack includes{' '}
        <span className='font-medium'>
          React, Next.js, TypeScript, and Ruby on Rails
        </span>
        . I'm always eager to explore new technologies and continuously expand
        my skill set.
      </p>

      <p>
        <span className='italic'>When I'm not coding</span>, I enjoy running
        halfmarathones (I am a proud owner of 25+ medals) and sweing clothes. In
        fact I had my own fashion brand Kalas{' '}
        <a
          href='https://www.instagram.com/__kalas___/?hl=en'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='underline'>(check it out)</span>.
        </a>{' '}
        I also enjoy <span className='font-medium'>learning new things</span>. I
        am currently learning more about{' '}
        <span className='font-medium'>Project management</span>.
      </p>
    </motion.section>
  );
}
