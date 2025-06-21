import React from 'react'
import styles from './ProductCard.module.css'

const ProductCard = ({ product }) => {
    return (
        <div className={styles.card}>
            <img src={product.image} alt={product.name} className={styles.image} />
            <h3 className={styles.name}>{product.name}</h3>
            <p className={styles.price}>₹{product.price}</p>
            <button className={styles.button}>Add to Cart</button>
        </div>
    )
}

export default ProductCard