import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import styles from './ProductDetails.module.css';

const dummyProducts = [
  { id: 1, name: 'Cool Shirt', size: 'M', company: 'Nike', price: 999, reviews: 4.5, description: 'A stylish and comfortable shirt.', image: '/images/shirt.jpg' },
  { id: 2, name: 'Stylish Jeans', size: 'L', company: 'Levis', price: 1999, reviews: 4.0, description: 'Trendy jeans with premium fabric.', image: '/images/jeans.jpg' },
  { id: 3, name: 'Smartphone', size: '-', company: 'Samsung', price: 15000, reviews: 4.3, description: 'Latest Samsung smartphone.', image: '/images/phone.jpg' },
  { id: 4, name: 'Elegant Dress', size: 'S', company: 'Zara', price: 2500, reviews: 4.7, description: 'Elegant dress perfect for parties.', image: '/images/dress.jpg' },
];

const ProductDetails = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const product = dummyProducts.find(p => p.id === parseInt(productId));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className={styles.container}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className={styles.image} />
      <p><strong>Brand:</strong> {product.company}</p>
      <p><strong>Size:</strong> {product.size}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p><strong>Rating:</strong> {product.reviews}★</p>
      <p><strong>Description:</strong> {product.description}</p>

      <button
      className={styles.addButton}
      onClick={() => {
          addToCart(product);
          toast.success(`${product.name} added to cart!`);
      }}
      >
      Add to Cart 🛒
      </button>

    </div>
  );
};

export default ProductDetails;
