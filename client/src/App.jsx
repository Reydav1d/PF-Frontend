import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import NavBar from './Componentes/NavBar/NavBar';
import Home from './Views/Home/Home';
import Detail from './Views/Detail/Detail'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route path='/Productos/page/:page' component={Home} />
      <Route path='/detail/:id' component={Detail} />
      </Switch>
    </div>
  )
}

export default App