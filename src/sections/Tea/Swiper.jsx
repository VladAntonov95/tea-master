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
      spaceBetween={50}
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
        },
        768: {
          slidesPerView: 2,
        },
        1260: {
          slidesPerView: 3,
        },
      }}
    >
      {teas.map((tea) => (
        <SwiperSlide
          key={tea.id}
          className=" max-w-[300px] max-h-[506px] shadow-custom bg-white-text rounded-3xl"
        >
          <article className="p-8">
            <Image
              src={tea.imageUrl}
              alt={`tea ${tea.name}`}
              priority={true}
              width={268}
              height={286}
              className="h-[286px] w-[268px] shadow-second rounded-[12px]"
            />
            <h3 className="text-center text-m font-CrimsonPro mt-3 font-semibold">
              {tea.name}
            </h3>
            <p className="text-s mt-2 text-center">{tea.description}</p>
            <Button
              className="w-[150px] h-[40px] font-semibold text-s ml-[45px] mt-8"
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
