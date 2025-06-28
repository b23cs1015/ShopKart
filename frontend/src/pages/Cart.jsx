import React from 'react';
import { useCart } from '../context/CartContext';
import styles from './Cart.module.css';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles.container}>
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className={styles.empty}>Your cart is empty.</p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cartItems.map((item, index) => (
              <li key={index} className={styles.cartItem}>
                <div>
                  <strong>{item.name}</strong> - ₹{item.price}<br />
                  {item.company} - {item.size} - {item.reviews}★
                </div>
                <button onClick={() => removeFromCart(item.id)} className={styles.removeBtn}>
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.summary}>
            <p><strong>Total:</strong> ₹{totalAmount}</p>
            <button onClick={() => alert('Checkout functionality coming soon!')} className={styles.checkoutBtn}>
              Checkout
            </button>
            <button onClick={clearCart} className={styles.clearBtn}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
