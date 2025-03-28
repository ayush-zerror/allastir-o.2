import { menus } from '@/helpers/MenuData'
import { CartContext } from '@/utils/context/Wrapper'
import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'

const Navbar = ({ navRef }) => {
  const { setIsPdf } = useContext(CartContext)
  const [open, setOpen] = useState(false);
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();


  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openSidebar = () => {
    if (open) {
      document.querySelector(".menu-icon").classList.remove("ri-close-line");
      document.querySelector(".menu-icon").classList.add("ri-menu-fill");
      // gsap.to(".side-menu", { top: "-100vh", duration: 0.3 });
      gsap.to(".side-menu", {
        opacity: 0, duration: 0.3,
        onComplete: () => {
          gsap.set(".side-menu", { pointerEvents: "none" })
        }
      });
      setOpen(false);
    } else {
      document.querySelector(".menu-icon").classList.add("ri-close-line");
      document.querySelector(".menu-icon").classList.remove("ri-menu-fill");
      // gsap.to(".side-menu", { top: "100%", duration: 0.3 });
      gsap.to(".side-menu", {
        opacity: 1, duration: 0.3,
        onComplete: () => {
          gsap.set(".side-menu", { pointerEvents: "all" })
        }
      });
      setOpen(true);
    }
  };



  const handlePdf = () => {
    setOpen(false)
    setIsPdf(true);
    openSidebar()
  };

  return (
    <div ref={navRef} className='w-full sm:px-[4vw] md:px-[4vw] lg:px-[4vw] px-[2.5vw] sm:py-[3.1vw] md:py-[3.1vw] lg:py-[3.1vw] py-[1vw] text-black bg-white flex items-center justify-between fixed z-[99] top-0 left-0' style={{ backdropFilter: "blur(40px)" }}>
      <Link href="/"><Image width={1000} height={1000} priority className='w-[200px] h-[60px] object-contain' src="/allastir_logo.webp" alt='logo' /></Link>

      <div className='sm:hidden md:hidden lg:hidden absolute top-1/2 left-1/2 -translate-x-1/2 xl:text-[1.8vw] text-[1.1vw] font-regular capitalize -translate-y-1/2 flex items-center gap-[3vw]'>
        {menus.map(({ path, name }, index) =>
          name === "Brochure" ? (
            <span
              key={index}
              className="hover:text-[#E31E23]  transition-all duration-75  relative cursor-pointer"
              onClick={() => handlePdf()}
            >
              {name}
            </span>
          ) : (
            <Link
              key={index}
              href={path}
              className={`  transition-all duration-75 relative ${router.pathname === path ? "font-bold" : "hover:text-[#E31E23]"}`}
            >
              {name}
            </Link>
          )
        )}

      </div>

      <div className='flex items-center gap-[50px]'>
        <span className='cursor-pointer relative flex items-center text-[20px]' onClick={() => setIsCartOpen(true)}>
          <i className="ri-shopping-cart-2-line"></i>
          {isMounted && cartItems.length > 0 ? <p className='absolute top-[-3px] right-[-13px] w-[18px] h-[18px] text-white bg-red-600 rounded-full flex items-center justify-center text-[10px]'>{cartItems.length}</p> : ''}
        </span>

        <i onClick={openSidebar} className="menu-icon cursor-pointer ri-menu-fill text-[5.5vw] lg:text-[3.3vw] sm:block md:block lg:block hidden font-semibold"></i>

      </div>
      <div className='side-menu duration-300 w-[100%] sm:pt-[20vw] bg-white h-[90dvh] absolute top-[100%] opacity-0 pointer-events-none left-0 text-black sm:flex  sm:flex-col sm:justify-between md:flex lg:flex  hidden justify-end capitalize  text-left text-[5.5vw] lg:text-[3.5vw]'>
        <div className='w-full h-fit relative flex flex-col gap-[2vw] justify-center items-end bg-white p-[4vw]'>
          {menus.map(({ path, name }, index) =>
            name === "Brochure" ? (
              <span
                key={index}
                className="hover:opacity-[.8] relative cursor-pointer"
                onClick={() => handlePdf()}
              >
                {name}
              </span>
            ) : (
              <Link
                key={index}
                href={path}
                className={`hover:opacity-[.8] relative`}
              >
                {name}
              </Link>
            )
          )}

        </div>
        <div className='w-full flex items-center justify-between text-[4.5vw] p-[4vw]'>
          <p>Contact</p>
          <p>Info@allastir.com</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
