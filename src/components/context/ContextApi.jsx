

import React, { createContext, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Initialize cart from local storage
    const savedCart = localStorage.getItem('fudocart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(pro => pro.item.id === item.id);
      toast.success('Succesfully add', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
       
        });

      if (existingItem) {
        const updatedCart = prevCart.map(pro => 
          pro.item.id === item.id
            ? {
                ...pro,
                quantity: pro.quantity + 1,
                totalPrice: (pro.quantity + 1) * pro.item.Price
              }
            : pro
        );
       
        localStorage.setItem('fudocart', JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        const newCart = [...prevCart, { item, quantity: 1, totalPrice: item.Price }];
       
        localStorage.setItem('fudocart', JSON.stringify(newCart));
        return newCart;
      }
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('fudocart'); 
  };

  useEffect(() => {
    localStorage.setItem('fudocart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};