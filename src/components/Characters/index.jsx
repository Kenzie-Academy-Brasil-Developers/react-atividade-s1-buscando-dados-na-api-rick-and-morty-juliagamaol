import CharCard from "../CharCard"
import './styles.css'
const Characters = ({characterList}) =>{
        return(
           <div className="Personagens">
                <h1>Meus personagens</h1>
                {characterList.map((character)=>{
                    return <CharCard character={character}/>
                    
                })}
           </div>
        )
} 

export default Characters