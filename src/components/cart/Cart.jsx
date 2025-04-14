import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '@/utils/context/Wrapper';
import gsap from 'gsap';

const Cart = ({ isOpen, onClose }) => {
    // const { cartItems, setCartItems } = useContext(CartContext);
    // const [isMounted, setIsMounted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const url = "https://script.google.com/macros/s/AKfycbyGYXCwxs-lS8l4XEEmCosxEftv8hs1Rob64P35X-yJ7gOAIMsJn0otKKMUdwFyhNegyQ/exec"
        function submitForm(url, formData) {
            const formBody = new URLSearchParams(formData).toString();

            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formBody,
            })
                .then((response) => response.text())
                .then((data) => {
                    console.log("Success:", data);
                })
                .catch((error) => {
                    console.error("Fetch error:", error);
                });
        }
        submitForm(url, formData);
        setFormData({
            name: '',
            phone: '',
            email: '',
            message: ''
        });
        alert('Form submitted successfully!');
    };



    // useEffect(() => {
    //     setIsMounted(true);
    // }, []);

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


    return (
        <div id="cartOverlay" className="fixed top-0 left-0 w-full sm:h-[100dvh] h-screen bg-[#00000070] opacity-0 invisible z-[999] flex justify-end" onClick={onClose}>
            <div id='cartContainer' className="absolute right-[-50%] top-0 sm:w-[100vw] md:w-[100vw] lg:w-[100vw] xl:w-[60vw] w-[40vw] h-full bg-white shadow-lg sm:pt-[30px] p-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <div className='w-full sm:h-[95vh] h-[100vh] sm:bg-transparent md:bg-transparent  sm:p-0 md:p-0 lg:p-0 sm:pt-[30vw] md:pt-[13vw] lg:pt-[13vw] xl:pt-[10vw]  p-[2.5vw] flex flex-col justify-between'>
                    <div className='w-full'>
                        <h1 className='sm:text-[10vw] md:text-[7vw] lg:text-[7vw] xl:text-[5vw] text-[3.5vw] sm:font-semibold capitalize leading-none'>Enquire Now</h1>
                        <p className='sm:text-[4.5vw] md:text-[3.7vw] lg:text-[3vw] xl:text-[2vw] sm:w-full text-[1vw] w-[80%] sm:my-[4.5vw] md:my-[4.5vw] lg:my-[4.5vw]  my-[1vw] leading-1'>Have questions or need product details? Fill out the form and our team will get back to you shortly.</p>
                    </div>
                    <form onSubmit={handleSubmit} className='w-full mt-[1.5vw] sm:mt-[0] flex flex-col sm:gap-[3vw] md:gap-[3vw] lg:gap-[3vw] gap-[1vw] sm:text-[3.5vw] md:text-[3vw] lg:text-[2.8vw]'>
                        <div className='w-full flex'>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className='w-full p-[1.5vw] sm:py-[2.5vw] md:py-[1.5vw] lg:py-[1vw] sm:px-[2vw] md:px-[2vw] lg:px-[2vw] py-[.6vw] border border-black/20 rounded-md bg-transparent' type="text" placeholder='Name' />
                        </div>
                        <div className='w-full flex'>
                            <input
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className='w-full p-[1.5vw] sm:py-[2.5vw] md:py-[1.5vw] lg:py-[1vw] sm:px-[2vw] md:px-[2vw] lg:px-[2vw] py-[.6vw] border border-black/20 rounded-md bg-transparent' type="text" placeholder='Phone Number' />
                        </div>
                        <div className='w-full flex'>
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className='w-full p-[1.5vw] sm:py-[2.5vw] md:py-[1.5vw] lg:py-[1vw] sm:px-[2vw] md:px-[2vw] lg:px-[2vw] py-[.6vw] border border-black/20 rounded-md bg-transparent' type="text" placeholder='E-Mail Address' />
                        </div>
                        <div className='w-full flex'>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className='w-full resize-none sm:h-[18vw] md:h-[18vw] lg:h-[20vw] h-[7vw] p-[1.5vw] sm:py-[2.5vw] md:py-[1.5vw] lg:py-[1vw] sm:px-[2vw] md:px-[2vw] lg:px-[2vw] py-[.6vw] border border-black/20 rounded-md bg-transparent' placeholder='Write additional information'></textarea>
                        </div>
                        <div className='w-full flex items-center justify-center sm:h-[7vw] md:h-[7vw] lg:h-[5vw] lg:mb-[2vw] h-[4vw] sm:mt-[2vw] md:mt-[2vw] lg:mt-[2vw] xl:mt-[2vw]'>
                            <button className='text-white bg-black w-full text-center capitalize px-[1.5vw] transition-all duration-500 cursor-pointer sm:py-[4vw] md:py-[2vw] lg:py-[2vw] xl:py-[1.5vw] py-[.6vw] rounded-full font-semibold'>
                                <h4 className='sm:text-[3.5vw] md:text-[3.5vw] lg:text-[3vw] xl:text-[1.8vw] text-[1.1vw] font-normal'>Submit</h4>
                            </button>
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
