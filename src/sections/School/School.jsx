"use client";
import Button from "@/components/Button/Button";

// School component
export const School = () => {
  return (
    <section className="container m-auto border-b border-b-sections-border py-4 laptop:py-8">
      <h2 className="mb-4 text-center text-2xl font-bold laptop:mb-8">
        Чайна школа «Пересвіт»
      </h2>
      <p className="m-auto mb-4 text-md laptop:mb-8">
        Запрошуємо приєднатись до курсу для початківців чайна школа «Пересвіт»
        та отримати майстер-класс за наступними категоріями:
      </p>
      <div className="mb-4 flex flex-col tablet:flex-row laptop:mb-8">
        <ul className="my-auto mb-4 space-y-2 text-sm tablet:mb-0">
          <li className="before:mr-2 before:content-['🍵']">
            Знайомство з чаями. Види і класифікація
          </li>
          <li className="before:mr-2 before:content-['🍵']">
            Чайна Традиція школи Пересвіт
          </li>
          <li className="before:mr-2 before:content-['🍵']">
            Створення чайного простору
          </li>
          <li className="before:mr-2 before:content-['🍵']">
            Чайні інструменти та божества
          </li>
          <li className="before:mr-2 before:content-['🍵']">
            Способи виготовлення чаю
          </li>
          <li className="before:mr-2 before:content-['🍵']">
            Способи заварювання. Ритуал. Чайна церемонія. Чаювання
          </li>
          <li className="before:mr-2 before:content-['🍵']">Зберігання чаю</li>
          <li className="before:mr-2 before:content-['🍵']">
            Чай в повсякденному житті
          </li>
          <li className="before:mr-2 before:content-['🍵']">
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
          className="mx-auto max-h-[280px] max-w-[312px] bigMobile:max-w-[409px] tablet:self-center laptop:max-h-[360px] laptop:max-w-[680px]"
        ></iframe>
      </div>
      <article className="flex flex-col rounded-3xl p-4 shadow-custom laptop:p-8">
        <p className="text-sm">
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
          className="mx-auto mt-4 py-4 pl-[65px] pr-[72px] text-md font-semibold laptop:mt-8"
        >
          Доєднатися
        </Button>
      </article>
    </section>
  );
};

export default School;
