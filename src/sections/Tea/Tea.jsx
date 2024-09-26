"use client";
// import swiper component
import TeaSwiper from "./Swiper";

// Tea component
export const Tea = () => {
  return (
    <section className="container m-auto flex max-w-[304px] border-b border-b-sections-border py-4 tablet:max-w-[768px] laptop:max-w-[1024px] laptop:py-8 desktop:max-w-[1440px]">
      <TeaSwiper />
    </section>
  );
};

export default Tea;
