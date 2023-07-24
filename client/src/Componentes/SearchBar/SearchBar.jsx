import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./SearchBar.css";
import { getSearchAdnFilterProducts, setLoading } from "../../Redux/Actions/action";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setLoading());
    dispatch(getSearchAdnFilterProducts({search: searchTerm}));
    setSearchTerm(""); // Restablecer el valor del input a una cadena vacía
  };

  return (
    <div className="sb-container">
      <form className="form-sb" onSubmit={handleSubmit}>
        <input
          className="input-sb"
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="button-sb" type="submit">
          <img className="img-sb" src="https://i.postimg.cc/X7QvyvYS/image.png"/>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
