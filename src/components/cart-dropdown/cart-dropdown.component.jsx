import { CartDropdownContainer, CartItems } from './cart-dropdown.styles.jsx';
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
    <CartDropdownContainer>
      <CartItems>
        {cartItems.map((item) => <CartItem key={ item.id } cartItem={ item }/>)}
      </CartItems>
      <Button onClick={goToCheckout}>Go To Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;