import React from 'react';
import { useParams } from 'react-router-dom';
import '../CSS/Product.css';

const products = [
  { id: 1, name: 'Colombian Coffee', description: 'Rich and bold.', price: 12.99, image: '/assets/colombian.jpg' },
  { id: 2, name: 'Ethiopian Coffee', description: 'Fruity and aromatic.', price: 14.99, image: '/assets/ethiopian.jpg' },
  { id: 3, name: 'Brazilian Coffee', description: 'Smooth and nutty.', price: 10.99, image: '/assets/brazilian.jpg' },
];

const Product = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
