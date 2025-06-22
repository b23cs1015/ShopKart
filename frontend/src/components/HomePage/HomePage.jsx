import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';

const categories = [
  {
    name: 'Fashion',
    image: 'https://source.unsplash.com/600x400/?fashion,clothes',
    subcategories: ['Men', 'Women', 'Kids']
  },
  {
    name: 'Electronics',
    image: 'https://source.unsplash.com/600x400/?electronics,gadgets',
    subcategories: ['Mobiles', 'Laptops', 'Accessories']
  },
  {
    name: 'Home',
    image: 'https://source.unsplash.com/600x400/?furniture,home',
    subcategories: ['Furniture', 'Kitchen', 'Decor']
  }
];

const HomePage = () => {

  const navigate = useNavigate();
  
  return (
    <div className={styles.cardGrid}>
    {categories.map(cat => (
        <div key={cat.id} className={styles.card}>
        <div className={styles.name}>{cat.name}</div>
        <img src={cat.image} alt={cat.name} className={styles.image} />
        <div className={styles.subcategories}>
            {cat.subcategories.map(sub => (
            <div
            key={sub} 
            className={styles.sub}
            onClick={() => navigate(`/subcategory/${sub.toLowerCase()}`)}
            style={{ cursor: 'pointer' }}
            >
              {sub}
            </div>
            ))}
        </div>
        </div>
    ))}
    </div>


  );
};

export default HomePage;
