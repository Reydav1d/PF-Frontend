import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { validarUser } from "../../Redux/Actions/action";
import { useDispatch } from "react-redux";
//import { redireccion } from "../../config";
import axios from "axios";
import { useToggle } from "./toggle";

const RegisterForm = () => {
  const [isPasswordShow, toggleShowPassword] = useToggle();
  // #############  AUTH GOOGLE #################

  const handleGoogleResponse = async (googleData) => {
    //console.log(googleData, "data de google en caso de exito");
    const reponse = await axios.post(`/auth/google/login`, null, {
      headers: {
        Authorization: `Bearer ${googleData.access_token}`,
      },
    });
    console.log(reponse.data.result);
    localStorage.setItem("token", reponse.data.result);
    window.location.href = "/";
  };

  const handleGoogleResponseError = (errorFromGoogle) => {
    console.log(errorFromGoogle, "este es el de fallo de login autentication");
  };

  const signIn = useGoogleLogin({
    onSuccess: handleGoogleResponse,
    onError: handleGoogleResponseError,
  });

  // #############  AUTH GOOGLE #################

  const dispatch = useDispatch();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(validarUser(input));
      // Si la validación es exitosa, establecer isAuthenticated a true para redireccionar
      window.location.href = "/";
    } catch (error) {
      console.error("Error al Ingresar", error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="w-1/4 bg-white border border-gray-300 rounded-lg p-8 shadow-md">
        <form className="w-full" action="" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-semibold mb-4">Iniciar sesión</h1>

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
            <div className="flex flex-col justify-between  relative w-full">
              <input
                type={isPasswordShow ? "text" : "password"}
                id="password"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                value={input.password}
                onChange={handlePassword}
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-end pr-2 pb-1">
                <button
                  onClick={toggleShowPassword}
                  type="button"
                  className="text-gray-400 focus:outline-none"
                >
                  {isPasswordShow ? <p>👁️</p> : <p>👁️</p>}
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-violet-500 text-white font-semibold px-4 py-2 rounded hover:bg-violet-600 transition-colors duration-200"
          >
            Iniciar sesión
          </button>
          <p className="mt-2 text-gray-600">O inicia sesión con</p>
          <button
            onClick={signIn}
            className="mt-2 bg-violet-500 text-white font-semibold px-4 py-2 rounded hover:bg-violet-600 transition-colors duration-200 flex items-center"
          >
            <span className="mr-2">Google 🚀</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
