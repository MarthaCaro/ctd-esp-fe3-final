import React, {useReducer} from "react";
import {Link} from "react-router-dom";
import imagen from "../../src/images/doctor.jpg"
import "../index.css";

const dispatchFavoritosHandler=(state, action)=>{
  if(action.type==="add"){
    const cards= JSON.parse(localStorage.getItem("favs")) || [];
    let card= cards.find(c=>c.id===action.id);
    if(!card){
      card={id:action.id, name: action.name, username: action.username};
      cards.push(card);
      localStorage.setItem("favs", JSON.stringify(cards));
      alert("Se ha agregado a Favorito");
      return cards;
    }
  }
  return state;
}

const Card = ({ name, username, id }) => {
  const[favoritos, dispatchFavoritos]= useReducer(dispatchFavoritosHandler, []);
  const addFav = (id, name, username)=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatchFavoritos({type: "add", id: id, name: name, username: username});
  }

  return (
    <div className="card">
      <img src= {imagen} className="imagenDoctor"/>
        <Link to ={`/dentist/${id}`}>{name}</Link>
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <div className="card-grid card-align">{username}</div>
        <button onClick={addFav.bind(null, id, name, username)} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
