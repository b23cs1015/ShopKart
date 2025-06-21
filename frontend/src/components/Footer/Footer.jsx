import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to="/" className={styles.link}>Home</Link>
      <Link to="/developers" className={styles.link}>Developers</Link>
    </footer>
  );
};

export default Footer;
