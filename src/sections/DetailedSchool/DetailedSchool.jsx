import React from "react";

const DetailedSchool = ({ onBack }) => {
  return (
    <section className="bg-yellow-200 p-8">
      <h2 className="mb-4 text-lg font-bold">Подробности о чайной школе</h2>
      <p className="mb-4 text-m">
        Узнайте больше о нашей чайной школе, курсах и методах обучения.
      </p>
      <button
        onClick={onBack}
        className="bg-blue-500 text-white mt-4 rounded px-4 py-2 text-sm"
      >
        Назад
      </button>
    </section>
  );
};

export default DetailedSchool;
