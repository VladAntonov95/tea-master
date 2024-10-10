import React from "react";

const Cart = ({ onBack }) => {
  return (
    <section className="bg-yellow-200 p-8">
      <h2 className="mb-4 font-merriweather text-lg font-bold">Корзина</h2>
      <p className="mb-4 font-roboto text-m">Тут будуть ваші покупки</p>
      <button
        onClick={onBack}
        className="bg-blue-500 text-white mt-4 rounded px-4 py-2 font-roboto text-sm"
      >
        Назад
      </button>
    </section>
  );
};

export default Cart;
