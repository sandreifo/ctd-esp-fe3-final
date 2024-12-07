import Card from '../Components/Card'
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useContextGlobal ();

  return (
    <div className={`card-grid ${state.theme}`}>
      {state.dentists.map((dentist) => (
        <Card key={dentist.id} dentist={dentist}/>))
      }
    </div>
  )
}

export default Home