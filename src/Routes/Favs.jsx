import React, {useEffect, useState} from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Favs = () => {
  const[favoritos, setFavoritos] = useState([]);

  useEffect(()=>{
    const favs= JSON.parse(localStorage.getItem("favs")) || [];
    setFavoritos(favs);
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid" >
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favoritos.map(f => <Card key={f.id} 
          name = {f.name}
          username = {f.username}
          id={f.id}/>)}
      </div>
    </>
  );
};

export default Favs;
