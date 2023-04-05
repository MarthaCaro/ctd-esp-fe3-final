
import React, {useContext } from 'react'
import ContextGlobal from '../Components/utils/Global.context'
import Card from '../Components/Card';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Home = () => {
  const GlobalContext =useContext(ContextGlobal);
  
  return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
        {GlobalContext.data.map(user=> <Card key={user.id} 
        name = {user.name}
        username = {user.username}
        id={user.id}/>)}
      </div>
    </main>
  )
  
}

export default Home