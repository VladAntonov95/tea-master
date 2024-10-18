"use client";
import React from "react";
import Button from "@/components/Button/Button";

const OrderConfirmation = ({ onBack, text, showButton = true }) => {
  return (
    <section className="container flex min-h-[450px] items-center justify-center">
      <section className="relative max-w-[750px] rounded-2xl bg-background px-8 text-center shadow-custom">
        <h2 className="py-8 font-merriweather text-lg font-bold">
          Дякуємо за замовлення!
        </h2>
        <p className="mx-auto mb-8 max-w-[500px] font-roboto text-m">{text}</p>
        {showButton && (
          <Button
            onClick={onBack}
            className="mx-auto mb-8 w-[231px] px-[72px] py-2 font-roboto text-md font-semibold"
          >
            Назад
          </Button>
        )}
      </section>
    </section>
  );
};

export default OrderConfirmation;
