"use client";

// imort next Links
import Link from "next/link";

//import next Image
import Image from "next/image";

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
    <header className="mx-auto max-w-[1024px]">
      <section className="w-full bg-transparent flex align-middle py-[10px]">
        <Image
          src="/assets/images/footer/logo.png"
          width={100}
          height={100}
          className="rounded-full p-4"
          alt="Логотип чайноъ школи Пресвіт"
        />
        <Link
          href="#"
          className="text-lg flex items-center font-CrimsonPro max-w-[285px] text-center font-bold"
        >
          Чайна Перетвореного Світогляду
        </Link>
        <nav className="flex items-center ml-auto">
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
      </section>
    </header>
  );
};

export default Header;
