import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.nameAndContact}>
        <h1 className={styles.name}>MUHAMMAD RIZWAN AYYAZ</h1>
        <div className={styles.contactInfo}>
          <a href="mailto:rizwanayyaz@gmail.com">rizwanayyaz@gmail.com</a>
          <span>|</span>
          <a href="tel:+971586199047">+971 5861 99 047</a>
          <span>|</span>
          <a href="https://www.linkedin.com/in/muhammad-rizwan-ayyaz-93675027/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <img
        src="/profile.jpg"
        alt="Muhammad Rizwan Ayyaz"
        className={styles.profilePicture}
      />
    </header>
  );
};

export default Header;