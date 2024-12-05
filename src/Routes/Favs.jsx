import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { favs } = useContextGlobal();
  return (
    <div>
      {favs.map((dentist) => (
        <Card key={dentist.id} dentist={dentist} />
      ))}
    </div>
    // {/* este componente debe consumir los destacados del localStorage */}
    // {/* Deberan renderizar una Card por cada uno de ellos */}
  );
};

export default Favs;
