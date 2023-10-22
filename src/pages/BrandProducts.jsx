// BrandProducts.js
import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ProductCardDetails from './ProductCardDetails';
import Advertisement from '../components/Advertisement'

const BrandProducts = () => {
  const { brandName } = useParams(); // Get the brandName from the URL parameter
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products based on the selected brand
    // You will need to replace this with your actual API endpoint
    fetch(`http://localhost:5000/products?brand=${brandName}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [brandName]);

  return (
    <div>
      <div>
      <Advertisement></Advertisement>
      </div>
      <h1>Products by {brandName}</h1>
      <div className="product-list grid grid-cols-1 md:grid-cols-4 gap-5 p-3 my-10">
        {products.map((product) => (
          <ProductCardDetails key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
