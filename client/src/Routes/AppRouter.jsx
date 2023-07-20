import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../Componentes/NavBar/NavBar";
import Landing from "../Views/Landing/Landing";
import Home from "../Views/Home/Home";
import Footer from "../Componentes/Footer/Footer";

export default function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" Component={Landing} />
      </Routes>
      <Footer />
    </Router>
  );
}
