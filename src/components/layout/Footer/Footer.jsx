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
        activeSection === "tableware" ? "bg-tableware-color" : "bg-dark-green"
      } py-4 laptop:py-8`}
    >
      <section className="mx-auto max-w-[1440px]">
        <section className="flex flex-col justify-between p-4 tablet:flex-row laptop:p-8">
          <h2 className="text-center text-2xl text-white-text tablet:max-w-[400px] desktop:min-w-[800px]">
            Чайна перетвореного світогляду «Пересвіт»
          </h2>
          <div className="m-auto flex p-8 tablet:m-0 tablet:ml-auto">
            <Link
              href="https://www.instagram.com/chadao__world/"
              className="mr-5 self-center"
            >
              <FaInstagram className="h-[2.5rem] w-[2.5rem] text-white-text" />
            </Link>
            <Link
              href="https://www.facebook.com/peresvit.ua"
              className="self-center"
            >
              <FaFacebookSquare className="h-[2.5rem] w-[2.5rem] text-white-text" />
            </Link>
          </div>
        </section>
        <section className="flex flex-col justify-between tablet:flex-row">
          <Image
            src="/assets/images/footer/logo.png"
            width={200}
            height={200}
            className="m-auto max-h-[100px] max-w-[100px] rounded-full p-4 tablet:m-0 tablet:ml-[110px] tablet:max-h-[200px] tablet:max-w-[200px] laptop:ml-[125px]"
            alt="Логотип чайної школи Пресвіт"
          />
          <div className="tablet:p-8">
            <ul className="text-center">
              <li>
                <Link href="" className="text-sm text-white-text underline">
                  Політика конфидеційності
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm text-white-text underline">
                  Правила користування сайтом
                </Link>
              </li>
            </ul>
            <ul className="mt-2 tablet:text-left laptop:ml-auto">
              <li className="flex justify-center text-sm text-white-text">
                <MdEmail className="mr-2 self-center" />
                E-mail:
                <Link href="mailto:info@peresvit.ua" className="ml-2 underline">
                  info@peresvit.ua
                </Link>
              </li>
              <li className="flex justify-center text-sm text-white-text">
                <FaPhoneAlt className="mr-2 self-center" />
                Телефон:
                <Link href="tel:+380673320022" className="ml-2 underline">
                  +380673320022
                </Link>
              </li>
              <li className="flex justify-center text-sm text-white-text">
                <IoLocationOutline className="mr-2 self-center" />
                Адреса:
                <Link
                  href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9C%D0%B8%D1%80%D0%B0,+3,+%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.4117478,30.4153047,16.8z/data=!4m15!1m8!3m7!1s0x40d4c958fd24b03f:0x79cf59e1ca75c126!2z0YPQuy4g0JzQuNGA0LAsIDMsINCa0LjQtdCyLCAwMjAwMA!3b1!8m2!3d50.4118167!4d30.4183571!16s%2Fg%2F1vpfh1px!3m5!1s0x40d4c958fd24b03f:0x79cf59e1ca75c126!8m2!3d50.4118167!4d30.4183571!16s%2Fg%2F1vpfh1px?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
                  className="ml-2 underline"
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
