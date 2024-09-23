"use client";
//import button component
import Button from "@/components/Button/Button";

// import images from next
import Image from "next/image";

// Hero component
const Hero = () => {
  return (
    <section className="mx-auto max-w-[1024px] flex justify-between mt-5">
      <article className="self-center w-[580px] pr-5">
        <h1 className="text-3xl text-left mb-5 font-CrimsonPro font-bold">
          Чайна школа для початківців
        </h1>
        <p className="text-sm font-Roboto">
          Чайна традиція «Пересвіт» - один з напрямків Храму бойового мистецтва
          «Пересвіт».
        </p>
        <p className="text-sm font-Roboto mt-5">
          Це система оздоровлення та підтримання здоров’я людини за допомогою
          спеціально відібраних якісних відомих колекційних чаїв. Це вміння
          вести бесіду, приймати рішення, заспокоювати свої думки, або ж
          навпаки, знаходити свою порцію бадьорості, мати ясність розуму та
          отримувати необхідний стан за допомогою чашки чаю.
        </p>
        <Button className="mt-[25px]" title="Доєднатися до школи прямо сейчас">
          Доєднатись
        </Button>
      </article>
      <Image
        src="/assets/images/Hero/tea.jpg"
        width={350}
        height={300}
        priority={true}
        alt="Фото чайноъ церемонії ʼПресвітʼ"
        className="rounded-full w-auto"
      />
    </section>
  );
};

export default Hero;
