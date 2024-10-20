import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/Auth/AuthContext";

const Sidebar = () => {
  const auth = useAuth();

  const Role = localStorage.getItem("userRole")

  return (
    <aside className="w-56 h-screen bg-white shadow-md">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-16 bg-indigo-600 text-white">
          <h1 className="text-2xl font-semibold">Bienvenido!</h1>
        </div>
        <nav className="flex flex-col flex-grow p-4 space-y-4">
          <div className="flex flex-col flex-grow p-4 space-y-4">
            <Link
              to="/"
              className="p-2 text-lg text-gray-800 hover:bg-gray-200 rounded-lg"
            >
              Inicio
            </Link>
            {Role === 'Administrador' && <Link
              to="/users"
              className="p-2 text-lg text-gray-800 hover:bg-gray-200 rounded-lg"
            >
              Usuarios
            </Link>}
            <Link
              to="/products"
              className="p-2 text-lg text-gray-800 hover:bg-gray-200 rounded-lg"
            >
              Productos
            </Link>
          </div>
          <div>
            <button
              onClick={auth.logout}
              className="p-2 text-lg text-gray-800 hover:bg-gray-200 rounded-lg"
            >
              Cerrar Sesión
            </button>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
