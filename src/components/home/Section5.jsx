import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const clients = [
  '/client-logo/akums.png',
  '/client-logo/alembic.png',
  '/client-logo/alkem.png',
  '/client-logo/eris.png',
  '/client-logo/exeltis.png',
  '/client-logo/glenmark.png',
  '/client-logo/hetero.png',
  '/client-logo/indchemie.png',
  '/client-logo/integrace.png',
  '/client-logo/nacleods.png',
  '/client-logo/png.png',
  '/client-logo/systopic.png',
  '/client-logo/torrent_pharma.png',
  '/client-logo/unison.png',
  '/client-logo/usv.png',
  '/client-logo/wanbury.png',
  '/client-logo/zydus.png',
];

export default function App() {
  return (
    <div className="w-full flex items-center flex-col justify-center px-[2.5vw] py-[6vw] sm:my-[6vw]">
      <h2 className="sm:text-[10vw] md:text-[7vw] lg:text-[5vw] xl:text-[5vw] text-[3vw] font-semibold text-center">Our Clientele</h2>
      <div className="w-full sm:h-[25vh] h-[30vh]">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 2 },
            639: { slidesPerView: 2, spaceBetween: 5 },
            767: { slidesPerView: 5, spaceBetween: 15 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
          className="mySwiper"
        >
          {clients.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  width={1000}
                  height={1000}
                  className="w-[50%] h-[30%] object-contain"
                  src={image}
                  alt={`Client ${index + 1}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
