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
import DashboardUsuario from "./Views/DashboardUsuario/DashUsuario";
import Misdatos from "./Componentes/MisDatos/MisDatos";
import Compras from "./Componentes/Compras/Compras";
import PayMercadoPago from "./Componentes/Payment/PaymentButton";
import SuccessPayment from "./Componentes/Payment/confirmacion";
import OrderPreview from "./Componentes/Payment/OrderPreview";
import Carrito from "./Views/Carrito/Carrito";



function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/Productos/page/:page" element={<Home />} />
        <Route path="/formUsuario" element={<FormUsuario />} />
        <Route path="/dashboardUsuario" element={<DashboardUsuario />}>
          <Route path="compras" element={<Compras />} />
          <Route path="misdatos" element={<Misdatos />} />
        </Route>
        <Route path="/" element={<Landing />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/nuevoProd" element={<ProductForm />} />
        <Route path="/pay" element={<PayMercadoPago />} />
        <Route path="/ordencompra/:id" element={<OrderPreview/>} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/confirmacion/:id" element={<SuccessPayment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
