/** @format */

'use client';

import React from 'react';
import SectionHeading from './sectionHeading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { educationData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/themeContext';
import { useLanguage } from '@/context/languageContext';
import { translations } from '@/lib/translations';

export default function Education() {
  const { ref } = useSectionInView('Education');
  const { theme } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id='education' ref={ref} className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>{t.education.title}</SectionHeading>
      <VerticalTimeline lineColor=''>
        {educationData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255, 255, 255, 0.5)',
              }}
              date={t.education.educationData[index]?.date || item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
                fontSize: '1.5rem',
              }}
            >
              <h3 className='font-semibold capitalize'>
                {t.education.educationData[index]?.title || item.title}
              </h3>
              <p className='font-normal !mt-0'>
                {t.education.educationData[index]?.location || item.location}
              </p>
              <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>
                {t.education.educationData[index]?.description ||
                  item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
