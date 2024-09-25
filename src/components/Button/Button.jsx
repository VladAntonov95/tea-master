"use client";
const Button = ({ children, title, className }) => {
  return (
    <button
      className={`bg-wood  text-white-text text-center pointer hover:bg-accent rounded-[12px] max-w-[400px] ${className}`}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;
