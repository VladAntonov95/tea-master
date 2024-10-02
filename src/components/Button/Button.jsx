"use client";
const Button = ({ children, title, className, onClick }) => {
  return (
    <button
      className={`pointer max-w-[238px] rounded-[12px] bg-wood text-center text-white-text hover:bg-accent ${className}`}
      title={title}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
