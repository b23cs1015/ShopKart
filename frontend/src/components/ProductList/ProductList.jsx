import React from 'react';
import styles from './ProductList.module.css';
import ProductCard from './ProductCard';

// Example product data (later replace with API data)
const products = [
  { id: 1, name: 'Product 1', price: 499, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 799, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 299, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', price: 999, image: 'https://via.placeholder.com/150' },
];

const ProductList = () => {
    return (
        <div className={styles.container}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductList