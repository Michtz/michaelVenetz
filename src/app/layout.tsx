import type { FC, ReactNode } from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import '@/components/globals.scss';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Michael Venetz – Frontend Developer & Designer',
  description:
    'Code mit Auge fürs Detail – UI, UX und sauberes Frontend-Engineering aus einer Hand.',
  openGraph: {
    title: 'Michael Venetz – Frontend Developer & Designer',
    description:
      'Code mit Auge fürs Detail – UI, UX und sauberes Frontend-Engineering aus einer Hand.',
    url: 'https://michaelvenetz.dev',
    siteName: 'Michael Venetz',
    locale: 'de_CH',
    type: 'website',
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html lang="de" className={inter.variable}>
    <body>{children}</body>
  </html>
);

export default RootLayout;
