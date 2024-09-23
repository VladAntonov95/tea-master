"use client";

// import react icons
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

// Wisdom component
const Wisdom = () => {
  return (
    <section
      id="wisdom"
      className="mx-auto max-w-[1024px] flex justify-between mt-5"
    >
      <section className="flex flex-col">
        <article className="shadow-custom rounded-lg p-4 mb-5 w-[70%]">
          <FaQuoteLeft className="w-[40px] h-[40px] ml-auto" />
          <h2 className="text-center font-bold text-l">Учення спокою</h2>
          <p className="mb-4">
            У кожному моменті заварювання чаю необхідно знаходити спокій. Процес
            починається з очищення розуму. Коли розум спокійний, кожна крапля
            чаю відображає внутрішню гармонію. Спокій у чашці — це спокій у
            душі.
          </p>
          <FaQuoteRight className="w-[40px] h-[40px]" />
        </article>
        <article className="shadow-custom rounded-lg p-4 mb-5 w-[70%] flex flex-col self-center text-center">
          <FaQuoteLeft className="w-[40px] h-[40px] ml-auto" />
          <h2 className="text-center font-bold text-l">Учення терпіння</h2>
          <p className="mb-4">
            Як заварювання чаю вимагає часу та уважного підходу, так і шлях до
            майстерності потребує терпіння. Спішка руйнує істинний смак чаю і
            призводить до втрати усвідомленості. Терпіння — це ключ до пізнання
            глибини чаю та бойових мистецтв.
          </p>
          <FaQuoteRight className="w-[40px] h-[40px]" />
        </article>
        <article className="shadow-custom rounded-lg p-4 mb-5 flex flex-col text-end self-end w-[70%]">
          <FaQuoteLeft className="w-[40px] h-[40px] ml-auto" />
          <h2 className="text-center font-bold text-l">Учення концентрації</h2>
          <p className="mb-4">
            Чайний ритуал вимагає повної зосередженості на кожному дії: від
            вибору чаю до його заварювання. В бойових мистецтвах так само —
            кожен рух має бути свідомим і точним. Концентрація веде до
            досконалості не лише в чайній церемонії, а й у житті.
          </p>
          <FaQuoteRight className="w-[40px] h-[40px]" />
        </article>
        <article className="shadow-custom rounded-lg p-4 mb-5 w-[70%] flex flex-col self-center text-center">
          <FaQuoteLeft className="w-[40px] h-[40px] ml-auto" />
          <h2 className="text-center font-bold text-l">Учення простоти</h2>
          <p className="mb-4">
            Справжня краса і сила заключені в простоті. Як чашка чаю може
            розкрити глибокі аромати без зайвих прикрас, так і шлях воїна чистий
            і вільний від непотрібного. Позбавляйся зайвого, щоб побачити істину
            в кожному моменті.
          </p>
          <FaQuoteRight className="w-[40px] h-[40px]" />
        </article>
        <article className="shadow-custom rounded-lg p-4 mb-5 w-[70%]">
          <FaQuoteLeft className="w-[40px] h-[40px] ml-auto" />
          <h2 className="text-center font-bold text-l"> Учення гармонії</h2>
          <p className="mb-4">
            Чайна церемонія та бойові мистецтва — це баланс. Взаємодія сил,
            гармонія природи і людини. Коли ти знаходиш гармонію з навколишнім
            світом і самим собою, чай стає не просто напоєм, а мостом до
            розуміння всесвіту
          </p>
          <FaQuoteRight className="w-[40px] h-[40px]" />
        </article>
      </section>
    </section>
  );
};

export default Wisdom;
