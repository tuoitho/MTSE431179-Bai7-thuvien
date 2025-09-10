import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart phải được dùng bên trong một CartProvider');
  }
  return context;
};