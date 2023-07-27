import React, { useState } from "react";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la lógica de envío al backend con los datos ingresados
    console.log("Email:", email);
    console.log("Password:", password);

    // También puedes realizar las validaciones aquí antes de enviar los datos al backend
  };

  return (
    <div className="h-700 flex items-center justify-center h-screen">
      <div className="w-1/4 bg-gray-100 border border-gray-300 rounded-lg p-8 flex items-center justify-center">
        <form className="w-full">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
