"use client";
//import next image
import Image from "next/image";

// import button component
import Button from "@/components/Button/Button";

// Tableware component
export const Tableware = () => {
  return (
    <section className="mx-auto max-w-[1024px] flex justify-between mt-20">
      <Image
        src="/assets/images/Tableware/tableware.png"
        width={400}
        height={600}
        alt="Посуд для чайної церемонії"
        className="rounded-full"
      />
      <article className="self-center w-[580px] pr-5">
        <h2 className="text-4xl text-left mb-5 font-CrimsonPro">Посуд</h2>
        <p className="text-md font-Roboto">
          Тут повинно бути загальний опис посуду, але я нічого не знайшов
        </p>
        <Button title="Зробити замовлення посуду">Отримати посуд</Button>
      </article>
    </section>
  );
};

export default Tableware;
