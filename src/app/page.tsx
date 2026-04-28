import type { FC } from 'react';
import { Hero } from '@/components/Hero';
import { Contact } from '@/components/Contact';

const HomePage: FC = () => (
  <main>
    <Hero />
    <Contact />
  </main>
);

export default HomePage;
