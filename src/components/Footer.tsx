import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} M. Rizwan Ayyaz. All rights reserved.
    </footer>
  );
};

export default Footer;