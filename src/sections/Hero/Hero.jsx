"use client";
//import button component
import Button from "@/components/Button/Button";

// import images from next
import Image from "next/image";

// Hero component
const Hero = () => {
  return (
    <section className="container m-auto flex flex-col justify-between border-b border-b-sections-border py-4 tablet:flex-row laptop:py-8">
      <article className="flex flex-col justify-between text-center tablet:order-1 tablet:mr-4 tablet:text-left laptop:mr-8">
        <h1 className="mb-4 text-center text-2xl font-bold tablet:mb-8 tablet:text-left tablet:text-3xl">
          Чайна традиція «Пересвіт»
        </h1>
        <p className="text-left text-sm">
          Чайна традиція «Пересвіт» - один з напрямків Храму бойового мистецтва
          «Пересвіт».
        </p>
        <p className="mt-2 text-left text-sm tablet:mt-4">
          Це система оздоровлення та підтримання здоров’я людини за допомогою
          спеціально відібраних якісних відомих колекційних чаїв. Це вміння
          вести бесіду, приймати рішення, заспокоювати свої думки, або ж
          навпаки, знаходити свою порцію бадьорості, мати ясність розуму та
          отримувати необхідний стан за допомогою чашки чаю.
        </p>
        <Button
          className="mx-auto mt-4 py-4 pl-[65px] pr-[72px] text-center text-md font-semibold tablet:mx-0 tablet:mt-auto"
          title="Доєднатися до школи прямо сейчас"
        >
          Доєднатись
        </Button>
      </article>
      <Image
        src="/assets/images/Hero/tea.jpg"
        width={350}
        height={300}
        priority={true}
        alt="Фото чайноъ церемонії ʼПресвітʼ"
        className="order-2 hidden w-auto rounded-full tablet:flex tablet:h-[400px] tablet:w-[200px] laptop:h-[450px] laptop:w-[300px]"
      />
    </section>
  );
};

export default Hero;
