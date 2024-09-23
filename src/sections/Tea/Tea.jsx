"use client";
// import Button component
import Button from "@/components/Button/Button";

// import swiper component
import TeaSwiper from "./Swiper";

// Tea component
export const Tea = () => {
  return (
    <section
      id="tea"
      className="mx-auto max-w-[280px] bigMobile:max-w-[400px] tablet:max-w-[768px] p-1 bigMobile:p-2 tablet:p-4 laptop:max-w-[1024px] my-8 flex"
    >
      <TeaSwiper className="p-[10px]" />
    </section>
  );
};

export default Tea;
