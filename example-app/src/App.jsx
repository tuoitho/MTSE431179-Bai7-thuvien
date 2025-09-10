import React from 'react';
// Import các thành phần từ thư viện
import { CartProvider, useCart, ShoppingCart, Button, Card } from '@tuoitho/react-shopping-cart-lib';
// Import file CSS đã được đóng gói
import '@tuoitho/react-shopping-cart-lib/dist/styles.css';
import './App.css'

// Component giả lập danh sách sản phẩm
const ProductList = () => {
  const { addToCart } = useCart();
  const products = [
    { id: 'p1', name: '💻 Laptop Dell XPS 13', price: 1500 },
    { id: 'p2', name: '🖱️ Chuột Logitech MX Master 3', price: 100 },
    { id: 'p3', name: '⌨️ Bàn phím cơ Keychron K2', price: 80 },
    { id: 'p4', name: '🖥️ Màn hình LG UltraWide', price: 400 },
    { id: 'p5', name: '📹 Webcam Logitech C920', price: 70 },
  ];

  return (
    <div className="product-section">
      <h2>🛒 Danh sách sản phẩm</h2>
      <div className="product-grid">
        {products.map(product => (
          <Card key={product.id} className="product-card">
            <div className="product-info">
              <h4 className="product-name">{product.name}</h4>
              <p className="product-price">${product.price}</p>
            </div>
            <Button onClick={() => addToCart(product)}>
              Thêm vào giỏ
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <div className="app-container">
        <header className="app-header">
          <h1>🛍️ Demo Thư viện Giỏ hàng React</h1>
          <p>Sử dụng package: <code>@tuoitho/react-shopping-cart-lib@0.1.0</code></p>
        </header>
        
        <main className="app-main">
          <ProductList />
          <aside className="cart-section">
            <ShoppingCart />
          </aside>
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
