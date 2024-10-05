"use client";
const Button = ({ children, title, className, onClick, activeSection }) => {
  return (
    <button
      className={` ${activeSection === "tableware" ? "bg-tableware-color hover:bg-tableware-hover" : "bg-dark-green hover:bg-hover-color"} pointer max-w-[231px] rounded-[12px] text-center font-roboto text-sm text-white-text ${className}`}
      title={title}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
