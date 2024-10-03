import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from '../slices/likesSlice';
import { RootState } from '../redux/store';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const likedProducts = useSelector((state: RootState) => state.likes.likedProducts);
  const isLiked = likedProducts.includes(product.id);

  const handleLikeClick = () => {
    dispatch(toggleLike(product.id));
  };

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}>
      <h3>{product.title}</h3>
      <img src={product.thumbnail} alt={product.title} style={{ width: '100%' }} />
      <p>{product.description}</p>
      <button onClick={handleLikeClick} style={{ color: isLiked ? 'red' : 'black' }}>
        {isLiked ? '❤️ Liked' : '🤍 Like'}
      </button>
    </div>
  );
};

export default ProductCard;
