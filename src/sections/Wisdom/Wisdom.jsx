"use client";

// import react icons
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

// Wisdom component
const Wisdom = () => {
  return (
    <section className="container m-auto flex justify-between py-4 laptop:py-8">
      <section className="mt-8 flex flex-col">
        <article className="mb-4 w-[100%] rounded-lg p-4 shadow-custom laptop:mb-8 laptop:w-[70%] laptop:p-8">
          <FaQuoteLeft className="ml-auto h-[40px] w-[40px]" />
          <h2 className="text-center text-l font-bold">Учення спокою</h2>
          <p className="mb-4">
            У кожному моменті заварювання чаю необхідно знаходити спокій. Процес
            починається з очищення розуму. Коли розум спокійний, кожна крапля
            чаю відображає внутрішню гармонію. Спокій у чашці — це спокій у
            душі.
          </p>
          <FaQuoteRight className="h-[40px] w-[40px]" />
        </article>
        <article className="mb-4 w-[100%] rounded-lg p-4 shadow-custom laptop:mb-8 laptop:flex laptop:w-[70%] laptop:flex-col laptop:self-center laptop:p-8 laptop:text-center">
          <FaQuoteLeft className="ml-auto h-[40px] w-[40px]" />
          <h2 className="text-center text-l font-bold">Учення терпіння</h2>
          <p className="mb-4">
            Як заварювання чаю вимагає часу та уважного підходу, так і шлях до
            майстерності потребує терпіння. Спішка руйнує істинний смак чаю і
            призводить до втрати усвідомленості. Терпіння — це ключ до пізнання
            глибини чаю та бойових мистецтв.
          </p>
          <FaQuoteRight className="h-[40px] w-[40px]" />
        </article>
        <article className="mb-4 w-[100%] rounded-lg p-4 shadow-custom laptop:mb-8 laptop:flex laptop:w-[70%] laptop:flex-col laptop:self-end laptop:p-8 laptop:text-end">
          <FaQuoteLeft className="ml-auto h-[40px] w-[40px]" />
          <h2 className="text-center text-l font-bold">Учення концентрації</h2>
          <p className="mb-4">
            Чайний ритуал вимагає повної зосередженості на кожному дії: від
            вибору чаю до його заварювання. В бойових мистецтвах так само —
            кожен рух має бути свідомим і точним. Концентрація веде до
            досконалості не лише в чайній церемонії, а й у житті.
          </p>
          <FaQuoteRight className="h-[40px] w-[40px]" />
        </article>
        <article className="mb-4 w-[100%] rounded-lg p-4 shadow-custom laptop:mb-8 laptop:flex laptop:w-[70%] laptop:flex-col laptop:self-center laptop:p-8 laptop:text-center">
          <FaQuoteLeft className="ml-auto h-[40px] w-[40px]" />
          <h2 className="text-center text-l font-bold">Учення простоти</h2>
          <p className="mb-4">
            Справжня краса і сила заключені в простоті. Як чашка чаю може
            розкрити глибокі аромати без зайвих прикрас, так і шлях воїна чистий
            і вільний від непотрібного. Позбавляйся зайвого, щоб побачити істину
            в кожному моменті.
          </p>
          <FaQuoteRight className="h-[40px] w-[40px]" />
        </article>
        <article className="mb-4 w-[100%] rounded-lg p-4 shadow-custom laptop:mb-8 laptop:w-[70%] laptop:p-8">
          <FaQuoteLeft className="ml-auto h-[40px] w-[40px]" />
          <h2 className="text-center text-l font-bold"> Учення гармонії</h2>
          <p className="mb-4">
            Чайна церемонія та бойові мистецтва — це баланс. Взаємодія сил,
            гармонія природи і людини. Коли ти знаходиш гармонію з навколишнім
            світом і самим собою, чай стає не просто напоєм, а мостом до
            розуміння всесвіту
          </p>
          <FaQuoteRight className="h-[40px] w-[40px]" />
        </article>
      </section>
    </section>
  );
};

export default Wisdom;
