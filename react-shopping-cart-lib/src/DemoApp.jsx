import React from 'react';
import { CartProvider, useCart, ShoppingCart, Button, Card } from './lib';

// Component giả lập danh sách sản phẩm
const ProductList = () => {
  const { addToCart } = useCart();
  
  const products = [
    { id: 'p1', name: 'Laptop Dell XPS 13', price: 1500 },
    { id: 'p2', name: 'Chuột Logitech MX Master 3', price: 100 },
    { id: 'p3', name: 'Bàn phím cơ Keychron K2', price: 80 },
    { id: 'p4', name: 'Màn hình LG UltraWide', price: 400 },
    { id: 'p5', name: 'Webcam Logitech C920', price: 70 },
  ];

  return (
    <div>
      <h2 style={{ marginBottom: '1rem', color: '#2d3748' }}>Danh sách sản phẩm</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {products.map(product => (
          <Card key={product.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#2d3748' }}>{product.name}</h4>
              <p style={{ margin: 0, color: '#4a5568', fontWeight: 'bold' }}>${product.price}</p>
            </div>
            <Button onClick={() => addToCart(product)}>Thêm vào giỏ</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

function DemoApp() {
  return (
    <CartProvider>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '2rem',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
      }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '2rem', 
          color: '#2d3748',
          fontSize: '2.5rem'
        }}>
          🛍️ Demo Thư viện Giỏ hàng React
        </h1>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '2fr 1fr', 
          gap: '2rem',
          alignItems: 'start'
        }}>
          <ProductList />
          <div style={{ position: 'sticky', top: '2rem' }}>
            <ShoppingCart />
          </div>
        </div>
      </div>
    </CartProvider>
  );
}

export default DemoApp;