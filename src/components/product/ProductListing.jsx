import { CartContext } from '@/utils/context/Wrapper';
import React, { useContext, useState } from 'react'

const ProductListing = ({ products }) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const { setIsCartOpen } = useContext(CartContext);

    const handleAddToBag = (product) => {
        // const productExists = cartItems.some(item => item.name === product.name);

        // if (!productExists) {
        //     const updatedCart = [...cartItems, product];
        //     setCartItems(updatedCart);
        // } 
        setIsCartOpen(true);
    };

    return (
        <div className='relative w-full min-h-screen p-[11%] py-[6vw] pb-[0vw]'>
            <h2 className='sm:text-[7vw] md:text-[7vw] text-[3vw] leading-tight sm:mb-[6vw] mb-[6vw]'>Niche Product Offerings of 38 APIs.</h2>
            <div className='flex items-start justify-between '>
            <div className='w-[17%] h-[calc(100vh-8vw)] overflow-y-auto pr-2'>
                <ul>
                    {products.slice(0, 8).map((product, i) => (
                        <li
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`mb-[16px] text-center text-[14px] capitalize py-[13px] font-semibold rounded-full border border-gray-300 cursor-pointer transition 
                ${activeIndex === i
                                    ? 'bg-gradient-to-r from-[#DD2B1C] to-[#3D2E8D] text-white'
                                    : 'bg-gray-100/50 text-black'
                                } hover:bg-gradient-to-r from-[#DD2B1C] to-[#3D2E8D] hover:text-white`}
                        >
                            {product.title.charAt(0) + product.title.slice(1).toLowerCase()}
                        </li>
                    ))}
                </ul>
            </div>

            <div className='w-[82%] px-[1%] grid grid-cols-3 gap-8'>
                {products[activeIndex].product.map((product, i) => (
                    <div key={i} className='relative bg-white rounded-xl transition-all duration-300 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.2)] border border-gray-300 p-4 overflow-hidden group'>
                        <img
                            src={product.image}
                            alt={product.title}
                            className='w-full h-[200px] object-contain rounded-lg mb-4'
                        />
                        <h3 className='text-lg font-semibold mb-2 text-center'>{product.name}</h3>
                        <p className='sm:text-[4.5vw] md:text-[3.7vw] lg:text-[2vw] xl:text-[1.8vw] text-[1vw]  text-gray-600 mb-16 text-center'>
                            Chlorphenamine maleate is a part of a series of antihistamines including pheniramine and its halogenated
                        </p>

                        {/* Slide up button */}
                        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300'>
                            <button onClick={handleAddToBag} className='px-4 py-2  sm:text-[4.4vw] md:text-[3.6vw] lg:text-[1.9vw] xl:text-[1.7vw] text-[.9vw]  bg-gradient-to-r from-[#DD2B1C] to-[#3D2E8D] text-white rounded-full'>
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
