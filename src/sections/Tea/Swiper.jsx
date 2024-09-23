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
      spaceBetween={40}
      slidesPerView={2}
      className=".swiper"
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {teas.map((tea) => (
        <SwiperSlide
          key={tea.id}
          className="rounded-3xl w-[380px] shadow-custom"
        >
          <article>
            <Image
              src={tea.imageUrl}
              alt={`tea ${tea.name}`}
              priority={true}
              width={450}
              height={400}
              className="max-w-auto max-h-[400px] mx-auto rounded-3xl mt-2 border-wood border-[1px]"
            />
            <h3 className="text-center mt-3 text-lg font-CrimsonPro font-semibold">
              {tea.name}
            </h3>
            <p className="text-center text-sm p-3 font-Roboto">
              {tea.description}
            </p>
          </article>
          <Button className="ml-[125px] mb-7" title="Зробити замовленя чаю">
            Замовити
          </Button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeaSwiper;
