"use client";
import React from "react";
import Button from "@/components/Button/Button";

const OrderConfirmation = ({ onBack }) => {
  return (
    <section className="container">
      <section className="relative m-8 mx-auto max-w-[750px] rounded-2xl bg-background text-center shadow-custom">
        <h2 className="py-4 font-merriweather text-lg font-bold">
          Дякуємо за замовлення!
        </h2>
        <p className="mx-auto max-w-[500px] font-roboto text-m">
          Ваше замовлення успішно відправлено. Ми зв'яжемося з вами найближчим
          часом.
        </p>
        <Button
          onClick={onBack}
          className="mx-auto mb-8 w-[231px] px-[72px] py-2 font-roboto text-md font-semibold tablet:mt-8"
        >
          Назад
        </Button>
      </section>
    </section>
  );
};

export default OrderConfirmation;
