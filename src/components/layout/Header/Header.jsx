"use client";

// imort next Links
import Link from "next/link";

// Header component
const Header = () => {
  // navigation links
  const links = [
    { text: "Чай" },
    { text: "Посуда" },
    { text: "Чайна школа" },
    { text: "Мудрість" },
  ];

  return (
    <header className="mx-auto max-w-[1024px]">
      <section className="w-full bg-transparent z-10 py-[30px] flex justify-between">
        <Link
          href="#"
          className="text-lg py-[10px] align-center font-CrimsonPro"
        >
          Чайна Перетвореного Світогляду
        </Link>
        <nav>
          <ul className="flex">
            {links.map((link) => (
              <li
                key={link.text}
                className="text-dark-text px-[15px] py-[10px] hover:text-accent"
              >
                <button className="font-CrimsonPro text-lg font-medium">
                  {link.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
