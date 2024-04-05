import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import './index.css'



function Personagem(){

const [persoId,setPersoId] = useState([])
const [episodios, setEpisodios] = useState([])
const {id} = useParams()

useEffect(() => {
buscarID().then(buscarEpisodios, )
},[])

let lista

const buscarID = async () => {
    const resultado = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
     lista = resultado.data
    setPersoId(lista)
}

const buscarEpisodios = async () => {let listaEpisodios = []
    lista.episode.map((element) => listaEpisodios.push(element.replace("https://rickandmortyapi.com/api/episode/", "")))
    
    let episodoisCortado = listaEpisodios.join(",");
    const response = await axios.get(`https://rickandmortyapi.com/api/episode/${episodoisCortado}`);
    let episodio = response.data;
  
    if(episodio.length == undefined){
      setEpisodios([episodio])
    }else{
      setEpisodios(episodio)
      
    }
}
return(
    <div className="ContentDetalhes">
        <h1>Detalhes de Personagem</h1>
    {
        persoId != null && (
          <>
          <div className="infoPerso">
            <img src={persoId.image} className="imagemDetalhes"></img>
            <p>Nome: {persoId.name}</p>
            <p>Status: {persoId.status}</p>
            <p>Especie: {persoId.species}</p>
            </div>
          </>

        )
      }
      <div className="episodio">

      <h2>Episodio</h2>

{
    episodios.map((item,index) => (
        <li key={index}>
            <p>{item.episode}</p>
            <p>{item.name}</p>
        </li>
    ))
}
</div>

      </div>
)

}

export default Personagem