import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../Componentes/NavBar/NavBar";
import Landing from "../Views/Landing/Landing";
import Home from "../Views/Home/Home";
import Detail from "../Views/Detail/Detail";
import Footer from "../Componentes/Footer/Footer";
import Contacto from "../Views/Contacto/Contacto";
import Nosotros from "../Views/Nosotros/Nosotros";
import Favoritos from "../Views/Favoritos/Favoritos";
import ProductForm from "../Views/FormProductos/FormProductos";

export default function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/detail/:id" Component={Detail} />
        <Route path="/productos" Component={Home} />
        <Route path="/favoritos" Component={Favoritos} />
        <Route path="/contacto" Component={Contacto} />
        <Route path="/nosotros" Component={Nosotros} />
        <Route path="/nuevoProd" Component={ProductForm} />
      </Routes>
      <Footer />
    </Router>
  );
}
