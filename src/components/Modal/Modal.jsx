import React, { useEffect } from "react";

const Modal = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="container fixed inset-0 z-10 flex items-center justify-center bg-background bg-opacity-50">
      <div className="border-gray-300 rounded border bg-background p-4 shadow-md">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Modal;
