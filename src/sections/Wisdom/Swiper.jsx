"use client";
// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";

// import tea base
import { wisdoms } from "./wisdoms.js";

// import react icons
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

// import icons for arrows
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

//import material ui arrows
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

// swiper component
const WisdomSwiper = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={32}
        slidesPerView={1}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {wisdoms.map((wisdom) => (
          <SwiperSlide key={wisdom.id} className="max-h-[506px] w-full">
            <section className="relative flex h-[500px] w-full items-center justify-center bg-cover bg-center">
              <div
                className="absolute inset-0 rounded-3xl bg-cover bg-center"
                style={{
                  backgroundImage: `url(${wisdom.imageUrl})`,
                  opacity: 0.5,
                }}
              ></div>
              <div className="bg-black absolute inset-0 opacity-50"></div>
              <button className="hidden tablet:block">
                <ArrowBackIosNewRoundedIcon
                  fontSize="large"
                  className="swiper-button-prev text-white-text"
                />
              </button>
              <section className="relative z-10 mx-auto flex max-h-[506px] max-w-[280px] items-center justify-between rounded-3xl bg-background p-4 shadow-custom bigMobile:max-w-[350px] tablet:max-w-[400px] laptop:max-w-[600px] desktop:max-w-[800px]">
                <article className="text-center tablet:p-8">
                  <RiDoubleQuotesL className="ml-auto h-[40px] w-[40px]" />
                  <h3 className="mt-4 text-m font-semibold">{wisdom.name}</h3>
                  <p className="mt-2 text-s">{wisdom.wisdom}</p>
                  <RiDoubleQuotesR className="h-[40px] w-[40px]" />
                </article>
              </section>
              <button className="hidden tablet:block">
                <ArrowForwardIosRoundedIcon
                  fontSize="large"
                  className="swiper-button-next text-white-text"
                />
              </button>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default WisdomSwiper;
