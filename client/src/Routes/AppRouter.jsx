import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../Componentes/NavBar/NavBar";
import Landing from "../Views/Landing/Landing";
import Home from "../Views/Home/Home";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/home" Component={Home} />
      </Routes>
    </Router>
  );
}
