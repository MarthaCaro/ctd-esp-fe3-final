import {Route, Routes} from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import ContextGlobal from '../src/Components/utils/Global.context'
import React, {useContext } from 'react'

function App() {
  const GlobalContext =useContext(ContextGlobal);
  return (
      <div className={GlobalContext.theme==="light" ? 'App main':'App dark'}>
          <Navbar/>
          <Routes>
            <Route path= '/' element = {<Home/>}/>
            <Route path= '/dentist/:id' element = {<Detail/>}/>
            <Route path= '/contacto' element = {<Contact/>}/>
            <Route path= '/favs' element = {<Favs/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
