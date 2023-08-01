import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortProducts } from '../redux/actions/productActions';

const SortButton = () => {
  const dispatch = useDispatch();
  const [isAscending, setIsAscending] = useState(true);

  const handleSort = () => {
    dispatch(sortProducts(isAscending ? 'asc' : 'desc'));
    setIsAscending(!isAscending);
  };

  return (
    <button onClick={handleSort}>
      Sort by Price {isAscending ? <span>&uarr;</span> : <span>&darr;</span>}
    </button>
  );
};

export default SortButton;
