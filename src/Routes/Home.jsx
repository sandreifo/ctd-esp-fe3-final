import Card from '../Components/Card'
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {dentists} = useContextGlobal ();

  return (
    <div>
      {dentists.map((dentist) => (
        <Card key={dentist.id} dentist={dentist}/>))
      }
    </div>
  )
}

export default Home