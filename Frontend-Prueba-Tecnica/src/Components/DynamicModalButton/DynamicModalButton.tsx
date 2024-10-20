import { Modal } from "@mui/material";
import React, { useState } from "react";

const DynamicModalButton = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-500 text-white font-bold px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none shadow-lg transform hover:scale-105"
      >
        {title}
      </button>

      <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4">
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <button
                onClick={() => setModalOpen(false)}
                className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300"
              >
                Cerrar
              </button>
            </div>
            {children}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DynamicModalButton;
