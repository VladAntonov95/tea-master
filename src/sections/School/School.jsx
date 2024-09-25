"use client";
import Button from "@/components/Button/Button";

// School component
export const School = () => {
  return (
    <section
      id="school"
      className="mx-auto laptop:max-w-[1024px] max-w-[280px] bigMobile:max-w-[400px] tablet:max-w-[768px] tablet:p-4 my-8 border-t border-t-sections-border"
    >
      <h2 className="text-2xl font-bold text-center mb-5 mt-8 font-CrimsonPro bigMobile:max-w-[360px] tablet:max-w-[768px]">
        Чайна школа «Пересвіт»
      </h2>
      <p className="mx-auto text-md font-Roboto bigMobile:max-w-[360px] tablet:max-w-[768px] laptop:max-w-[1024px] tablet:p-0 tablet:mb-4">
        Запрошуємо приєднатись до курсу для початківців чайна школа «Пересвіт»
        та отримати майстер-класс за наступними категоріями:
      </p>
      <div className="flex tablet:flex-row flex-col tablet:p-0">
        <ul className="text-sm font-Roboto space-y-2 py-4 text-gray-700 mb-4 tablet:mb-0 bigMobile:max-w-[360px] mx-auto">
          <li className="before:content-['🍵'] before:mr-2">
            Знайомство з чаями. Види і класифікація
          </li>
          <li className="before:content-['🍵'] before:mr-2">
            Чайна Традиція школи Пересвіт
          </li>
          <li className="before:content-['🍵'] before:mr-2">
            Створення чайного простору
          </li>
          <li className="before:content-['🍵'] before:mr-2">
            Чайні інструменти та божества
          </li>
          <li className="before:content-['🍵'] before:mr-2">
            Способи виготовлення чаю
          </li>
          <li className="before:content-['🍵'] before:mr-2">
            Способи заварювання. Ритуал. Чайна церемонія. Чаювання
          </li>
          <li className="before:content-['🍵'] before:mr-2">Зберігання чаю</li>
          <li className="before:content-['🍵'] before:mr-2">
            Чай в повсякденному житті
          </li>
          <li className="before:content-['🍵'] before:mr-2">
            Легенди та історії
          </li>
        </ul>
        <iframe
          width="720"
          height="400"
          src="https://www.youtube-nocookie.com/embed/Af3rsgvEzSQ"
          frameBorder="0"
          allowFullScreen
          title="Video"
          className="max-w-[280px] max-h-[280px] bigMobile:max-w-[400px] laptop:max-w-[680px] laptop:max-h-[360px] tablet:self-center"
        ></iframe>
      </div>
      <div className="shadow-custom p-4 mt-2 rounded-lg flex flex-col">
        <p className="text-sm font-Roboto">
          В чайній школі «Пересвіт» де проходять навчання, бажаючі отримати
          унікальні знання, дізнатись тонкощі та особливості чайної справи,
          використовувати чаї в укріпленні свого організму, і звісно ж дивувати
          своїх друзів та рідних смачними чаями та приємними емоціями, і
          можливо, стати справжнім чайним майстром! Чайна традиція «Пересвіт» не
          оминула і наше молоде покоління! Для дітей та підлітків створено
          спеціальний курс чайної школи, де юні чайні майстри отримують знання
          про чайну традицію, дізнаються в яких ситуаціях і які чаї слід
          використовувати, працюють зі своїми емоціями, станом та відчуттями. Ці
          знання закладають міцний фундамент у процес формування здорової та
          сильної особистості! Адже, як приємно будуть здивовані батьки, чиї
          діти під час стресових ситуацій замість обурення та негативних емоцій,
          запропонують знайти рішення за чашкою приготованого ними смачного чаю!
        </p>
        <Button
          title="Доєднатися до чайної школи ʼПресвітʼ"
          className="mt-[25px] py-4 px-[72px] font-semibold text-md leading-[24.38px]"
        >
          Доєднатися до школи!
        </Button>
      </div>
    </section>
  );
};

export default School;
