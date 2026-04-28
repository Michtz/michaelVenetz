import type { FC } from 'react';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';

const HomePage: FC = () => (
  <main>
    <Hero />
    <Skills />
    <Contact />
  </main>
);

export default HomePage;
