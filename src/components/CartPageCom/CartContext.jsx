import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeOneFromCart = (productId) => {
    setCartItems((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const toggleFavorite = (product) => {
    setFavoriteItems((prevFavorites) => {
      const isFavorite = prevFavorites.some((item) => item.id === product.id);
      return isFavorite
        ? prevFavorites.filter((item) => item.id !== product.id)
        : [...prevFavorites, product];
    });
  };

  const removeFromFavorites = (productId) => {
    setFavoriteItems((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== productId)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        favoriteItems,
        addToCart,
        removeOneFromCart,
        removeFromCart,
        toggleFavorite,
        removeFromFavorites,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
