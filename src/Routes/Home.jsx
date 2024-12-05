import React, { useEffect, useState } from "react";
import Card from '../Components/Card'
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentist, setDentist] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setDentist(res.data);
    });
  }, []);

  return (
    <div>
      {dentist.map((dentist) => (
        <Card key={dentist.id} dentist={dentist}/>))
      }
    </div>
  )
}

export default Home