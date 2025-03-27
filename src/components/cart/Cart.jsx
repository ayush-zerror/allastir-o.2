import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '@/utils/context/Wrapper';
import gsap from 'gsap';

const Cart = ({ isOpen, onClose }) => {
    const { cartItems, setCartItems } = useContext(CartContext);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            gsap.set("#cartContainer", { right: "-50%" }); // Ensure the initial position before animating
            gsap.set("#cart-wrapper", {
                marginTop: "0",
                opacity: 1,
            });
            var tl = gsap.timeline();
            tl.to("#cartOverlay", { opacity: 1, backgroundColor: "#00000070", visibility: "visible", duration: 0.5 })
                .to("#cartContainer", { right: "0%", duration: 0.8, ease: "power3.out" }, "-=0.4");
        } else {
            var tl = gsap.timeline();
            tl
                .to("#cartOverlay", { backgroundColor: "transparent", duration: 0.3 }) // Fade out overlay first
                .to("#cartContainer", { right: "-50%", duration: 0.6, ease: "power3.in" }, "-=0.3") // Then move cart
                .set("#cartOverlay", { visibility: "hidden" }); // Hide overlay after animation
        }
    }, [isOpen]);

    const handleEnquire = () => {
        gsap.to("#cart-wrapper", {
            marginTop: "-100vh",
            opacity: 0,
            duration: 1
        });
    };

    return (
        <div id="cartOverlay" className="fixed top-0 left-0 w-full h-screen bg-[#00000070] opacity-0 invisible z-[999] flex justify-end" onClick={onClose}>
            {/* Cart Sidebar */}
            <div id='cartContainer' className="absolute right-[-50%] top-0 sm:w-[100vw] md:w-[100vw] lg:w-[100vw] xl:w-[60vw] w-[35vw] h-full bg-white shadow-lg sm:pt-[30px] p-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <div id='cart-wrapper' className='relative flex flex-col h-full'>

                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Products</h2>

                    </div>

                    {/* Cart Items */}
                    <div className="flex-grow overflow-y-auto max-h-[70vh]">
                        {isMounted && cartItems.length > 0 ? (
                            <ul>
                                {cartItems.map((item, index) => (
                                    <li key={index} className="flex justify-between items-center p-2 border-b">
                                        <div className='flex-col flex'>
                                        <span>{item.name}</span>
                                        <span>{item.description}</span>
                                        </div>
                                        <button
                                            onClick={() => {
                                                const updatedCart = cartItems.filter((_, i) => i !== index);
                                                setCartItems(updatedCart);
                                            }}
                                            className="text-gray-600 text-sm hover:text-black px-3 py-1 rounded"
                                        >
                                            Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            isMounted ? <div className="h-[90vh] w-full flex flex-col items-center justify-center">
                                <p className="text-lg font-medium text-center">Cart is empty... <br /> Add products to enquire!</p>
                            </div> : null
                        )}
                    </div>

                    {/* Cart Footer */}
                    {isMounted && cartItems.length > 0 && (
                        <div className="mt-4 p-4 border-t w-full absolute bottom-0 left-0 flex items-center justify-between bg-white">
                            <h3 className="text-lg font-semibold">Total: {cartItems.length}</h3>
                            <button onClick={handleEnquire} className="px-6 bg-black text-white py-2 rounded-full">Enquire Now</button>
                        </div>
                    )}
                </div>
                <div className='w-full sm:h-[95vh] h-[100vh] sm:bg-transparent md:bg-transparent  sm:p-0 md:p-0 lg:p-0 sm:pt-[30vw] md:pt-[13vw] lg:pt-[13vw] xl:pt-[10vw]  p-[2.5vw] flex flex-col justify-between'>
                    <div className='w-full'>
                        <h1 className='sm:text-[10vw] md:text-[7vw] lg:text-[7vw] xl:text-[5vw] text-[3.5vw] sm:font-semibold capitalize leading-none'>Contact us</h1>
                        <p className='sm:text-[4.5vw] md:text-[3.7vw] lg:text-[3vw] xl:text-[2vw] sm:w-full text-[1vw] w-[80%] sm:my-[4.5vw] md:my-[4.5vw] lg:my-[4.5vw]  my-[1vw] leading-1'>Our secure system ensures a smooth and hassle-free booking experience. Don’t wait for your dental needs—book your appointment online today.</p>
                    </div>
                    <form className='w-full mt-[1.5vw] sm:mt-[0] flex flex-col sm:gap-[3vw] md:gap-[3vw] lg:gap-[3vw] gap-[1vw] sm:text-[3.5vw] md:text-[3vw] lg:text-[2.8vw]'>
                        <div className='w-full flex'>
                            <input className='w-full p-[1.5vw] sm:py-[2.5vw] md:py-[1.5vw] lg:py-[1vw] sm:px-[2vw] md:px-[2vw] lg:px-[2vw] py-[.6vw] border border-black/20 rounded-md bg-transparent' type="text" placeholder='Name' />
                        </div>
                        <div className='w-full flex'>
                            <input className='w-full p-[1.5vw] sm:py-[2.5vw] md:py-[1.5vw] lg:py-[1vw] sm:px-[2vw] md:px-[2vw] lg:px-[2vw] py-[.6vw] border border-black/20 rounded-md bg-transparent' type="text" placeholder='Phone Number' />
                        </div>
                        <div className='w-full flex'>
                            <input className='w-full p-[1.5vw] sm:py-[2.5vw] md:py-[1.5vw] lg:py-[1vw] sm:px-[2vw] md:px-[2vw] lg:px-[2vw] py-[.6vw] border border-black/20 rounded-md bg-transparent' type="text" placeholder='E-Mail Address' />
                        </div>
                        <div className='w-full flex'>
                            <textarea className='w-full resize-none sm:h-[18vw] md:h-[18vw] lg:h-[20vw] h-[7vw] p-[1.5vw] sm:py-[2.5vw] md:py-[1.5vw] lg:py-[1vw] sm:px-[2vw] md:px-[2vw] lg:px-[2vw] py-[.6vw] border border-black/20 rounded-md bg-transparent' placeholder='Write additional information'></textarea>
                        </div>
                        <div className='w-full flex items-center justify-center sm:h-[7vw] md:h-[7vw] lg:h-[5vw] lg:mb-[2vw] h-[4vw] sm:mt-[2vw] md:mt-[2vw] lg:mt-[2vw] xl:mt-[2vw]'>
                            <div className='text-white bg-black w-full text-center capitalize px-[1.5vw] transition-all duration-500 cursor-pointer sm:py-[4vw] md:py-[2vw] lg:py-[2vw] xl:py-[1.5vw] py-[.6vw] rounded-full font-semibold'>
                                <h4 className='sm:text-[3.5vw] md:text-[3.5vw] lg:text-[3vw] xl:text-[1.8vw] text-[1.1vw] font-normal'>Submit</h4>
                            </div>
                        </div>
                    </form>
                </div>
                <button className="absolute sm:top-[30px] top-[20px] sm:right-[30px] right-[40px] sm:text-[7vw] text-xl text-black hover:text-gray-800" onClick={onClose}>
                            <i className="ri-close-line"></i>
                        </button>
            </div>

        </div>
    );
};

export default Cart;
