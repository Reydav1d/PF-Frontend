// import { useState } from "react";
//import "./App.css";
// import { Route } from "react-router-dom";
// import NavBar from "./Componentes/NavBar/NavBar.jsx";
// import Landing from "./Views/Landing/Landing.jsx";
// import Home from "./Views/Home/Home.jsx";
import AppRouter from "./Routes/AppRouter.jsx";
function App() {
  //const [count, setCount] = useState(0);

  return (
    <div>
      <AppRouter/>
    </div>
  );
}

export default App;
