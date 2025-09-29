import React from 'react';

function ProductItem({ product, onAdd }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '15px',
      marginBottom: '15px',
      borderRadius: '6px',
      maxWidth: '300px',
    }}>
      <h4>{product.name}</h4>
      <p>Giá: {product.price}đ</p>
      <button
        onClick={() => onAdd(product)}
        style={{
          padding: '8px 12px',
          cursor: 'pointer',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        Thêm vào giỏ
      </button>
    </div>
  );
}

export default ProductItem;
