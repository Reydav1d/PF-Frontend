import React, { useState } from "react";
import { validarUser } from "../../Redux/Actions/action";
import { useDispatch } from "react-redux";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  function handleEmail(e) {
    setInput({
      ...input,
      email: e.target.value,
    });
  }
  function handlePassword(e) {
    setInput({
      ...input,
      password: e.target.value,
    });
  }

  //console.log(input);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(validarUser(input));
  };

  return (
    <div className="h-700 flex items-center justify-center h-screen">
      <div className="w-1/4 bg-gray-100 border border-gray-300 rounded-lg p-8 flex items-center justify-center">
        <form className="w-full" action="" onSubmit={handleSubmit}>
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
              value={input.email}
              onChange={handleEmail}
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
              value={input.password}
              onChange={handlePassword}
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
