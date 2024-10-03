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
const Header = ({ onSectionClick, onBack, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // navigation links
  const links = [
    { text: "Чай", id: "tea" },
    { text: "Посуд", id: "tableware" },
    { text: "Чайна школа", id: "school" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`${
        activeSection === "tableware" ? "bg-tableware-color" : "bg-dark-green"
      } sticky top-0 z-50 mx-auto`}
    >
      <section className="mx-auto flex w-full max-w-[1440px] justify-between p-[10px] align-middle">
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
          className="hidden max-w-[430px] items-center text-center text-lg font-bold text-white-text laptop:flex"
        >
          <span className="text-header-symbol-color">茶</span>CHADAO
          <span className="text-header-symbol-color">道</span>
        </Link>
        <nav className="hidden items-center laptop:flex">
          <ul className="flex">
            {links.map((link) => (
              <li
                key={link.text}
                className={`${activeSection === "tableware" ? "hover:text-tableware-hover" : "hover:text-hover-color"} p-4 text-white-text`}
              >
                <button
                  className="text-l font-medium"
                  onClick={() => onSectionClick(link.id)}
                >
                  {link.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <button className="ml-auto pr-4 laptop:hidden" onClick={toggleMenu}>
          <GiHamburgerMenu className="h-8 w-8 text-white-text" />
        </button>
      </section>
      {isMenuOpen && (
        <nav className="laptop:hidden">
          <ul
            className={`${
              activeSection === "tableware"
                ? "bg-tableware-color"
                : "bg-dark-green"
            } flex flex-col items-center px-4`}
          >
            {links.map((link) => (
              <li
                key={link.text}
                className={`${activeSection === "tableware" ? "hover:text-tableware-hover" : "hover:text-hover-color"} w-full px-4 pb-8 text-center text-white-text`}
              >
                <button
                  className="text-l font-medium"
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
