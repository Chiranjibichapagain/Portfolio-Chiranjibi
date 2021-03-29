import React from 'react';

import styles from './Footer.module.css';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import twitter from '../../assets/twitter.svg';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.courtosy}>© Chiranjibi Chapagain 2020</p>
      <div className={styles.icons}>
        <a href="https://www.linkedin.com/in/chiranjibi-chapagain-4aa57595/">
          <img className={styles.icon} src={linkedin} alt="linkedin icon" />
        </a>
        <a href="https://github.com/Chiranjibichapagain">
          <img className={styles.icon} src={github} alt="Github icon" />
        </a>
        <a href="https://twitter.com/Asaamaajik">
          <img className={styles.icon} src={twitter} alt="Twitter icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
