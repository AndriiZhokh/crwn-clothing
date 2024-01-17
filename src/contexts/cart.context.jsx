import { createContext, useEffect, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map(item => item.id === productToAdd.id ?
      { ...item, quantity: item.quantity + 1 } :
      item);
  }

  return [ ...cartItems, { ...productToAdd, quantity: 1} ];
};

const removeCartItem = (cartItems, productId) => {
  return cartItems.filter(item => item.id !== productId);
};

const updateTotalQuantity = (cartItems) => {
  return cartItems.reduce((totalQuantity, cartItem) => {
    return totalQuantity + cartItem.quantity;
  }, 0);
};

const updateCartItems = (cartItems, updatedCartItem) => {
  return cartItems.map(item => item.id === updatedCartItem.id ? updatedCartItem : item);
};

export const CartContext = createContext({
  cartIsOpened: false,
  setCartState: () => {},
  cartItems: [],
  addItemToCart: () => {},
  totalItemsQuantity: 0,
});

export const CartProvider = ({ children }) => {
  const [ cartIsOpened, setCartState ] = useState(false);
  const [ cartItems, setCartItems ] = useState([]);
  const [ totalItemsQuantity, setTotalItemsQuantity ] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productId) => {
    setCartItems(removeCartItem(cartItems, productId));
  };

  const updateProduct = (updatedProduct) => {
    setCartItems(updateCartItems(cartItems, updatedProduct));
  };

  useEffect(() => {
    setTotalItemsQuantity(updateTotalQuantity(cartItems));
  }, [cartItems]);

  const value = { cartIsOpened, setCartState, addItemToCart, removeItemFromCart, updateProduct, cartItems, totalItemsQuantity };

  return <CartContext.Provider value={ value }>{ children }</CartContext.Provider>
};
