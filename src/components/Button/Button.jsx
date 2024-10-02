"use client";
const Button = ({ children, title, className, onClick }) => {
  return (
    <button
      className={`pointer bg-dark-green hover:bg-hover-color max-w-[238px] rounded-[12px] text-center text-white-text ${className}`}
      title={title}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
