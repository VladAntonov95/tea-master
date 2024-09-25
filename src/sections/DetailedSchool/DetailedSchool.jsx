import React from "react";

const DetailedSchool = ({ onBack }) => {
  return (
    <section className="p-8 bg-yellow-200">
      <h2 className="text-4xl font-bold mb-4">Подробности о чайной школе</h2>
      <p className="text-lg mb-4">
        Узнайте больше о нашей чайной школе, курсах и методах обучения.
      </p>
      <button
        onClick={onBack}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Назад
      </button>
    </section>
  );
};

export default DetailedSchool;
