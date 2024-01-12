import { createContext, useState } from 'react';

const addcCartItem = (cartItems, productToAdd) => {
  const existingcCartItem = cartItems.find(item => item.id === productToAdd.id);

  if (existingcCartItem) {
    return cartItems.map(item => item.id === productToAdd.id ?
      { ...item, quantity: item.quantity + 1 } :
      item);
  }

  return [ ...cartItems, { ...productToAdd, quantity: 1} ];
  
};

export const CartContext = createContext({
  cartIsOpened: false,
  setCartState: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [ cartIsOpened, setCartState ] = useState(false);
  const [ cartItems, setCartItems ] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addcCartItem(cartItems, productToAdd));
  };

  const value = { cartIsOpened, setCartState, addItemToCart, cartItems };

  return <CartContext.Provider value={ value }>{ children }</CartContext.Provider>
};
