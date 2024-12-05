import React from "react";
import { Link } from "react-router-dom";


const Card = ({ dentist }) => {

  // const addFav = ()=>{
  //   // Aqui iria la logica para agregar la Card en el localStorage
  // }

  return (

    <div className="card">
//     {/* En cada card deberan mostrar en name - username y el id */}
//     {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <Link to={`/dentist/${dentist.id}`}>
      <h3>{dentist.name}</h3>
      <p>{dentist.username}</p>
      </Link>
      {/* <button onClick={handleAddFav}>Add Fav</button> */}
      {/* <button>
        <a href={`/dentist/${dentist.id}`}>View Details</a>
      </button> */}
    </div>

    //    <button onClick={addFav} className="favButton">Add fav</button>    
  );
};

export default Card;
