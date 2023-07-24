import React from "react";
import s from "./NavBar.module.css";
import logo from "../../Img/logo tech.png";
import { Link } from "react-router-dom";
import Casa from "../../Img/home.png";
import Carrito from "../../Img/carrito.png";

function NavBar() {
  return (
    <div className={s.fondo}>
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
              to={"/productos"}
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
          </div>
          <div className={s.cuenta}>
            <h4>mi cuenta</h4>
            <Link
              to={"/nuevoProd"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <p>vender</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
