"use client";
//import next image
import Image from "next/image";

// import button component
import Button from "@/components/Button/Button";

// Tableware component
export const Tableware = () => {
  return (
    <section
      id="tableware"
      className="flex flex-col mx-auto max-w-[320px] bigMobile:max-w-[400px] tablet:max-w-[768px] laptop:max-w-[1024px] p-1 bigMobile:p-2 tablet:p-4 border-t border-t-sections-border"
    >
      <section className="max-w-[1024px] flex justify-between mt-8">
        <section className="flex flex-col tablet:flex-row">
          <Image
            src="/assets/images/Tableware/tableware.png"
            width={200}
            height={200}
            alt="Посуд для чайної церемонії"
            className="rounded-full w-[200px] h-[200px] mx-auto"
          />
          <div className="mr-10 hidden laptop:block">
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
          <p className="ml-4 text-sm text-left font-Roboto max-w-[280px] bigMobile:max-w-[360px] tablet:max-w-[600px] laptop:max-w-[650px] laptop:ml-0">
            Посуд ручної роботи створений з унікальної ісинської глини, яка
            цінується за свої особливі властивості та природну красу. Кожен
            виріб виготовляється з любов’ю та майстерністю, передаючи
            багатовікові традиції гончарного мистецтва. Ісинська глина не тільки
            відзначається своєю естетичною привабливістю, але й сприяє
            покращенню смаку чаю, завдяки її природним пористим властивостям.
          </p>
        </section>
      </section>
      <section className="max-w-[1024px] flex justify-between mt-8">
        <section className="flex items-center flex-col tablet:flex-row">
          <p className="p-4 text-sm text-left max-w-[280px] bigMobile:max-w-[360px] font-Roboto tablet:max-w-[600px] laptop:max-w-[650px] tablet:mb-0">
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
          <div className="ml-5 hidden laptop:block">
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
      <Button
        title="Зробити замовлення посуду"
        className="mt-[25px] py-4 px-[72px] font-semibold text-md leading-[24.38px] m-auto"
      >
        Отримати посуд
      </Button>
    </section>
  );
};

export default Tableware;
