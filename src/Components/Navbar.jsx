import React from 'react'
import { Link } from "react-router-dom";
import { useContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  
  const { state, dispatch } = useContextGlobal();

  return (
    /* Aqui deberan agregar los liks correspondientes a las rutas definidas */
    /* Deberan implementar ademas la logica para cambiar de Theme con el button */
    <nav className={state.theme}>
      <Link to="/">Home</Link>
      <Link to="/contact">Contacto</Link>
      <Link to="/favs">Destacados</Link>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Change Theme
      </button>
    </nav>
  );
}

export default Navbar