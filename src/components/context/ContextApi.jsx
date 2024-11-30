import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(pro => pro.item.id === item.id);

      if (existingItem) {
        return prevCart.map(pro => 
          pro.item.id === item.id
            ? {
                ...pro,
                quantity: pro.quantity + 1,
                totalPrice: (pro.quantity + 1) * pro.item.Price
              }
            : pro
        );
      } else {
        return [...prevCart, { item, quantity: 1, totalPrice: item.Price }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};