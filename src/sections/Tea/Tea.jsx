"use client";
// import swiper component
import TeaSwiper from "./Swiper";

// import context hook
import { useCart } from "@/context/CartContext"; // Импортируем хук контекста

// Tea component
export const Tea = () => {
  const { addToCart } = useCart();
  return (
    <section className="container min-w-[320px] border-b border-b-sections-border mobile:min-w-[375px] bigMobile:min-w-[425px] tablet:min-w-[768px] laptop:min-w-[1024px] desktop:min-w-[1440px]">
      <section className="m-auto flex max-w-[304px] py-4 tablet:max-w-[768px] laptop:max-w-[1024px] laptop:py-8 desktop:max-w-[1440px]">
        <TeaSwiper addToCart={addToCart} />
      </section>
    </section>
  );
};

export default Tea;
