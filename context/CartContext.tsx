/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import React, { createContext, useContext, useState } from 'react';

interface CartProduct {
  id: number;
  name: string;
  price: number;
}

interface CartContextType {
  cartProducts: CartProduct[];
  addToCart: (product: CartProduct) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC = ({ children }) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  const addToCart = (product: CartProduct) => {
    setCartProducts((prevProducts) => [...prevProducts, product]);
  };

  const removeFromCart = (id: number) => {
    setCartProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <CartContext.Provider value={{ cartProducts, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
