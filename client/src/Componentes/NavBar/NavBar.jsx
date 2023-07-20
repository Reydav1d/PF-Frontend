import React from "react";
import s from "./NavBar.module.css";
import logo from "../../Img/logo tech.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={s.fondo}>
      <div className={s.caja1}>
        <div className={s.search}>
          <div className={s.logo}>
            <img src={logo} alt="" className={s.img} />
          </div>
          <div className={s.buscador}>buscador</div>
          <div className={s.carrito}>carrito</div>
        </div>
      </div>
      <div className={s.caja2}>
        <div className={s.option}>
          <div className={s.home}>
            <p>home</p>
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
            <p>vender</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
