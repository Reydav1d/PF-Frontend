import React, { useEffect, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { validarUser } from "../../Redux/Actions/action";
import { useDispatch } from "react-redux";
//import { redireccion } from "../../config";
import axios from "axios";

const RegisterForm = () => {
  const user = localStorage.getItem("user");
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (user) {
      setUserInfo(JSON.parse(user));
    }
  }, [user]);
  //console.log(userInfo);

  // #############  AUTH GOOGLE #################

  const handleGoogleResponse = async (googleData) => {
    //console.log(googleData, "data de google en caso de exito");
    const reponse = await axios.post(`/auth/google/login`, null, {
      headers: {
        Authorization: `Bearer ${googleData.access_token}`,
      },
    });
    console.log(reponse.data.result);
    console.log(reponse.data.user);
    localStorage.setItem("token", reponse.data.result);
    localStorage.setItem("user", JSON.stringify(reponse.data.user));
    const user = localStorage.getItem("user");
    const usuario = JSON.parse(user);
    //console.log(usuario.user_banned);
    window.location.href = usuario?.user_banned === true ? "/userBaneado" : "/";
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
      // window.location.href = "/";
      const user = localStorage.getItem("user");
      const usuario = JSON.parse(user);
      //console.log(usuario.user_banned);

      window.location.href = usuario?.estado === true ? "/userBaneado" : "/";
    } catch (error) {
      console.error("Error al Ingresar", error);
    }
  };

  return (
    <div className="h-700 flex items-center justify-center h-screen">
      <div className="w-1/4 bg-gray-100 border border-gray-300 rounded-lg p-8 flex items-center justify-center">
        <form className="w-full" action="" onSubmit={handleSubmit}>
          <h1>iniciar sesión con </h1>
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
          <h1>iniciar sesión con </h1>
          <button
            onClick={signIn}
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200 ml-10"
          >
            Google 🚀{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
