import './styles.css'
const CharCard = ({character}) =>{
    return(
        <div>
            <h1>{character.name}</h1>
            <img src={character.image} alt=""></img>
        </div>
    )
}

export default CharCard