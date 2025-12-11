/** @format */

'use client';

import React from 'react';
import SectionHeading from './sectionHeading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { useLanguage } from '@/context/languageContext';
import { translations } from '@/lib/translations';

export default function About() {
  const { ref } = useSectionInView('About');
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>{t.about.title}</SectionHeading>
      <p className='mb-3'>{t.about.paragraph1}</p>

      <p className='mb-3'>{t.about.paragraph2}</p>

      <p>
        {language === 'en'
          ? "When I'm not coding, I enjoy running halfmarathones (I am a proud owner of 25+ medals) and sweing clothes. In fact I had my own fashion brand Kalas "
          : 'Kada ne kuckam kod, trčim polumaratone (ponosna sam vlasnica preko 25 medalja) i šijem odeću. Zapravo, imala sam i svoj modni brend Kalas '}
        <a
          href='https://www.instagram.com/__kalas___/?hl=en'
          target='_blank'
          rel='noopener noreferrer'
          className='underline hover:text-gray-600 dark:hover:text-gray-300 transition'
        >
          {language === 'en' ? '(check it out)' : '(pogledajte ovde)'}
        </a>
        .
      </p>
    </motion.section>
  );
}
