import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./SearchBar.module.css";
import { searchProducts } from "../../Redux/Actions/action";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchProducts(searchTerm));
    setSearchTerm(""); // Restablecer el valor del input a una cadena vacía
  };

  return (
    <div className={style.sbcontainer}>
      <form className={style.formsb} onSubmit={handleSubmit}>
        <input
          className={style.inputsb}
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button className={style.buttonsb} type="submit">
          <img className={style.imgsb} src="https://i.postimg.cc/X7QvyvYS/image.png"/>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
