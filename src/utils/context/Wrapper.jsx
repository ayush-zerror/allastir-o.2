import React, { createContext, useState, useEffect } from 'react';
import Cart from '@/components/cart/Cart';
import PdfViewer from '@/components/pdf/PdfViewer';


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
        <CartContext.Provider value={{ isCartOpen, setIsCartOpen, cartItems, setCartItems, enquireItem, setEnquireItems }}>
            <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            {children}
        </CartContext.Provider>
    );
};

export default Wrapper;
