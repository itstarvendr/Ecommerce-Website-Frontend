import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import { addToCart } from '../redux/actions/cartActions';

const ProductDetailContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.products.find((p) => p.id === parseInt(id)));

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert('Product added to cart successfully');
  };

  return <ProductDetail product={product} handleAddToCart={handleAddToCart} />;
};

export default ProductDetailContainer;
