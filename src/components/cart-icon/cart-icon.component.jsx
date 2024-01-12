import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
  const { cartIsOpened, setCartState, cartItems, totalItemsQuantity } = useContext(CartContext);

  const toggleCart = () => setCartState(!cartIsOpened);

  return (
    <div className="cart-icon-container" onClick={ toggleCart }>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{ totalItemsQuantity }</span>
    </div>
  );
};

export default CartIcon;
