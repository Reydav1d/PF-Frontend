import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./SearchBar.module.css";
import { searchProducts } from "../../Redux/Actions/action";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchProducts(title));
    setTitle(""); // Restablecer el valor del input a una cadena vacía
  };

  return (
    <div className={style.sbcontainer}>
      <form className={style.formsb} onSubmit={handleSubmit}>
        <input
          className={style.inputsb}
          type="search"
          placeholder="Buscar productos..."
          value={title}
          onChange={(event) => handleChange(event)}
        />
        <button className={style.buttonsb} type="submit" onClick={(event)=> handleSubmit(event)}>
          <img className={style.imgsb} src="https://i.postimg.cc/X7QvyvYS/image.png"/>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
