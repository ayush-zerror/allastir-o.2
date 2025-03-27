import gsap from 'gsap'
import React, { useRef } from 'react'

const Popup = ({ popup,bell }) => {
  return (
    <div className='w-full h-screen absolute top-0 left-0 pointer-events-none'>
      <div ref={popup} className="notification pointer-events-auto fixed scale-0 z-10 border sm:bottom-[5vw] bottom-[2vw] sm:right-[4vw] md:right-[4vw] lg:right-[4vw] right-[2vw] sm:w-[90%] md:w-[90%] lg:w-[70%] w-[20%] sm:p-[4vw] md:p-[4vw] lg:p-[4vw] p-[1vw] bg-white rounded-xl flex items-start justify-between sm:gap-[3vw] md:gap-[3vw] lg:gap-[3vw] gap-[1vw]">
        <div className='sm:p-[3vw] md:p-[3vw] p-[1vw] sm:px-[4vw] md:px-[4vw] px-[1.3vw] rounded-lg bg-blue-950/10 text-[#1863AB] flex items-center justify-center'>
          <i className="ri-notification-3-line sm:text-[4vw] md:text-[4vw] lg:text-[2.5vw] text-[1vw]"></i>
        </div>
        <div>
          <h2 className='sm:text-[5vw] md:text-[4vw] lg:text-[3vw] text-[1vw] font-semibold'>Upcoming event</h2>
          <p className='sm:text-[3.5vw] md:text-[3vw] lg:text-[2vw] text-[.7vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className='text-white bg-[#1863AB] hover:bg-[#1864abea] sm:text-[3vw] md:text-[2.8vw] lg:text-[1.8vw] text-[.6vw] font-regular sm:px-[4vw] px-[.9vw] sm:py-[1.5vw] lg:py-[1.2vw] md:px-[4vw] lg:px-[4vw] py-[.4vw] sm:mt-[1.5vw] md:mt-[1.5vw] lg:mt-[1.5vw] mt-[.7vw] rounded-full'>Register Now</button>
        </div>
        <div onClick={() => {
          // popup.current.classList.add("hidden")
        gsap.set(popup.current, { display: "none" })
          bell.current.style.opacity = 1
        }} className="close  scale-0 cursor-pointer absolute sm:right-[1.5vw] md:right-[1.5vw] lg:right-[1.5vw]  right-[.5vw] sm:top-[1.5vw] md:top-[1.5vw] lg:top-[1.5vw] top-[.5vw] rounded-full bg-black/10 hover:bg-black/20  sm:w-[7vw] md:w-[7vw] lg:w-[5vw] w-[1.5vw] sm:h-[7vw] md:h-[7vw] lg:h-[5vw] h-[1.5vw] flex items-center justify-center"><i className="ri-close-line sm:text-[5vw]"></i></div>
      </div>
      <div ref={bell} onClick={() => {
        bell.current.style.opacity = 0
        // popup.current.classList.remove("hidden")
        gsap.set(popup.current, { display: "flex" })
      }} className='sm:w-[12vw] md:w-[10vw] lg:w-[6vw] w-[2.8vw] opacity-0 sm:h-[12vw] md:h-[10vw] lg:h-[6vw] h-[2.8vw] rounded-full bg-[#1863AB] hover:bg-[#1864abeb]  fixed z-10 sm:bottom-[5vw] md:bottom-[5vw] lg:bottom-[5vw] bottom-[2vw] sm:right-[4vw]  md:right-[4vw] lg:right-[4vw] right-[2vw] pointer-events-auto cursor-pointer flex items-center justify-center'>
        <i className="ri-notification-3-line sm:text-[4vw] md:text-[3.5vw] lg:text-[2.5vw] text-[1vw] text-white"></i>
      </div>
    </div>
  )
}

export default Popup