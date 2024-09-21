"use client";
import Button from "@/components/Button/Button";

// School component
export const School = () => {
  return (
    <section className="mx-auto max-w-[1024px] my-20">
      <h2 className="text-4xl text-center mb-5 font-CrimsonPro">
        Чайна школа "Пресвіт"
      </h2>
      <p className="text-l font-Roboto">
        Запрошуємо приєднатись до курсу для початківців «Чайна школа» та
        отримати майстер-класс за наступними категоріями:
      </p>
      <div className="flex">
        <ul className="text-md font-Roboto space-y-2 mt-4 text-gray-700">
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
          src="https://www.youtube.com/embed/Af3rsgvEzSQ"
          frameBorder="0"
          allowFullScreen
          title="Video"
        ></iframe>
      </div>
      <div className="border-wood border mt-8 p-4 rounded-lg flex flex-col">
        <p className="text-md font-Roboto">
          В чайній школі «Пересвіт», де проходять навчання, бажаючі отримати
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
        <Button title="Доєднатися до чайної школи ʼПресвітʼ">
          Доєднатися до школи!
        </Button>
      </div>
    </section>
  );
};

export default School;
