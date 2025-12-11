/** @format */

'use client';

import React from 'react';
import SectionHeading from './sectionHeading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submitBtn';
import toast from 'react-hot-toast';
import { useLanguage } from '@/context/languageContext';
import { translations } from '@/lib/translations';

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>{t.contact.title}</SectionHeading>

      <p className='text-gray-700 -mt-6 dark:text-white/80'>
        {t.contact.intro}{' '}
        <a
          href='https://www.linkedin.com/in/pancic/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <u>LinkedIn</u>
        </a>
        /
        <a
          href='https://github.com/nevenapancic/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <u>GitHub</u>
        </a>{' '}
        {t.contact.or}
      </p>
      <form
        className='mt-10 flex flex-col dark:text-black'
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success(t.contact.successMessage);
        }}
      >
        <input
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          placeholder={t.contact.emailPlaceholder}
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='message'
          placeholder={t.contact.messagePlaceholder}
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
