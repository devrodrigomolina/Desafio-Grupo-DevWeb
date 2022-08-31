import "./App.css";
import Cards from "./Components/Cards/Cards";
import { dados } from './Dados'

function App() {
  return (
    <div style={{display: 'flex'}}>
      {dados.map((lista, index) => <Cards key={index} lista={lista} />)}
    </div>
  )
}

export default App;
