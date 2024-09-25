"use client";
// imort next Links
import Link from "next/link";

//import next Image
import Image from "next/image";

// import burger icon
import { GiHamburgerMenu } from "react-icons/gi";

// Header component
const Header = ({ onSectionClick, onBack }) => {
  // navigation links
  const links = [
    { text: "Чай", id: "tea" },
    { text: "Посуда", id: "tableware" },
    { text: "Чайна школа", id: "school" },
  ];

  return (
    <header className="container sticky top-0 z-50 mx-auto w-[100%] max-w-[1440px] border-b border-b-sections-border bg-background">
      <section className="flex w-full p-[10px] align-middle">
        <Image
          src="/assets/images/footer/logo.png"
          width={100}
          height={100}
          className="max-h-[70px] max-w-[70px] rounded-full p-4 tablet:max-h-[100px] tablet:max-w-[100px]"
          alt="Логотип чайноъ школи Пресвіт"
        />
        <Link
          onClick={onBack}
          href="#"
          className="font-CrimsonPro hidden max-w-[285px] items-center text-center text-lg font-bold laptop:flex"
        >
          Чайна Перетвореного Світогляду
        </Link>
        <nav className="ml-auto hidden items-center laptop:flex">
          <ul className="flex">
            {links.map((link) => (
              <li
                key={link.text}
                className="p-4 text-dark-text hover:text-accent"
              >
                <button
                  className="font-CrimsonPro text-l font-medium"
                  onClick={() => onSectionClick(link.id)}
                >
                  {link.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <button className="ml-auto pr-4 laptop:hidden">
          <GiHamburgerMenu className="h-8 w-8" />
        </button>
      </section>
    </header>
  );
};

export default Header;
