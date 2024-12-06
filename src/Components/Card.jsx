import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";


const Card = ({ dentist }) => {
  const {dispatch, state} = useContextGlobal();
  const findFav = state.favs.some((fav) => fav.id ===dentist.id);
  console.log(findFav);
  const toggleFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({type: findFav ? "DELETE_FAVORITE" : "ADD_FAVORITE", payload: dentist})
  };

  return (

    <div className="card">
//     {/* En cada card deberan mostrar en name - username y el id */}
//     {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <Link to={`/dentist/${dentist.id}`}>
      <h3>{dentist.name}</h3>
      <p>{dentist.username}</p>
      </Link>
      <button onClick={toggleFav} className="favButton">{findFav ? "Remove fav" : "Add fav"}</button> 
    </div>

          
  );
};

export default Card;
