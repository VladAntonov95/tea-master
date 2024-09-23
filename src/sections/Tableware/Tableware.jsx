"use client";
//import next image
import Image from "next/image";

// import button component
import Button from "@/components/Button/Button";

// Tableware component
export const Tableware = () => {
  return (
    <section id="tableware" className="flex flex-col mx-auto max-w-[1024px]">
      <section className="mx-auto max-w-[1024px] flex justify-between mt-20">
        <section className="flex">
          <Image
            src="/assets/images/Tableware/tableware.png"
            width={200}
            height={200}
            alt="Посуд для чайної церемонії"
            className="rounded-full w-[200px] h-[200px]"
          />
          <div className="mr-10">
            <Image
              src="/assets/images/Tableware/2.png"
              width={100}
              height={100}
              alt="Посуд для чайної церемонії"
              className="rounded-full w-[100px] h-[100px]"
            />
            <Image
              src="/assets/images/Tableware/3.png"
              width={100}
              height={100}
              alt="Посуд для чайної церемонії"
              className="rounded-full w-[100px] h-[100px]"
            />
          </div>
          <p className="text-sm font-Roboto max-w-[600px]">
            Посуд ручної роботи створений з унікальної ісинської глини, яка
            цінується за свої особливі властивості та природну красу. Кожен
            виріб виготовляється з любов’ю та майстерністю, передаючи
            багатовікові традиції гончарного мистецтва. Ісинська глина не тільки
            відзначається своєю естетичною привабливістю, але й сприяє
            покращенню смаку чаю, завдяки її природним пористим властивостям.
          </p>
        </section>
      </section>
      <section className="mx-auto max-w-[1024px] flex justify-between mt-20">
        <section className="flex items-center">
          <p className="text-sm font-Roboto max-w-[700px]">
            Чайники з ісинської глини — це втілення справжнього мистецтва. Вони
            мають здатність зберігати тепло та розкривати найтонші ноти ароматів
            чаю. Завдяки своїй пористості, чайник поступово вбирає аромати чаю,
            що робить кожну наступну заварку ще більш насиченою. Кожен чайник
            має індивідуальний дизайн, що робить його не лише функціональним
            предметом, а й витвором мистецтва. Чашки з ісинської глини
            дозволяють насолоджуватися кожним ковтком чаю. Вони приємні на
            дотик, а їх текстура додає особливої атмосфери під час чаювання.
            Завдяки ручному виготовленню, кожна чашка унікальна, зберігаючи в
            собі частинку душі майстра. Інші вироби, такі як чайні піали,
            кришталеві підставки та аксесуари, доповнюють ваш чайний ритуал,
            створюючи цілісну атмосферу гармонії та насолоди. Вони виготовлені з
            тієї ж високоякісної ісинської глини, що й чайники та чашки, що
            забезпечує їх міцність, довговічність та здатність передавати
            глибину смаку кожного чаю. Обираючи посуд з ісинської глини, ви
            обираєте не лише естетику, але й традиції, які пройшли крізь
            століття.
          </p>
          <div className="ml-5">
            <Image
              src="/assets/images/Tableware/4.png"
              width={100}
              height={100}
              alt="Посуд для чайної церемонії"
              className="rounded-full w-[100px] h-[100px]"
            />
            <Image
              src="/assets/images/Tableware/5.png"
              width={100}
              height={100}
              alt="Посуд для чайної церемонії"
              className="rounded-full w-[100px] h-[100px]"
            />
          </div>
          <Image
            src="/assets/images/Tableware/6.png"
            width={200}
            height={200}
            alt="Посуд для чайної церемонії"
            className="rounded-full w-[200px] h-[200px]"
          />
        </section>
      </section>
      <Button title="Зробити замовлення посуду" className="m-auto">
        Отримати посуд
      </Button>
    </section>
  );
};

export default Tableware;
