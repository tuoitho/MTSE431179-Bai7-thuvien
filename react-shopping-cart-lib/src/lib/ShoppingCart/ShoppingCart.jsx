import React from 'react';
import { useCart } from '../hooks/useCart';
import Button from '../components/Button/Button';
import Card from '../components/Card/Card';
import styles from './ShoppingCart.module.css';

export const ShoppingCart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

  if (!items || items.length === 0) {
    return (
      <Card className={styles.cartContainer}>
        <div className={styles.cartEmpty}>Giỏ hàng của bạn đang trống.</div>
      </Card>
    );
  }

  return (
    <Card className={styles.cartContainer}>
      <div className={styles.cartHeader}>
        <h3 className={styles.cartTitle}>Giỏ hàng</h3>
        <Button onClick={clearCart} variant="danger" className={styles.clearBtn}>
          Xóa tất cả
        </Button>
      </div>
      
      <div className={styles.cartItems}>
        {items.map(item => (
          <div key={item.id} className={styles.cartItem}>
            <div className={styles.itemInfo}>
              <span className={styles.itemName}>{item.name}</span>
              <span className={styles.itemPrice}>${item.price.toFixed(2)}</span>
            </div>
            
            <div className={styles.itemControls}>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                className={styles.quantityInput}
              />
              <span className={styles.itemTotal}>
                ${(item.price * item.quantity).toFixed(2)}
              </span>
              <Button 
                onClick={() => removeFromCart(item.id)} 
                variant="danger"
                className={styles.removeBtn}
              >
                Xóa
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.cartFooter}>
        <div className={styles.cartTotal}>
          <strong>Tổng cộng: ${getTotalPrice().toFixed(2)}</strong>
        </div>
      </div>
    </Card>
  );
};