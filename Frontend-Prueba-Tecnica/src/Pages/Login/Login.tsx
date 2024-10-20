import React from "react";
import { LoginService } from "../../Services/Login/Login.Service";
import Loader from "../../Components/Loader/Loader";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Login = () => {
  const {
    loading,
    register,
    handleSubmit,
    errors,
    onSubmit,
    onVerifyCaptcha,
    onVerify,
  } = LoginService();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <article className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center text-gray-800">
              Iniciar Sesión
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-2 text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  placeholder="Ingresa tu usuario"
                  type="text"
                  className={`p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.user ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("email", { required: true })}
                />
                {errors.user && (
                  <span className="mt-2 text-sm text-red-600">
                    Verifica tu usuario
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="mb-2 text-sm font-medium text-gray-700"
                >
                  Contraseña
                </label>
                <input
                  placeholder="Ingresa tu contraseña"
                  type="password"
                  className={`p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="mt-2 text-sm text-red-600">
                    Verifica tu contraseña
                  </span>
                )}
              </div>
              <div className="flex justify-center">
                <HCaptcha
                  sitekey="1c7ca926-cf20-4786-9f22-5f06660ea614"
                  onVerify={onVerifyCaptcha}
                />
              </div>
              <button
                type="submit"
                className={`w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                  onVerify === "" && "opacity-50 cursor-not-allowed"
                }`}
              >
                {onVerify === "" ? "Verificate" : "Iniciar Sesión"}
              </button>
            </form>
          </div>
        </article>
      )}
    </>
  );
};

export default Login;
