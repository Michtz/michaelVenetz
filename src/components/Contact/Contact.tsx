import type { FC } from 'react';
import styles from './Contact.module.scss';

const Contact: FC = () => {
  return (
    <section id="kontakt" aria-label="Kontakt" className={styles.contact}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Kontakt</h2>

        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.label}>E-Mail</span>
            <a
              href="mailto:michael@michaelvenetz.ch"
              className={styles.link}
            >
              michael@michaelvenetz.ch
            </a>
          </li>

          <li className={styles.item}>
            <span className={styles.label}>Standort</span>
            <span className={styles.value}>Horw, Schweiz</span>
          </li>

          <li className={styles.item}>
            <span className={styles.label}>LinkedIn</span>
            <a
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              className={styles.link}
            >
              LinkedIn
            </a>
          </li>

          <li className={styles.item}>
            <span className={styles.label}>GitHub</span>
            <a
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              className={styles.link}
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { Contact };
