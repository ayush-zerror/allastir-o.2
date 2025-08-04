import React, { createContext, useState } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Cart from "../common/Cart";
import Popup from "../common/Popup";

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
