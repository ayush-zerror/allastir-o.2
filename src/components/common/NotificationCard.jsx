import Image from "next/image";
import React from "react";

const NotificationCard = ({
  imageLeft,
  imageRight,
  date,
  location,
  stall,
  onClose,
  onView,
}) => {
  return (
    <div className="notification  w-full overflow-hidden relative pointer-events-auto bg-[#003F3E] rounded-xl flex items-center justify-between sm:gap-[3vw] gap-[1vw] sm:p-[4vw]">
      <Image
        className="sm:w-[120px] w-[160px] h-auto"
        width={1000}
        height={1000}
        src={imageLeft}
        alt="event"
      />
      <div className="popup_text sm:w-full  w-[170px] text-white flex flex-col sm:text-[3vw] text-[.7vw] relative">
        <h2 className="font-semibold">{date}</h2>
        <p className="sm:w-[80%] leading-snug">{location}</p>
        <span className="font-semibold mt-1">Visit us at</span>
        <span className="font-semibold">{stall}</span>
        <button
          onClick={onView}
          className="w-fit mt-[.7vw] py-[.3vw] px-[.9vw] sm:py-[1.5vw] sm:px-[4vw] bg-white text-[#003F3E] font-semibold rounded-full"
        >
          View Details
        </button>
      </div>
      <Image
        className="h-[140px] sm:hidden block w-[230px] object-cover"
        width={1000}
        height={1000}
        src={imageRight}
        alt="event right"
      />
      <div
        onClick={onClose}
        className="absolute top-[.5vw] right-[.5vw] sm:top-[1.5vw] sm:right-[1.5vw] rounded-full bg-black/10 hover:bg-black/20 w-[1.5vw] h-[1.5vw] sm:w-[7vw] sm:h-[7vw] cursor-pointer flex items-center justify-center"
      >
        <i className="ri-close-line text-[1vw] sm:text-[5vw]"></i>
      </div>
    </div>
  );
};

export default NotificationCard;
