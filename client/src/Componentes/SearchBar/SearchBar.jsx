import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./SearchBar.css";
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;


//http://localhost:3001/products?name=Hub%20Usb