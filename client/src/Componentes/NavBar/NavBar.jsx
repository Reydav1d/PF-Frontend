import React from "react";
import s from "./NavBar.module.css";
import logo from "../../Img/logo tech.png";
import { Link } from "react-router-dom";
import Casa from "../../Img/home.png";
import Carrito from "../../Img/carrito.png";
import SearchBar from "../../Componentes/SearchBar/SearchBar";

function NavBar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const elToken = localStorage.getItem("token");

  return (
    <div className={s.fondo}>
      <SearchBar />
      <div className={s.caja1}>
        <div className={s.search}>
          <div className={s.logo}>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              <img src={logo} alt="" className={s.img} />
            </Link>
          </div>
          <div className={s.buscador}>buscador</div>
          <div className={s.carrito}>
            <img src={Carrito} alt="" style={{ width: "60px" }} />
          </div>
        </div>
      </div>
      <div className={s.caja2}>
        <div className={s.option}>
          <div className={s.home}>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              <img src={Casa} alt="" style={{ width: "40px" }} />
            </Link>
          </div>
          <div className={s.botones}>
            <Link
              to={"/Productos/page/1"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <p>productos</p>
            </Link>
            <Link
              to={"/contacto"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <p>contacto</p>
            </Link>
            <Link
              to={"/favoritos"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <p>favoritos</p>
            </Link>
            <Link
              to={"/nosotros"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <p>nosotros</p>
            </Link>
            {elToken === null ? (
              ""
            ) : (
              <Link
                to={"/nuevoProd"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <p className={s.registrar}>Vender</p>
              </Link>
            )}
          </div>
          <div className={s.cuenta}>
            {elToken === null ? (
              ""
            ) : (
              <Link
                to={"/dashboardUsuario"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Mi Cuenta
              </Link>
            )}

            {elToken === null ? (
              <Link
                to={"/formUsuario"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <p>Iniciar Sesión</p>
              </Link>
            ) : (
              <button onClick={handleLogout}>Cerrar Sesión</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
