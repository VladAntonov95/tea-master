"use client";
// imort contact icons
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

// import next link
import Link from "next/link";

// import next image
import Image from "next/image";

const Footer = ({ activeSection }) => {
  return (
    <footer
      id="footer"
      className={`${
        activeSection === "tableware" || activeSection === "school"
          ? "bg-tableware-color"
          : "bg-dark-green"
      } pb-4 tablet:pb-0`}
    >
      <section className="mx-auto max-w-[1440px]">
        <section className="flex flex-col justify-between px-4 pt-4 tablet:flex-row laptop:px-8">
          <h2 className="text-center font-playfair text-lg text-white-text tablet:ml-[80px] tablet:max-w-[400px] tablet:text-left laptop:ml-[100px] desktop:min-w-[800px]">
            <div className="mb-3">
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
            </div>
          </h2>
          <div className="m-auto flex tablet:m-0 tablet:mb-4 tablet:mr-[110px] laptop:mr-[90px]">
            <Link
              href="https://www.instagram.com/chadao__world/"
              className="mr-5 self-center"
            >
              <FaInstagram
                className={`h-[2.5rem] w-[2.5rem] text-white-text ${activeSection === "tableware" || activeSection === "school" ? "hover:text-tableware-hover" : "hover:text-hover-color"}`}
              />
            </Link>
            <Link
              href="https://www.facebook.com/peresvit.ua"
              className="self-center"
            >
              <FaFacebookSquare
                className={`h-[2.5rem] w-[2.5rem] text-white-text ${activeSection === "tableware" || activeSection === "school" ? "hover:text-tableware-hover" : "hover:text-hover-color"}`}
              />
            </Link>
          </div>
        </section>
        <section className="flex flex-col justify-between tablet:flex-row">
          <Image
            src="/assets/images/footer/logo.png"
            width={200}
            height={200}
            className="mx-auto my-4 max-h-[100px] max-w-[100px] rounded-full tablet:ml-[110px] tablet:mt-0 tablet:max-h-[150px] tablet:max-w-[150px] laptop:my-0 laptop:ml-[145px]"
            alt="Логотип чайної школи Пресвіт"
          />
          <div className="tablet:pr-8 laptop:pb-8">
            <ul className="mb-4 text-center font-opensans text-sm">
              <li>
                <Link
                  href=""
                  className={`text-white-text underline ${activeSection === "tableware" || activeSection === "school" ? "hover:text-tableware-hover" : "hover:text-hover-color"}`}
                >
                  Політика конфидеційності
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className={`text-white-text underline ${activeSection === "tableware" || activeSection === "school" ? "hover:text-tableware-hover" : "hover:text-hover-color"}`}
                >
                  Правила користування сайтом
                </Link>
              </li>
            </ul>
            <ul className="text:sm mt-2 font-opensans tablet:text-left laptop:ml-auto">
              <li className="flex justify-center text-white-text">
                <MdEmail className="mr-2 self-center" />
                E-mail:
                <Link
                  href="mailto:info@peresvit.ua"
                  className={`ml-2 underline ${activeSection === "tableware" || activeSection === "school" ? "hover:text-tableware-hover" : "hover:text-hover-color"}`}
                >
                  info@peresvit.ua
                </Link>
              </li>
              <li className="flex justify-center text-white-text">
                <FaPhoneAlt className="mr-2 self-center" />
                Телефон:
                <Link
                  href="tel:+380673320022"
                  className={`ml-2 underline ${activeSection === "tableware" || activeSection === "school" ? "hover:text-tableware-hover" : "hover:text-hover-color"}`}
                >
                  +380673320022
                </Link>
              </li>
              <li className="flex justify-center text-white-text">
                <IoLocationOutline className="mr-2 self-center" />
                Адреса:
                <Link
                  href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9C%D0%B8%D1%80%D0%B0,+3,+%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.4117478,30.4153047,16.8z/data=!4m15!1m8!3m7!1s0x40d4c958fd24b03f:0x79cf59e1ca75c126!2z0YPQuy4g0JzQuNGA0LAsIDMsINCa0LjQtdCyLCAwMjAwMA!3b1!8m2!3d50.4118167!4d30.4183571!16s%2Fg%2F1vpfh1px!3m5!1s0x40d4c958fd24b03f:0x79cf59e1ca75c126!8m2!3d50.4118167!4d30.4183571!16s%2Fg%2F1vpfh1px?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
                  className={`ml-2 underline ${activeSection === "tableware" || activeSection === "school" ? "hover:text-tableware-hover" : "hover:text-hover-color"}`}
                >
                  08298, вул. Миру 3
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
