import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [dentists, setDentists] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setDentists(res.data);
    });
  }, []);

  return (
    <ContextGlobal.Provider value={{dentists}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);
