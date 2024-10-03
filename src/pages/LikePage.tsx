import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const LikePage: React.FC = () => {
  const likedProductIds = useSelector((state: RootState) => state.likes.likedProducts);
  const [likedProducts, setLikedProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        const filteredProducts = data.products.filter((product: Product) =>
          likedProductIds.includes(product.id)
        );
        setLikedProducts(filteredProducts);
      });
  }, [likedProductIds]);

  return (
    <div>
      <h1>Liked Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {likedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default LikePage;
