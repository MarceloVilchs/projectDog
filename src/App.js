import React from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom';
import './App.css';
/*import adoptaunamigo from './img/amigo.png';*/
import Rutas from './componentes/Rutas';
import Home from './paginas/Home';
import Registro from './paginas/Registro';
import Loguearse from './paginas/Loguearse';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className='App'>
    <Router>
      {/*<h1>Adopta un perro</h1>*/}
      <nav>
        <ul>
          <li>
            <Link to="/" className="list" element={<Home />}>Home</Link>
          </li>
          <li>
            <Link to="/registro" className="list" element={<Registro />}>Registro</Link>
          </li>
          <li>
            <Link to="/Loguearse" className="list" element={<Loguearse />}>Loguearse</Link>
          </li>
        </ul>
      </nav>
      {/*<img src={adoptaunamigo} id='foto' alt='Cartel mercado libre' />*/}
      <Rutas />
      <Footer />
    </Router>
    </div>
  );
}

export default App;
