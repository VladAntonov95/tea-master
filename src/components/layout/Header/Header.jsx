"use client";
// import useState from react
import { useState } from "react";

// imort next Links
import Link from "next/link";

//import next Image
import Image from "next/image";

// import burger icon
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineShoppingCart } from "react-icons/hi";

// Header component
const Header = ({ onSectionClick, onBack, activeSection, cartItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartItemCount = cartItems.length;

  // navigation links
  const links = [
    { text: "Чай", id: "tea" },
    { text: "Посуд", id: "tableware" },
    { text: "Чайна школа", id: "school" },
    { text: "Історія", id: "history" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`${
        activeSection === "tableware" || activeSection === "school"
          ? "bg-tableware-color"
          : "bg-dark-green"
      } sticky top-0 z-50 mx-auto`}
    >
      <section className="mx-auto flex w-full max-w-[1440px] justify-between px-[24px] py-[10px] align-middle">
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
          className={` ${isMenuOpen ? "top-[9.4%] -translate-y-[9.4%] bigMobile:top-[8%] bigMobile:-translate-y-[8%] tablet:top-[11.7%] tablet:-translate-y-[11.7%]" : "top-[50%] -translate-y-1/2"} absolute left-[50%] -translate-x-1/2 transform font-playfair text-md font-bold text-white-text bigMobile:text-lg`}
        >
          <span
            className={`${activeSection === "tableware" || activeSection === "school" ? "text-header-tableware-symbol-color" : "text-header-symbol-color"}`}
          >
            茶
          </span>
          CHADAO
          <span
            className={`${activeSection === "tableware" || activeSection === "school" ? "text-header-tableware-symbol-color" : "text-header-symbol-color"}`}
          >
            道
          </span>
        </Link>
        <nav className="hidden items-center laptop:flex">
          <ul className="flex font-opensans text-md">
            {links.map((link) => (
              <li
                key={link.text}
                className={`${activeSection === "tableware" || activeSection === "school" ? "hover:text-tableware-hover" : "hover:text-hover-color"} px-2 py-4 text-white-text desktop:px-4`}
              >
                <button
                  className="font-medium"
                  onClick={() => onSectionClick(link.id)}
                >
                  {link.text}
                </button>
              </li>
            ))}
          </ul>
          <button onClick={() => onSectionClick("cart")} className="relative">
            <HiOutlineShoppingCart
              className={`h-8 w-8 text-white-text ${activeSection === "tableware" || activeSection === "school" ? "hover:text-tableware-hover" : "hover:text-hover-color"} cursor-pointer`}
            />
            {cartItemCount > 0 && (
              <span
                className={`${activeSection === "tableware" || activeSection === "school" ? "bg-tableware-color" : "bg-dark-green"} absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white-text text-m font-bold text-white-text`}
              >
                {cartItemCount}
              </span>
            )}
          </button>
        </nav>
        <button className="ml-auto pr-4 laptop:hidden" onClick={toggleMenu}>
          <GiHamburgerMenu className="h-8 w-8 text-white-text" />
        </button>
      </section>
      {isMenuOpen && (
        <nav className="laptop:hidden">
          <ul
            className={`${
              activeSection === "tableware" || activeSection === "school"
                ? "bg-tableware-color"
                : "bg-dark-green"
            } flex flex-col items-center px-4`}
          >
            {links.map((link) => (
              <li
                key={link.text}
                className={`${activeSection === "tableware" || activeSection === "school" ? "hover:text-tableware-hover" : "hover:text-hover-color"} w-full px-4 pb-8 text-center text-white-text`}
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
