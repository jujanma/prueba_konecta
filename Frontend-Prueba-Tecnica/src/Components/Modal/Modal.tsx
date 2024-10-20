import React from "react";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode; 
}

const Modal = ({ isOpen, closeModal, children }: ModalProps) => {
  if (!isOpen) return <></>; 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={closeModal}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4">
        <div className="mb-4">{children}</div>
        <button
          onClick={closeModal}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;