import React, {Fragment, useState} from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [user, setUser]= useState({
    fullName:"",
    email:""
  });

  const [err, setErr] = useState();
  const [show, setShow] = useState();
  
  const handleSubmit = (event) => {
      event.preventDefault();
      setShow(true)
      const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(user.fullName.length<5 || !user.email.match(mailformat)){
        setErr(true)
      }else{
        setErr(false)
      }
        
  }

  let mensaje= `Gracias ${user.fullName}, te contactaremos cuanto antes vía mail`;
  if(err){
    mensaje= 'Por favor verifique su información nuevamente';
  }
return (
  <Fragment>
    <div> 
        <form  onSubmit={handleSubmit}>
            <input  type="text" placeholder="Full name" value={user.fullName} onChange={(event) => setUser({...user, fullName: event.target.value})}/>
            <input  type="text" placeholder="Email" value={user.email} onChange={(event) => setUser({...user, email: event.target.value})}/>
            <input type="submit" value="Enviar"/>
        </form>
        <div>
        {show && mensaje}
        </div>         
    </div>
  </Fragment>
);
};

export default Form;
