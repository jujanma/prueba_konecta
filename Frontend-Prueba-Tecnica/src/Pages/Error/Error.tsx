import React from 'react'

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <h2 className="mt-2 text-2xl font-semibold text-gray-800">Página no encontrada</h2>
        <p className="mt-4 text-gray-600">Lo sentimos, la página que estás buscando no existe.</p>
        <a 
          href="/" 
          className="mt-6 inline-block px-4 py-2 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
};

export default Error