import { createContext, useState } from 'react';

export const CartContext = createContext({
  cartIsOpened: false,
  setCartState: () => {},
});

export const CartProvider = ({ children }) => {
  const [ cartIsOpened, setCartState ] = useState(false);
  const value = { cartIsOpened, setCartState };

  return <CartContext.Provider value={ value }>{ children }</CartContext.Provider>
};
