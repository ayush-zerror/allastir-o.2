import gsap from "gsap";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NotificationCard from "./NotificationCard";

const Popup = () => {
  const [showNotification1, setShowNotification1] = useState(true);
  const [showNotification2, setShowNotification2] = useState(true);
  const [showFullPopup, setShowFullPopup] = useState(false);
  const [popupImage, setPopupImage] = useState("/events/event1.jpg");
  const router = useRouter();

  const handleViewDetails = (image, notificationNum) => {
    setPopupImage(image);
    setShowFullPopup(true);
    if (notificationNum === 1) setShowNotification1(false);
    if (notificationNum === 2) setShowNotification2(false);
  };

  const showBell = !showNotification1 && !showNotification2;

  useEffect(() => {
    if (showNotification1 || showNotification2) {
      gsap.fromTo(
        ".notification",
        {
          x: 50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        }
      );
    }
  }, [showNotification1, showNotification2, router.asPath]);

  return (
    <div className="fixed bottom-0 right-0 z-[99] p-6 flex items-end justify-end">
      {/* Single Bell */}
      {showBell && (
        <div
          onClick={() => {
            setShowNotification1(true);
            setShowNotification2(true);
          }}
          className="w-[2.8vw] h-[2.8vw] sm:w-[12vw] sm:h-[12vw] lg:w-[6vw] lg:h-[6vw] bg-[#003F3E] hover:bg-[#003F3E] rounded-full cursor-pointer flex items-center justify-center absolute bottom-6 right-6"
        >
          <i className="ri-notification-3-line text-white text-[1vw] sm:text-[4vw] lg:text-[2.5vw]"></i>
        </div>
      )}

      {/* Notifications */}
      <div className="flex flex-col items-end gap-[1vw]">
        {showNotification1 && (
          <NotificationCard
            imageLeft="/events/cphi_frankfurt.png"
            imageRight="/events/frankfurt.jpeg"
            date="28th–30th October 2025"
            location="Messe frankfurt, Frankfurt Germany"
            stall="Stall No. 12.1 F 40"
            onClose={() => setShowNotification1(false)}
            onView={() => handleViewDetails("/events/event1.jpg", 1)}
          />
        )}

        {showNotification2 && (
          <NotificationCard
            imageLeft="/events/cphi_india.png"
            imageRight="/events/redfort.jpg"
            date="25th–27th November 2025"
            location="India Expo Center (IEML), Greater Noida, Delhi NCR"
            stall="Hall B, Stall No. RH.N 19"
            onClose={() => setShowNotification2(false)}
            onView={() => handleViewDetails("/events/event2.jpg", 2)}
          />
        )}
      </div>

      {/* Fullscreen popup */}
      {showFullPopup && (
        <div
          data-lenis-prevent
          className="fixed top-0 left-0 w-full h-full bg-black z-50 flex flex-col sm:justify-center items-center py-[3vw] justify-start overflow-y-auto"
        >
          <Image
            src={popupImage}
            alt="Event Full View"
            width={1000}
            height={1000}
            className="w-[50%] sm:w-[90%] h-auto object-cover"
          />
          <div
            onClick={() => setShowFullPopup(false)}
            className="fixed top-[3vw] right-[3vw] text-white cursor-pointer bg-white/20 hover:bg-white/30 transition-all duration-300 rounded-full w-[2.5vw] sm:w-[6vw] sm:h-[6vw] h-[2.5vw] flex items-center justify-center z-50"
          >
            <i className="ri-close-line text-[1.5vw] sm:text-[5vw] md:text-[1vw] lg:text-[0.8vw]"></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
