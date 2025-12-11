/** @format */

import Header from '@/components/header';
import './globals.css';
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/activeSectionContext';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/themeSwitch';
import ThemeContextProvider from '@/context/themeContext';
import LanguageContextProvider from '@/context/languageContext';
import LanguageSwitch from '@/components/languageSwitch';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nevena | Personal Portfolio',
  description:
    'Nevena is a Full-Stack Developer specializing in React, TypeScript, and cloud technologies.',
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👩‍💻</text></svg>",
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className='bg-[#F0E491] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#BBC863] opacity-70'></div>
        <div className='bg-[#658C58] absolute top-[-1rem] -z-10 left-0 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#31694E] opacity-80'></div>

        <ThemeContextProvider>
          <LanguageContextProvider>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Footer />

              <Toaster position='top-right' />
              <ThemeSwitch />
              <LanguageSwitch />
            </ActiveSectionContextProvider>
          </LanguageContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
