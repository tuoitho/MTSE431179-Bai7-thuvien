# React Shopping Cart Library

🛍️ Một thư viện React component đơn giản và linh hoạt cho giỏ hàng, cung cấp đầy đủ chức năng quản lý sản phẩm trong giỏ hàng.

## ✨ Tính năng

- ✅ Thêm sản phẩm vào giỏ hàng
- ✅ Cập nhật số lượng sản phẩm  
- ✅ Xóa sản phẩm khỏi giỏ hàng
- ✅ Tính tổng giá trị giỏ hàng
- ✅ UI component đẹp và responsive
- ✅ CSS Modules - không conflict với style dự án
- ✅ TypeScript friendly
- ✅ Dễ dàng tùy chỉnh và mở rộng

## 📦 Cài đặt

```bash
npm install @tuoitho/react-shopping-cart-lib
```

## 🚀 Sử dụng cơ bản

```jsx
import React from 'react';
import { 
  CartProvider, 
  ShoppingCart, 
  useCart, 
  Button 
} from '@tuoitho/react-shopping-cart-lib';

// Import CSS styles
import '@tuoitho/react-shopping-cart-lib/dist/styles.css';

// Component sản phẩm sử dụng hook useCart
const ProductItem = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Button onClick={() => addToCart(product)}>
        Thêm vào giỏ
      </Button>
    </div>
  );
};

// App component chính
function App() {
  const products = [
    { id: '1', name: 'Laptop', price: 1000 },
    { id: '2', name: 'Mouse', price: 50 },
  ];

  return (
    <CartProvider>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {/* Danh sách sản phẩm */}
        <div>
          {products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
        
        {/* Giỏ hàng */}
        <ShoppingCart />
      </div>
    </CartProvider>
  );
}
```

## 📚 API Documentation

### `CartProvider`
Wrap component này xung quanh ứng dụng của bạn để cung cấp context giỏ hàng.

```jsx
<CartProvider>
  {/* Your app components */}
</CartProvider>
```

### `useCart()` Hook
Hook để truy cập và thao tác với giỏ hàng.

```jsx
const {
  items,           // Mảng sản phẩm trong giỏ hàng
  addToCart,       // Thêm sản phẩm: (product) => void
  removeFromCart,  // Xóa sản phẩm: (productId) => void  
  updateQuantity,  // Cập nhật số lượng: (productId, quantity) => void
  clearCart,       // Xóa tất cả: () => void
  getTotalPrice,   // Tổng giá: () => number
  getTotalItems    // Tổng số lượng: () => number
} = useCart();
```

### Components

#### `<ShoppingCart />`
Component hiển thị giỏ hàng với đầy đủ chức năng.

#### `<Button variant="primary|danger" onClick={handler} />`
Component button có sẵn với 2 variant.

#### `<Card>`
Component card container.

## 🎨 Tùy chỉnh Style

Thư viện sử dụng CSS Modules để tránh conflict. Bạn có thể override CSS bằng cách:

```css
/* Override trong file CSS của bạn */
.your-custom-cart {
  /* Custom styles */
}
```

## 📋 Yêu cầu hệ thống

- React >= 18.2.0
- React DOM >= 18.2.0

## 🤝 Đóng góp

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add some amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Mở Pull Request

## 📄 License

MIT © [TuoiTho](https://github.com/tuoitho)

## 🔗 Links

- [GitHub Repository](https://github.com/tuoitho/react-shopping-cart-lib)
- [NPM Package](https://www.npmjs.com/package/@tuoitho/react-shopping-cart-lib)
- [Issues](https://github.com/tuoitho/react-shopping-cart-lib/issues)
