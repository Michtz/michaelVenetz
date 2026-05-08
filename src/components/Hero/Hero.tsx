import type { FC } from 'react';
import styles from './Hero.module.scss';

const Hero: FC = () => {
  return (
    <section id="hero" aria-label="Introduction" className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.name}>Michael Venetz</h1>
        <p className={styles.headline}>Frontend Developer &amp; Designer</p>
        <p className={styles.sub}>
          Coder mit Auge fürs Detail – UI, UX und sauberes Frontend-Engineering aus einer Hand.
        </p>
        <a href="" className={styles.cta}>
          Kontakt aufnehmen (kommt bald)
        </a>
      </div>
    </section>
  );
};

export { Hero };
