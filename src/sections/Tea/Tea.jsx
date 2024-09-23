"use client";
// import swiper component
import TeaSwiper from "./Swiper";

// Tea component
export const Tea = () => {
  return (
    <section id="tea" className="mx-auto max-w-[1024px] flex mt-20">
      <TeaSwiper className="p-[10px]" />
    </section>
  );
};

export default Tea;
