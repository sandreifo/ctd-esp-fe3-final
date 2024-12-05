import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [favs, setFavs] = useState(lsFavs);
  const [dentists, setDentists] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setDentists(res.data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  return (
    <ContextGlobal.Provider value={{dentists, favs, setFavs}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);
