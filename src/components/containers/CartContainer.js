import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../components/Cart';
import { removeFromCart } from '../redux/actions/cartActions';

const CartContainer = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleRemoveFromCart = (productId) => {
    if (window.confirm('Are you sure you want to remove this item from the cart?')) {
      dispatch(removeFromCart(productId));
      alert('Item removed from cart successfully');
    }
  };

  return <Cart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />;
};

export default CartContainer;
