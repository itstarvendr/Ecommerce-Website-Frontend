import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cartItemsCount = useSelector((state) => state.cart.length);

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart ({cartItemsCount})</Link>
    </nav>
  );
};

export default Navbar;
