import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import styles from './ProductDetails.module.css';

const dummyProducts = [
  { id: 1,
    name: 'Cool Shirt',
    size: 'M',
    company: 'Nike',
    price: 999,
    reviews: 4.5,
    description: 'A stylish and comfortable shirt.',
    images: ['/images/shirt1.jpg', '/images/shirt2.jpg', '/images/shirt3.jpg'] },

];

const ProductDetails = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const product = dummyProducts.find(p => p.id === parseInt(productId))
  const [selectedImg, setSelectedImg] = useState(product?.images[0])

  if(!product) return <h2>Product not found</h2>;

  return(
    <div className={styles.container}>

      <div className={styles.left}>
        <img src={selectedImg} alt={product.name} className={styles.mainImage}/>
        <div className={styles.thumbnailRow}>
          {product.images.map((img, index) => (
              <img
              key={index}
              src={img}
              alt={`Thumb ${index}`}
              onClick={() => setSelectedImg(img)}
              className={`${styles.thumbnail} ${selectedImg === img ? styles.activeThumb : ''}`}
              />
            ))}
        </div>
      </div>

      <div className={styles.right}>
            <h2 className={styles.name}>{product.name}</h2>
            <p className={styles.rating}>⭐ {product.review} / 5</p>
            <p><strong>Brand:</strong> {product.company}</p>
            <p><strong>Size:</strong> {product.size}</p>
            <p><strong>Price:</strong> ₹{product.price}</p>
            <p className={styles.description}><strong>Description:</strong> {product.description}</p>

            <button className={styles.addButton}
            onClick={() => {
              addToCart(product);
              toast.success(`${product.name} added to cart!`);
            }}
            >
              Add to Cart
            </button>
      </div>

    </div>
  );
  // const { productId } = useParams();
  // const { addToCart } = useCart();
  // const product = dummyProducts.find(p => p.id === parseInt(productId));

  // if (!product) return <h2>Product not found</h2>;

  // return (
  //   <div className={styles.container}>
  //     <h1>{product.name}</h1>
  //     <img src={product.image} alt={product.name} className={styles.image} />
  //     <p><strong>Brand:</strong> {product.company}</p>
  //     <p><strong>Size:</strong> {product.size}</p>
  //     <p><strong>Price:</strong> ₹{product.price}</p>
  //     <p><strong>Rating:</strong> {product.reviews}★</p>
  //     <p><strong>Description:</strong> {product.description}</p>

  //     <button
  //     className={styles.addButton}
  //     onClick={() => {
  //         addToCart(product);
  //         toast.success(`${product.name} added to cart!`);
  //     }}
  //     >
  //     Add to Cart 🛒
  //     </button>

  //   </div>
  // );
};

export default ProductDetails;
