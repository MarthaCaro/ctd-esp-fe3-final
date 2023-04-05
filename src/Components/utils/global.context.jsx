import { createContext, useEffect, useReducer } from "react";

export const initialState = {theme: "light", data: [], changeTheme: ()=>{}}
const ContextGlobal = createContext(initialState);

const dispatchDentistaAppReducer =(state, action)=>{
  if(action.type === "changeTheme"){
   const newTheme = state.theme === "light" ? "dark" : "light";

    return {
      ...state,
      theme: newTheme
    }
  }

  if(action.type === "AddUsers"){
    return {
      ...state,
      data: action.data
    }
  }

  return initialState;
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const[dentistaApp, dispatchDentistaApp]= useReducer(dispatchDentistaAppReducer, initialState);

  useEffect(()=>{
    async function fetchData() {
      let response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
      let data =  await response.json();
      dispatchDentistaApp({type: "AddUsers", data: data});
    }
    fetchData();
  }, []);

  const changeThemeHandler=()=>{
    dispatchDentistaApp({type: "changeTheme"})
  }

  return (
    <ContextGlobal.Provider value={{
      theme: dentistaApp.theme, 
      data: dentistaApp.data,
      changeTheme: changeThemeHandler
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextGlobal;
