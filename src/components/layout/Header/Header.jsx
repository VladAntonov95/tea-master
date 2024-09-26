"use client";
// import useState from react
import { useState } from "react";

// imort next Links
import Link from "next/link";

//import next Image
import Image from "next/image";

// import burger icon
import { GiHamburgerMenu } from "react-icons/gi";

// Header component
const Header = ({ onSectionClick, onBack }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // navigation links
  const links = [
    { text: "Чай", id: "tea" },
    { text: "Посуда", id: "tableware" },
    { text: "Чайна школа", id: "school" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container sticky top-0 z-50 mx-auto w-[100%] max-w-[1440px] border-b border-b-sections-border bg-background">
      <section className="flex w-full p-[10px] align-middle">
        <Image
          src="/assets/images/footer/logo.png"
          width={100}
          height={100}
          className="max-h-[70px] max-w-[70px] rounded-full p-4 tablet:max-h-[100px] tablet:max-w-[100px]"
          alt="Логотип чайноъ школи Пресвіт"
          onClick={onBack}
        />
        <Link
          onClick={onBack}
          href="#"
          className="font-CrimsonPro hidden max-w-[430px] items-center text-center text-lg font-bold text-wood laptop:flex"
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
        <button className="ml-auto pr-4 laptop:hidden" onClick={toggleMenu}>
          <GiHamburgerMenu className="h-8 w-8" />
        </button>
      </section>
      {isMenuOpen && (
        <nav className="laptop:hidden">
          <ul className="flex flex-col items-center bg-background p-4">
            {links.map((link) => (
              <li
                key={link.text}
                className="w-full border-b border-b-sections-border p-4 text-center text-dark-text hover:text-accent"
              >
                <button
                  className="font-CrimsonPro text-l font-medium"
                  onClick={() => {
                    onSectionClick(link.id);
                    setIsMenuOpen(false);
                  }}
                >
                  {link.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
