import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from "./Componentes/NavBar/NavBar.jsx";
import Landing from "./Views/Landing/Landing.jsx";
import Home from "./Views/Home/Home.jsx";
import Detail from "./Views/Detail/Detail.jsx";
import Footer from "./Componentes/Footer/Footer.jsx";
import Contacto from "./Views/Contacto/Contacto.jsx";
import Nosotros from "./Views/Nosotros/Nosotros.jsx";
import Favoritos from "./Views/Favoritos/Favoritos.jsx";
import ProductForm from "./Views/FormProductos/FormProductos.jsx";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route path='/Productos/page/:page' component={Home} />
      <Route path="/" Component={Landing} />
      <Route path="/detail/:id" Component={Detail} />
      <Route path="/favoritos" Component={Favoritos} />
      <Route path="/contacto" Component={Contacto} />
      <Route path="/nosotros" Component={Nosotros} />
      <Route path="/nuevoProd" Component={ProductForm} />
      </Switch>
      <Footer />

    </div>
  )
}

export default App