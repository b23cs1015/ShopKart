import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import styles from './ProductDetails.module.css';

const dummyProducts = [
  {
    id: 1,
    name: 'Cool Shirt',
    size: 'M',
    company: 'Nike',
    price: 999,
    reviews: 4.5,
    description: 'A stylish and comfortable shirt.',
    images: [
      'https://images.unsplash.com/photo-1585386959984-a4155224f270?auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1593032465171-8cc0c6a47df4?auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1593032903243-bb7ae1c08cd5?auto=format&fit=crop&w=500&q=80',
    ]
  },
  {
    id: 2,
    name: 'Stylish Jeans',
    size: 'L',
    company: 'Levis',
    price: 1999,
    reviews: 4.0,
    description: 'Trendy jeans with premium fabric.',
    images: [
      'https://images.unsplash.com/photo-1585386959984-a4155224f270?auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1593032465171-8cc0c6a47df4?auto=format&fit=crop&w=500&q=80'
    ]
  },
  {
    id: 3,
    name: 'Smartphone',
    size: '-',
    company: 'Samsung',
    price: 15000,
    reviews: 4.3,
    description: 'Latest Samsung smartphone.',
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80',
      'https://images.pexels.com/photos/6311608/pexels-photo-6311608.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.unsplash.com/photo-1585386959984-a4155224f270?auto=format&fit=crop&w=500&q=80'
    ]
  },
  {
    id: 4,
    name: 'Elegant Dress',
    size: 'S',
    company: 'Zara',
    price: 2500,
    reviews: 4.7,
    description: 'Elegant dress perfect for parties.',
    images: [
      'https://images.pexels.com/photos/6311608/pexels-photo-6311608.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/6311615/pexels-photo-6311615.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/6311610/pexels-photo-6311610.jpeg?auto=compress&cs=tinysrgb&w=500'
    ]
  },
];


const ProductDetails = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();

  const product = dummyProducts.find(p => p.id === parseInt(productId));
  const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || '');
  const [fade, setFade] = useState(true);

  if (!product) return <h2>Product not found</h2>;

  const handleImageChange = (img) => {
    setFade(false);
    setTimeout(() => {
      setSelectedImage(img);
      setFade(true)
    }, 200)
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageGallery}>
        <div className={styles.mainImageWrapper}>
          <img src={selectedImage} alt={product.name} className={`${styles.mainImage} ${fade ? styles.fadeIn : styles.fadeOut}`} />
        </div>
        <div className={styles.thumbnails}>
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`${styles.thumbnail} ${selectedImage === img ? styles.activeThumbnail : ''}`}
              onClick={() => handleImageChange(img)}
            />
          ))}
        </div>
      </div>

      <div className={styles.details}>
        <h1>{product.name}</h1>
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
    </div>
  );
};

export default ProductDetails;