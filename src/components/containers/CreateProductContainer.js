import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CreateProduct from '../components/CreateProduct';
import { addProduct } from '../redux/actions/productActions';

const CreateProductContainer = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      price: parseFloat(price),
    };
    dispatch(addProduct(newProduct));
    alert('Product added successfully');
    setName('');
    setPrice('');
  };

  return (
    <CreateProduct
      name={name}
      price={price}
      setName={setName}
      setPrice={setPrice}
      handleSubmit={handleSubmit}
    />
  );
};

export default CreateProductContainer;
