"use client";

import { useState } from "react";

const Button = ({ children, title, className, onClick, activeSection }) => {
  const [clickCount, setClickCount] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);

  const handleClick = () => {
    if (isBlocked) return;

    setClickCount((prevCount) => prevCount + 1);
    onClick();

    if (clickCount >= 5) {
      setIsBlocked(true);
      setTimeout(() => {
        setClickCount(0);
        setIsBlocked(false);
      }, 3000);
    }
  };

  return (
    <button
      className={` ${
        activeSection === "tableware"
          ? "bg-tableware-color hover:bg-tableware-hover"
          : "bg-dark-green hover:bg-hover-color"
      } pointer max-w-[231px] rounded-[12px] text-center font-roboto text-sm text-white-text ${className} ${isBlocked ? "cursor-not-allowed opacity-50" : ""}`}
      title={title}
      onClick={handleClick}
      disabled={isBlocked}
    >
      {children}
    </button>
  );
};

export default Button;
