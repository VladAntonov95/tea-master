"use client";
//import next image
import Image from "next/image";

// import button component
import Button from "@/components/Button/Button";

// Tableware component
export const Tableware = () => {
  return (
    <section className="container m-auto flex max-w-[320px] flex-col border-b border-b-sections-border py-4 bigMobile:max-w-[400px] tablet:max-w-[768px] laptop:max-w-[1024px] laptop:py-8">
      <section className="flex justify-between">
        <section className="flex flex-col tablet:flex-row">
          <Image
            src="/assets/images/Tableware/tableware.png"
            width={200}
            height={200}
            alt="Посуд для чайної церемонії"
            className="mx-auto mb-4 h-[200px] w-[200px] rounded-full tablet:mb-0"
          />
          <div className="mr-8 hidden laptop:block">
            <Image
              src="/assets/images/Tableware/2.png"
              width={100}
              height={100}
              alt="Посуд для чайної церемонії"
              className="h-[100px] w-[100px] rounded-full"
            />
            <Image
              src="/assets/images/Tableware/3.png"
              width={100}
              height={100}
              alt="Посуд для чайної церемонії"
              className="h-[100px] w-[100px] rounded-full"
            />
          </div>
          <p className="my-auto text-left text-sm tablet:ml-4 laptop:ml-0 laptop:max-w-[650px]">
            Посуд ручної роботи створений з унікальної ісинської глини, яка
            цінується за свої особливі властивості та природну красу. Кожен
            виріб виготовляється з любов’ю та майстерністю, передаючи
            багатовікові традиції гончарного мистецтва. Ісинська глина не тільки
            відзначається своєю естетичною привабливістю, але й сприяє
            покращенню смаку чаю, завдяки її природним пористим властивостям.
          </p>
        </section>
      </section>
      <section className="mt-4 flex justify-between laptop:mt-8">
        <section className="flex flex-col items-center tablet:flex-row">
          <p className="mb-4 text-left text-sm tablet:mb-0 laptop:max-w-[650px]">
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
          <div className="ml-8 hidden laptop:block">
            <Image
              src="/assets/images/Tableware/4.png"
              width={100}
              height={100}
              alt="Посуд для чайної церемонії"
              className="h-[100px] w-[100px] rounded-full"
            />
            <Image
              src="/assets/images/Tableware/5.png"
              width={100}
              height={100}
              alt="Посуд для чайної церемонії"
              className="h-[100px] w-[100px] rounded-full"
            />
          </div>
          <Image
            src="/assets/images/Tableware/6.png"
            width={200}
            height={200}
            alt="Посуд для чайної церемонії"
            className="h-[200px] w-[200px] rounded-full"
          />
        </section>
      </section>
      <Button
        title="Зробити замовлення посуду"
        className="m-auto mt-4 px-[72px] py-4 text-md font-semibold laptop:mt-8"
      >
        Отримати посуд
      </Button>
    </section>
  );
};

export default Tableware;
