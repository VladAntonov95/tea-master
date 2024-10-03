import React from "react";

const History = ({ onBack }) => {
  return (
    <section className="bg-yellow-200 p-8">
      <h2 className="font-merriweather mb-4 text-lg font-bold">
        Історія чайної школи
      </h2>
      <p className="mb-4 font-roboto text-m">
        Дізнайтесь більше про всю історію чаю, чайної школи та навіть трошки
        більше.
      </p>
      <button
        onClick={onBack}
        className="bg-blue-500 text-white mt-4 rounded px-4 py-2 font-roboto text-sm"
      >
        Назад
      </button>
    </section>
  );
};

export default History;
