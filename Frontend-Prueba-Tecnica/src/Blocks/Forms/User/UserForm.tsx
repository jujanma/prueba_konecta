import React from "react";
import Loader from "../../../Components/Loader/Loader";
import { AddUserService } from "../../../Services/Users/AddUser.Service";
import { EditUserService } from "../../../Services/Users/EditUser.Service";
import { Users } from "../../../Typings/Users";

const UserForm = ({ editable }: { editable?: Users }) => {
  const { loadingAddUser, handleSubmit, register, errors, onSubmit: tryToCreate } = AddUserService();
  const { loadingEditUser, onSubmit: tryToUpdate } = EditUserService(editable!);

  if (loadingAddUser || loadingEditUser) {
    return <Loader />;
  }

  return (
    <form
      onSubmit={handleSubmit(editable ? tryToUpdate : tryToCreate)}
      className="space-y-4 max-h-80 overflow-auto p-6 bg-white rounded-lg"
    >
      <div>
        <label className="block">Tipo de usuario</label>
        <select
          {...register("role", { required: "Este campo es obligatorio" })}
          defaultValue={editable?.role || ""}
          className={`border ${
            errors.role ? "border-red-500" : "border-gray-300"
          } rounded-lg p-2 w-full`}
        >
          <option value="">Seleccione...</option>
          <option value="Administrador">Administrador</option>
          <option value="Asesor">Asesor</option>
        </select>
        {errors.role && (
          <span className="text-red-500">{errors.role.message}</span>
        )}
      </div>

      <div>
        <label className="block">Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Este campo es obligatorio",
          })}
          defaultValue={editable?.email || ""}
          placeholder={editable?.email || "Escriba su email"}
          className={`border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded-lg p-2 w-full`}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </div>

      <div>
        <label className="block">Nombre</label>
        <input
          type="text"
          {...register("name", {
            required: "Este campo es obligatorio",
          })}
          defaultValue={editable?.name || ""}
          placeholder={editable?.name || "Escriba el nombre"}
          className={`border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } rounded-lg p-2 w-full`}
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </div>

      <div>
        <label className="block">Contraseña</label>
        <input
          type="password"
          {...register("password", {
            required: !editable,
          })}
          placeholder="Escriba la contraseña"
          className={`border ${
            errors.password ? "border-red-500" : "border-gray-300"
          } rounded-lg p-2 w-full`}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="mt-4 mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
      >
        {editable ? "Actualizar" : "Crear"}
      </button>
    </form>
  );
};

export default UserForm;