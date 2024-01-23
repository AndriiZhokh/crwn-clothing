import { useContext } from 'react';
import { CartIconContainer, ItemCount, ShoppingIconContainer } from './cart-icon.styles.jsx';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
  const { cartIsOpened, setCartState, totalItemsQuantity } = useContext(CartContext);

  const toggleCart = () => setCartState(!cartIsOpened);

  return (
    <CartIconContainer onClick={ toggleCart }>
      <ShoppingIconContainer className="shopping-icon" />
      <ItemCount>{ totalItemsQuantity }</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
