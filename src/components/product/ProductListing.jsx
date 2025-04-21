import { CartContext } from '@/utils/context/Wrapper';
import { useGSAP } from '@gsap/react';
import React, { useContext, useState } from 'react'

const ProductListing = ({ products }) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const { setIsCartOpen, setEnquireItems } = useContext(CartContext);

    const handleAddToBag = (product) => {
        localStorage.removeItem('cartItems');
        if (product) {
            setEnquireItems(product);
        }
        setIsCartOpen(true);
    };

    // useGSAP(()=>{
    //     document.querySelectorAll('.product-card-hover').forEach((el) => {
    //         el.addEventListener('mouseenter', () => {
    //             el.querySelector('.product-card-btn').classList.remove('opacity-0', 'translate-y-10')
    //             el.querySelector('.product-card-btn').classList.add('opacity-100', 'translate-y-0')
    //         })
    //         el.addEventListener('mouseleave', () => {
    //             el.querySelector('.product-card-btn').classList.remove('opacity-100', 'translate-y-0')
    //             el.querySelector('.product-card-btn').classList.add('opacity-0', 'translate-y-10')
    //         })
    //     })
    // },[])

    return (
        <div className='relative w-full min-h-screen p-[11%] py-[6vw] pb-[0vw]'>
            <h2 className='sm:text-[7vw] md:text-[7vw] text-[3vw] leading-tight sm:mb-[6vw] mb-[6vw]'>Niche Product Offerings of 38 APIs.</h2>
            <div className='flex items-start justify-between '>
                <div className='w-[17%] h-[calc(100vh-8vw)] pr-2'>
                    <ul>
                        {products.slice(0, 8).map((product, i) => (
                            <li
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`mb-[16px] text-center text-[14px] capitalize py-[13px] font-semibold rounded-full border border-gray-300 cursor-pointer transition 
                ${activeIndex === i
                                        ? ' text-white bg-[#DD2B1C]'
                                        : 'bg-gray-100/50 text-black'
                                    } hover:bg-[#DD2B1C] hover:text-white`}
                            >
                                {product.title.charAt(0) + product.title.slice(1).toLowerCase()}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='w-[82%] px-[1%] grid grid-cols-3 gap-8'>
                    {products[activeIndex].product.map((product, i) => (
                        <div
                            key={i}
                            className='product-card-hover relative bg-white rounded-xl transition-all duration-300 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.2)] border border-gray-300 p-4 overflow-hidden'
                            onMouseEnter={(e) => {
                                const btn = e.currentTarget.querySelector('.product-card-btn');
                                btn.classList.remove('opacity-0', 'translate-y-10');
                                btn.classList.add('opacity-100', 'translate-y-0');
                            }}
                            onMouseLeave={(e) => {
                                const btn = e.currentTarget.querySelector('.product-card-btn');
                                btn.classList.remove('opacity-100', 'translate-y-0');
                                btn.classList.add('opacity-0', 'translate-y-10');
                            }}
                        > <img
                                src={product.image}
                                alt={product.title}
                                className='w-full h-[160px] object-contain rounded-lg mb-4'
                            />
                            <h3 className='text-lg font-semibold mb-2 text-center'>{product.name}</h3>
                            <p className='text-sm text-gray-900 mb-2 text-center'>{product.description}</p>
                            <p className='sm:text-[4.5vw] md:text-[3.7vw] lg:text-[2vw] xl:text-[1.8vw] text-[1vw]  text-gray-600 mb-16 text-center'>
                                Chlorphenamine maleate is a part of a series of antihistamines including pheniramine and its halogenated
                            </p>

                            {/* Slide up button */}
                            <div className='product-card-btn absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-10 opacity-0  transition-all duration-300'>
                                <button onClick={() => handleAddToBag(product)} className='px-4 py-2  sm:text-[4.4vw] md:text-[3.6vw] lg:text-[1.9vw] xl:text-[1.7vw] text-[.9vw]  bg-[#DD2B1C] hover:bg-[#DD2B1C] text-white rounded-full'>
                                    Enquire Now
                                </button>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
            <div className='w-[170%] h-[120vh] -z-10 absolute left-[40%] -translate-x-1/2 top-[-5%]'>
                <img className='w-full h-full object-cover object-center' src="https://www.supriyalifescience.com/assets/images/bg/abstract3.svg" alt="" />
            </div>
        </div>
    )
}

export default ProductListing
