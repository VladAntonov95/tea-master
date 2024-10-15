"use client";

import Hero from "@/sections/Hero/Hero";
import Tea from "@/sections/Tea/Tea";
import Tableware from "@/sections/Tableware/Tableware";
import School from "@/sections/School/School";
import Wisdom from "@/sections/Wisdom/Wisdom";
import { useCart } from "@/context/CartContext";
import Modal from "@/components/Modal/Modal";

export default function Home({ visibleSection }) {
  const { addToCart, handleJoinSchool, isModalOpen, modalMessage, closeModal } =
    useCart();

  return (
    <>
      <Hero addToCart={addToCart} handleJoinSchool={handleJoinSchool} />
      <Tea className={visibleSection === "tea" ? "block" : "hidden"} />
      <Tableware
        className={visibleSection === "tableware" ? "block" : "hidden"}
      />
      <School
        className={visibleSection === "school" ? "block" : "hidden"}
        addToCart={addToCart}
        handleJoinSchool={handleJoinSchool}
      />
      <Wisdom />
      {isModalOpen && <Modal message={modalMessage} onClose={closeModal} />}
    </>
  );
}
