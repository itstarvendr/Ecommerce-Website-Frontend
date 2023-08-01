import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AllProducts from '../components/AllProducts';
import { fetchProducts, deleteProduct } from '../redux/actions/productActions';

const AllProductsContainer = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDeleteProduct = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteProduct(productId));
      alert('Product deleted successfully');
    }
  };

  return <AllProducts products={products} handleDeleteProduct={handleDeleteProduct} />;
};

export default AllProductsContainer;
