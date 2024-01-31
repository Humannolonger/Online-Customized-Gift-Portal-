// Products.jsx

import React, { useState, useEffect } from 'react';
import '../assets/css/Products.css';

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulating fetching products from a backend API
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    // Simulating API response
    const sampleProducts = [
      {
        id: 1,
        name: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 29.99,
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 49.99,
        image: 'https://via.placeholder.com/150',
      },
      // Add more products as needed
    ];

    setProducts(sampleProducts);
  };

  return (
    <div className="products-container">
      <h1 className="products-title">Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price}</p>
              <button
                className="add-to-cart-button"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
