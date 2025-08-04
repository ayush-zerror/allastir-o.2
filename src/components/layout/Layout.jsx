import React, { createContext, useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Cart from "../cart/Cart";
import Popup from "../home/Popup";

export const CartContext = createContext({});

const Layout = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [enquireItem, setEnquireItems] = useState({});

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        enquireItem,
        setEnquireItems,
      }}
    >
      <Cart />
      <Navbar />
      <Popup />
      {children}
      <Footer />
    </CartContext.Provider>
  );
};

export default Layout;
