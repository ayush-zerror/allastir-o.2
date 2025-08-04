import gsap from "gsap";
import Image from "next/image";
import React, { useRef, useState } from "react";

const Popup = ({ popup, bell }) => {
  const [showFullPopup, setShowFullPopup] = useState(false);

  return (
    <div className="w-full h-screen absolute top-0 left-0 z-999">
      {/* Main Notification */}
      <div
        ref={popup}
        className="notification pointer-events-auto fixed scale-0 z-10 border sm:bottom-[5vw] bottom-[2vw] sm:right-[4vw] md:right-[4vw] lg:right-[4vw] right-[2vw] sm:w-[90%] md:w-[90%] lg:w-[70%] w-[25%] sm:p-[4vw] md:p-[4vw] lg:p-[4vw] p-[1vw] bg-white rounded-xl flex items-start justify-between sm:gap-[3vw] md:gap-[3vw] lg:gap-[3vw] gap-[1vw]"
      >
        <div className="sm:p-[3vw] md:p-[3vw] p-[1vw] sm:px-[4vw] md:px-[4vw] px-[1.3vw] rounded-lg bg-blue-950/10 text-[#1863AB] flex items-center justify-center">
          <i className="ri-notification-3-line sm:text-[4vw] md:text-[4vw] lg:text-[2.5vw] text-[1vw]"></i>
        </div>
        <div>
          <h2 className="sm:text-[4vw] md:text-[4vw] lg:text-[3vw] text-[1vw] font-semibold">
            Upcoming Global Exhibitions
          </h2>
          <p className="sm:text-[3.5vw] w-[90%] sm:w-[100%] md:text-[3vw] lg:text-[2vw] text-[.7vw]">
            Meet us at CPHI Frankfurt & India to explore our latest
            pharmaceutical innovations and connect with our team.
          </p>

          <button
            onClick={() => setShowFullPopup(true)}
            className="text-white bg-[#1863AB] hover:bg-[#1864abea] sm:text-[3vw] md:text-[2.8vw] lg:text-[1.8vw] text-[.6vw] font-regular sm:px-[4vw] px-[.9vw] sm:py-[1.5vw] lg:py-[1.2vw] md:px-[4vw] lg:px-[4vw] py-[.4vw] sm:mt-[1.5vw] md:mt-[1.5vw] lg:mt-[1.5vw] mt-[.7vw] rounded-full"
          >
            View Event Details
          </button>
        </div>
        <div
          onClick={() => {
            gsap.set(popup.current, { display: "none" });
            bell.current.style.opacity = 1;
          }}
          className="close scale-0 cursor-pointer absolute sm:right-[1.5vw] right-[.5vw] sm:top-[1.5vw] top-[.5vw] rounded-full bg-black/10 hover:bg-black/20 sm:w-[7vw] w-[1.5vw] sm:h-[7vw] h-[1.5vw] flex items-center justify-center"
        >
          <i className="ri-close-line sm:text-[5vw] text-[1vw]"></i>
        </div>
      </div>

      {/* Bell Icon */}
      <div
        ref={bell}
        onClick={() => {
          bell.current.style.opacity = 0;
          gsap.set(popup.current, { display: "flex" });
        }}
        className="sm:w-[12vw] md:w-[10vw] lg:w-[6vw] w-[2.8vw] opacity-0 sm:h-[12vw] md:h-[10vw] lg:h-[6vw] h-[2.8vw] rounded-full bg-[#1863AB] hover:bg-[#1864abeb] fixed z-10 sm:bottom-[5vw] bottom-[2vw] sm:right-[4vw] right-[2vw] pointer-events-auto cursor-pointer flex items-center justify-center"
      >
        <i className="ri-notification-3-line sm:text-[4vw] md:text-[3.5vw] lg:text-[2.5vw] text-[1vw] text-white"></i>
      </div>

      {/* Fullscreen Popup */}
      {showFullPopup && (
        <div
          data-lenis-prevent
          className="fixed top-0 left-0 w-full h-full bg-black z-50 flex flex-col items-center justify-start overflow-y-auto"
        >
          {/* Close Button */}
          <div
            onClick={() => setShowFullPopup(false)}
            className="fixed top-[8vw] sm:top-[30vw] right-[2vw] text-white cursor-pointer bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-full w-[2.5vw] sm:w-[6vw] sm:h-[6vw] h-[2.5vw] md:w-[1.8vw] md:h-[1.8vw] lg:w-[1.3vw] lg:h-[1.3vw] flex items-center justify-center z-50"
          >
            <i className="ri-close-line text-[2vw] sm:text-[5vw] md:text-[1vw] lg:text-[0.8vw]"></i>
          </div>

          {/* Brochures */}
          <div className="flex flex-col items-center gap-[4vw] w-full px-[4vw] sm:pt-[40vw] pt-[10vw] py-[4vw]">
            <div className="w-full max-w-[600px] rounded-2xl overflow-hidden shadow-2xl bg-white">
              <Image
                src="/events/event1.jpg"
                alt="CPHI Frankfurt 2025"
                width={1000}
                height={1000}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full max-w-[600px] rounded-2xl overflow-hidden shadow-2xl bg-white">
              <Image
                src="/events/event2.jpg"
                alt="CPHI India 2025"
                width={1000}
                height={1000}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
