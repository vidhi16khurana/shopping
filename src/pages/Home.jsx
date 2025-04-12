import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="home-container">
      <h2 className="home-title">All Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-img" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price}</p>
            <Link to={`/product/${product.id}`} className="product-link">View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}