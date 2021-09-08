import './App.css';
import { useEffect, useState } from 'react';
import Characters from './components/Characters'
function App() {
  const[characterList, setCharacterList ] = useState([])

  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character/')//colocar o endereço que vai buscar os nossos dados
    //endpoint: endereço que vai ser pego o json 
    //promisses: promessa
    .then((response)=> response.json())
    .then((response)=>setCharacterList(response.results))
    .catch((err)=>console.log(err))
  },[])
  return (
    <div className="App">
      <header className="App-header">
      <span>Meus personagens</span>
        <Characters characterList={characterList}/>
      </header>

    </div>
  );
}

export default App;
