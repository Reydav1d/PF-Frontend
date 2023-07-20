import React from "react";
import s from "./NavBar.module.css";
import logo from "../../Img/logo tech.png";

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
            <p>contacto</p>
            <p>favoritos</p>
            <p>nosotros</p>
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
