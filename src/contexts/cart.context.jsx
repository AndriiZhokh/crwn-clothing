import { createContext, useEffect, useState, useReducer } from 'react';

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

const updateTotalPrice = (cartItems) => {
  return cartItems.reduce((totalPrice, item) => {
    return totalPrice + (item.price * item.quantity);
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
  totalPrice: 0,
});

export const CART_ACTION_TYPES = {
  TOGGLE_CART_STATE: 'TOGGLE_CART_STATE',
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_CART_STATE:
      return {
        ...state,
        cartIsOpened: !state.cartIsOpened,
      }
    default:
      throw new Error(`Action ${type} is not defined`);
  }
};

const INITIAL_STATE = {
  cartIsOpened: false,
};

export const CartProvider = ({ children }) => {
  // TODO: convert to reducers the rest items in this context
  const [ { cartIsOpened }, dispatch ] = useReducer(cartReducer, INITIAL_STATE);

  const [ cartItems, setCartItems ] = useState([]);
  const [ totalItemsQuantity, setTotalItemsQuantity ] = useState(0);
  const [ totalPrice, setTotalPrice ] = useState(0);

  const setCartState = () => dispatch({ type: CART_ACTION_TYPES.TOGGLE_CART_STATE });

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
    setTotalPrice(updateTotalPrice(cartItems));
  }, [cartItems]);

  const value = {
    cartIsOpened,
    setCartState,
    addItemToCart,
    removeItemFromCart,
    updateProduct,
    cartItems,
    totalItemsQuantity,
    totalPrice,
  };

  return <CartContext.Provider value={ value }>{ children }</CartContext.Provider>
};
