import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
  const [ shouldGoToCheckout, setShouldGoToCheckout ] = useState(false);
  const { cartItems, setCartState } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    setShouldGoToCheckout(true);
  };

  useEffect(() => {
    if (shouldGoToCheckout) {
      navigate('/checkout');
      setCartState(false);
    }
  }, [shouldGoToCheckout, navigate, setCartState]);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => <CartItem key={ item.id } cartItem={ item }/>)}
      </div>
      <Button onClick={goToCheckout}>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;