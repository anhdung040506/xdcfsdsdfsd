import React, { useState } from 'react';
import ProductItem from './ProductItem';

const products = [
  { id: 1, name: 'Sản phẩm A', price: 100 },
  { id: 2, name: 'Sản phẩm B', price: 200 },
  { id: 3, name: 'Sản phẩm C', price: 300 },
];

function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    // Thêm sản phẩm vào giỏ hàng
    setCart((prevCart) => [...prevCart, product]);
  };

  const totalProducts = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ maxWidth: '350px', margin: '30px auto', fontFamily: 'Arial, sans-serif' }}>
      <h3>Giỏ hàng: {totalProducts} sản phẩm, tổng tiền: {totalPrice}đ</h3>

      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAdd={handleAddToCart}
        />
      ))}
    </div>
  );
}

export default ShoppingCart;
