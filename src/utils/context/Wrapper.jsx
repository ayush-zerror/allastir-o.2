import React, { createContext, useState, useEffect } from "react";
import Cart from "@/components/cart/Cart";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
  isPdf: false,
  setIsPdf: () => {},
});

const Wrapper = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [enquireItem, setEnquireItems] = useState({});

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        setCartItems,
        enquireItem,
        setEnquireItems,
      }}
    >
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Navbar />
      {children}
      <Footer />
    </CartContext.Provider>
  );
};

export default Wrapper;
