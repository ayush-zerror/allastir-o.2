import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
    const bars = [
        { id: 1, target: "State-of-the-Art Facilities", title: "State-of-the-Art Facilities", description: "Our advanced manufacturing units, covering 225,000+ SQFT, ensure precision, efficiency, and scalability.", image:"/company-our-strengths.png" },
        { id: 2, target: "Trusted Industry Partnerships", title: "Trusted Industry Partnerships", description: "We collaborate with top Indian pharmaceutical MNCs, delivering high-quality API and formulations.", image:"/global-reach-our-strength.png" },
        { id: 3, target: "Regulatory Excellence", title: "Regulatory Excellence", description: "We have 14 APIs with DMF, 5 CDSCO-approved APIs, and 6 APIs with completed toxicology studies.", image:"/Regulatory Excellence.png" },
        { id: 4, target: "Pioneering Innovation", title: "Pioneering Innovation", description: "We have introduced 2 first-time-in-India APIs and have 6 niche API products currently under development.", image:"/Pioneering Innovation.png" },
    ];

    return (
        <div className="w-full sm:min-h-fit md:min-h-fit  min-h-screen py-[2vw] flex flex-col items-center">
            <h1 className="sm:text-[10vw] md:text-[7vw] lg:text-[5vw] xl:text-[4vw] text-[3vw] font-semibold sm:mb-[6vw] md:mb-[6vw] mb-[3vw]">Our Strengths</h1>
            <div className="sm:w-[92%] md:w-[90%] lg:w-[90%] xl:w-[85%] w-[75%]">
                {bars.map((bar,i) => (
                    <div
                        key={bar.id}
                        className={`w-full relative border-t ${i === bars.length - 1 && "border-b"} sm:py-[4vw] md:py-[4vw] py-[.5vw] sm:h-[50vw] md:h-[45vw] lg:h-[28vw] xl:h-[20vw] h-[12vw] flex sm:flex-col md:flex-col justify-between border-black/20 px-[1.7vw]`}
                    >
                        <div className="flex items-center sm:hidden md:text-[3.5vw] text-[2.5vw]">
                            <h2>{bar.title}</h2>
                        </div>
                        <div className="flex  sm:w-full md:w-full sm:mt-[2vw] md:mt-[2vw] gap-[2vw] w-[49%] sm:items-start md:items-start items-center">
                            <Image
                            width={1000}
                            height={1000}
                                className="sm:w-[15vw] md:w-[15vw] lg:w-[8vw] xl:w-[6vw] w-[5vw] sm:absolute md:absolute sm:top-[10%] md:top-[10%] sm:right-0 md:right-0"
                                src={bar.image}
                                alt={bar.title}
                            />
                            <div>
                                {/* <h4 className="sm:text-[5vw] md:text-[4vw] lg:text-[3vw] xl:text-[2vw] text-[1.1vw] font-semibold">{bar.title}</h4> */}
                                <p className="sm:text-[5vw] md:text-[4vw] lg:text-[3vw] xl:text-[2vw] text-[1.1vw] font-semibold">{bar.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section3;
