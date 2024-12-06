import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";

// export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "ADD_FAVORITE":
      if (state.favs.some((fav) => fav.id === action.payload.id)) {
        return state; // Avoid duplicates
      }
      return { ...state, favs: [...state.favs, action.payload] };
    case "DELETE_FAVORITE":
      const filterFavs = [];
      return {...state, favs: filterFavs};
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};

const initialState = {
  dentists: [],
  favs: lsFavs,
  theme: "",
};

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer, initialState)
  
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res);
      dispatch({type: "SET_DENTISTS", payload: res.data})
    });
  }, []);

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);
