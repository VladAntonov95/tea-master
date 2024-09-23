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

const Footer = () => {
  return (
    <footer id="footer" className="bg-wood">
      <section className=" max-w-[1024px] mx-auto">
        <section className="flex justify-between p-4">
          <h2 className="text-2xl text-center font-CrimsonPro text-white-text">
            Чайна перетвореного світогляду &quot;Пресвіт&quot;
          </h2>
          <div className="flex">
            <Link
              href="https://www.instagram.com/chadao__world/"
              className="self-center mr-5"
            >
              <FaInstagram className="text-white-text w-[2.5rem] h-[2.5rem]" />
            </Link>
            <Link
              href="https://www.facebook.com/peresvit.ua"
              className="self-center"
            >
              <FaFacebookSquare className="text-white-text w-[2.5rem] h-[2.5rem]" />
            </Link>
          </div>
        </section>
        <section className="flex">
          <Image
            src="/assets/images/footer/logo.png"
            width={200}
            height={200}
            className="rounded-full p-4"
            alt="Логотип чайноъ школи Пресвіт"
          />
          <ul className="self-center">
            <li>
              <Link href="" className="text-sm text-white-text m-6 underline">
                Політика конфидеційності
              </Link>
            </li>
            <li>
              <Link href="" className="text-sm text-white-text m-6 underline">
                Правила користування сайтом
              </Link>
            </li>
          </ul>
          <ul className="self-center ml-auto">
            <li className="flex text-sm text-white-text">
              <MdEmail className="mr-2 self-center" />
              E-mail:
              <Link href="mailto:info@peresvit.ua" className="ml-2 underline">
                info@peresvit.ua
              </Link>
            </li>
            <li className="flex text-sm text-white-text">
              <FaPhoneAlt className="mr-2 self-center" />
              Телефон:
              <Link href="tel:+380673320022" className="ml-2 underline ">
                +380673320022
              </Link>
            </li>
            <li className="flex text-sm text-white-text">
              <IoLocationOutline className="mr-2 self-center" />
              Адреса:
              <Link
                href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9C%D0%B8%D1%80%D0%B0,+3,+%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.4117478,30.4153047,16.8z/data=!4m15!1m8!3m7!1s0x40d4c958fd24b03f:0x79cf59e1ca75c126!2z0YPQuy4g0JzQuNGA0LAsIDMsINCa0LjQtdCyLCAwMjAwMA!3b1!8m2!3d50.4118167!4d30.4183571!16s%2Fg%2F1vpfh1px!3m5!1s0x40d4c958fd24b03f:0x79cf59e1ca75c126!8m2!3d50.4118167!4d30.4183571!16s%2Fg%2F1vpfh1px?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
                className="ml-2 underline "
              >
                08298, вул. Миру 3
              </Link>
            </li>
          </ul>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
