import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Componentes/NavBar/NavBar.jsx";
import Landing from "./Views/Landing/Landing.jsx";
import Home from "./Views/Home/Home.jsx";
import Detail from "./Views/Detail/Detail.jsx";
import Footer from "./Componentes/Footer/Footer.jsx";
import Contacto from "./Views/Contacto/Contacto.jsx";
import Nosotros from "./Views/Nosotros/Nosotros.jsx";
import Favoritos from "./Views/Favoritos/Favoritos.jsx";
import ProductForm from "./Views/FormProductos/FormProductos.jsx";
import FormUsuario from "./Componentes/FormUsuario/FormUsuario";
import PayMercadoPago from "./Componentes/Payment/integrerMP";
// import Confirmacion from "./Componentes/Payment/confirmacion"; // Página de confirmación

import Carrito from "./Views/Carrito/Carrito"

import PreOrden from "./Componentes/Payment/integrerMP"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/Productos/page/:page" element={<Home />} />
        <Route path="/formUsuario" element={<FormUsuario />} />
        <Route path="/" element={<Landing />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/nuevoProd" element={<ProductForm />} />
        <Route path="/pay" element={<PayMercadoPago />} />
        {/* <Route path="/confirmacion/:preferenceId" element={<Confirmacion />} /> */}
        {/* <Route path="/ordencompra" element={<PreOrden/>} /> */}
        <Route path="/carrito" element={<Carrito/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
