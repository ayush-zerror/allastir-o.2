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

    // Load cart from localStorage on mount
    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         const storedCart = localStorage.getItem('cart');
    //         setCartItems(storedCart ? JSON.parse(storedCart) : []);
    //     }
    // }, []);

    // Save cart to localStorage on change
    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         localStorage.setItem('cart', JSON.stringify(cartItems));
    //     }
    // }, [cartItems]);

    return (
        <CartContext.Provider value={{ isCartOpen, setIsCartOpen, cartItems, setCartItems, enquireItem, setEnquireItems }}>
            <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            {children}
        </CartContext.Provider>
    );
};

export default Wrapper;
