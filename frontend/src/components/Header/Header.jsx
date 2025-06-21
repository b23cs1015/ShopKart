import React from 'react';
import styles from './Header.module.css';
import { FaUserCircle, FaShoppingCart, FaClipboardList } from 'react-icons/fa';
import { Link, Links } from 'react-router-dom';


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>ShopKart</div>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          className={styles.searchInput}
        />
      </div>

      <div className={styles.navLinks}>
        <Link to='/profile' className={styles.link}>
          <FaUserCircle className={styles.icon} />
          <span className={styles.text}>Profile</span>
        </Link>
        <Link to='/cart' className={styles.link}>
          <FaClipboardList className={styles.icon} />
          <span className={styles.text}>Orders</span>
        </Link>
        <Link to='/orders' className={styles.link}>
          <FaShoppingCart className={styles.icon} />
          <span className={styles.text}>Cart</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
