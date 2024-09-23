"use client";
//import button component
import Button from "@/components/Button/Button";

// import images from next
import Image from "next/image";

// Hero component
const Hero = () => {
  return (
    <section className="mx-auto max-w-[320px] bigMobile:max-w-[400px] tablet:max-w-[768px]  p-1 bigMobile:p-2 tablet:p-4 laptop:max-w-[1024px] flex-col tablet:flex-row flex justify-between mt-5 border-b border-b-sections-border">
      <article className="self-center w-[280px] bigMobile:w-[360px] tablet:w-[480px] laptop:w-[760px] tablet:order-1 laptop:pr-5">
        <h1 className="text-3xl tablet:text-left text-center mb-5 font-CrimsonPro font-bold">
          Чайна традиція «Пересвіт»
        </h1>
        <p className="text-sm text-left font-Roboto">
          Чайна традиція «Пересвіт» - один з напрямків Храму бойового мистецтва
          «Пересвіт».
        </p>
        <p className="text-sm text-left font-Roboto mt-5">
          Це система оздоровлення та підтримання здоров’я людини за допомогою
          спеціально відібраних якісних відомих колекційних чаїв. Це вміння
          вести бесіду, приймати рішення, заспокоювати свої думки, або ж
          навпаки, знаходити свою порцію бадьорості, мати ясність розуму та
          отримувати необхідний стан за допомогою чашки чаю.
        </p>
        <Button
          className="ml-3 bigMobile:ml-[50px] tablet:ml-0 mx-auto mt-[25px] py-4 px-[72px] text-center font-semibold text-md leading-[24.38px]"
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
        className="tablet:flex tablet:w-[200px] tablet:h-[400px] laptop:w-[300px] laptop:h-[450px] hidden order-2 rounded-full w-auto mb-8"
      />
    </section>
  );
};

export default Hero;
