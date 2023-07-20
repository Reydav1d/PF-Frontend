import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../Componentes/NavBar/NavBar";
import Landing from "../Views/Landing/Landing";
import Productos from "../Views/Home/Home";
import Footer from "../Componentes/Footer/Footer";
import Contacto from "../Views/Contacto/Contacto";
import Nosotros from "../Views/Nosotros/Nosotros";
import Favoritos from "../Views/Favoritos/Favoritos";

export default function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/productos" Component={Productos} />
        <Route path="/favoritos" Component={Favoritos} />
        <Route path="/contacto" Component={Contacto} />
        <Route path="/nosotros" Component={Nosotros} />
      </Routes>
      <Footer />
    </Router>
  );
}
