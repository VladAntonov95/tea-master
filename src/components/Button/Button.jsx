"use client";
const Button = ({ children, title, className }) => {
  return (
    <button
      className={`bg-wood width rounded-[12px] py-4 px-[72px] font-semibold text-md leading-[24.38px] text-white-text text-center pointer hover:bg-accent mt-[25px] ${className}`}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;
