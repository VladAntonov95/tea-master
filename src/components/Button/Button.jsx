"use client";
const Button = ({ children, title, className }) => {
  return (
    <button
      className={`pointer max-w-[238px] rounded-[12px] bg-wood text-center text-white-text hover:bg-accent ${className}`}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;
