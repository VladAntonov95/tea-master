"use client";

// imort next Links
import Link from "next/link";

//import next Image
import Image from "next/image";

// import burger icon
import { GiHamburgerMenu } from "react-icons/gi";

// Header component
const Header = () => {
  // navigation links
  const links = [
    { text: "Чай", id: "tea" },
    { text: "Посуда", id: "tableware" },
    { text: "Чайна школа", id: "school" },
    { text: "Мудрість", id: "wisdom" },
  ];

  return (
    <header className="mx-auto max-w-[100%] sticky top-0 z-50 bg-background border-b border-b-sections-border">
      <section className="w-full flex align-middle p-[10px]">
        <Image
          src="/assets/images/footer/logo.png"
          width={100}
          height={100}
          className="rounded-full p-4 max-w-[70px] max-h-[70px] tablet:max-w-[100px] tablet:max-h-[100px]"
          alt="Логотип чайноъ школи Пресвіт"
        />
        <Link
          href="#"
          className="hidden text-lg laptop:flex items-center font-CrimsonPro max-w-[285px] text-center font-bold"
        >
          Чайна Перетвореного Світогляду
        </Link>
        <nav className="hidden laptop:flex items-center ml-auto">
          <ul className="flex">
            {links.map((link) => (
              <li
                key={link.text}
                className="text-dark-text px-[15px] py-[10px] hover:text-accent"
              >
                <Link href={`#${link.id}`}>
                  <button className="font-CrimsonPro text-l font-medium">
                    {link.text}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="laptop:hidden ml-auto">
          <GiHamburgerMenu className="w-8 h-8" />
        </button>
      </section>
    </header>
  );
};

export default Header;
