import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import ContextGlobal from '../Components/utils/Global.context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoon} from "@fortawesome/free-solid-svg-icons"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Navbar = () => {
  const GlobalContext =useContext(ContextGlobal);
  
  const changeThemeHandler=()=>{
    GlobalContext.changeTheme();
  }
  return (
      /* Aqui deberan agregar los liks correspondientes a las rutas definidas */
      /* Deberan implementar ademas la logica para cambiar de Theme con el button */
      <nav>
        <div>DH Odonto</div>
        <div className='links'>    
          <Link to= '/'>Home</Link>
          <Link to= '/dentist/:id'></Link> 
          <Link to= '/contacto'>Contact</Link> 
          <Link to= '/favs'>Favs</Link>
          <button className={GlobalContext.theme ==="light" ? 'moonLight':'moonDark'} onClick={changeThemeHandler}><FontAwesomeIcon icon={faMoon}/></button>
        </div>
      </nav>   
  )
}
export default Navbar