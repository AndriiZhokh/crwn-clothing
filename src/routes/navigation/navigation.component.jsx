import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import './navigation.styles.scss';
import { CartContext } from '../../contexts/cart.context';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cartIsOpened } = useContext(CartContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo'/>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>SHOP</Link>
          {currentUser ? (
            <span className="nav-link" onClick={ signOutUser }>SIGN OUT</span>
          ) : (
            <Link className='nav-link' to='/auth'>SIGN IN</Link>
          )}
          <CartIcon />
        </div>
        {/* TODO: Create context for dropdown that will contain state whether dropdown is opened or not
            TODO: Also this context should contain info about items that were added to the cart */}
        { cartIsOpened && <CartDropdown /> }
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation