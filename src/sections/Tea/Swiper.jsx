// import image from next
import Image from "next/image";

//import button component
import Button from "@/components/Button/Button";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "./swiper.css";

// import tea base
import { teas } from "./teas";

// swiper component
const TeaSwiper = () => {
  return (
    <Swiper
      spaceBetween={32}
      slidesPerView={3}
      className=".swiper"
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 8,
        },
        425: {
          slidesPerView: 1,
          spaceBetween: 60,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 136,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
      }}
    >
      {teas.map((tea) => (
        <SwiperSlide
          key={tea.id}
          className="max-h-[506px] max-w-[300px] rounded-3xl shadow-custom"
        >
          <article className="p-4 text-center tablet:p-8">
            <Image
              src={tea.imageUrl}
              alt={`tea ${tea.name}`}
              priority={true}
              width={268}
              height={286}
              className="h-auto max-h-[268px] min-h-[268px] w-full max-w-[286px] rounded-[12px]"
            />
            <h3 className="mt-4 text-center text-m font-semibold">
              {tea.name}
            </h3>
            <p className="mt-2 text-center text-s">{tea.description}</p>
            <Button
              className="mx-auto mt-4 px-[72px] py-4 text-md font-semibold tablet:mt-8"
              title="Зробити замовленя чаю"
            >
              Замовити
            </Button>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeaSwiper;
