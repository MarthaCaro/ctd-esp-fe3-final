import React, {Fragment, useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Detail = () => {
  const [dentista, setDentista]= useState({});
  const {id} = useParams();

  useEffect(()=>{
    async function fetchData() {
      let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      let data =  await response.json();
      setDentista(data);
    }
    fetchData();
  }, []);

 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  return (
    <Fragment>
      <h1>Detail Dentist {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentista.name}</td>
            <td>{dentista.email}</td>
            <td>{dentista.phone}</td>
            <td>{dentista.website}</td>
          </tr>
        </tbody>
      </table> 
    </Fragment>
  )
}

export default Detail