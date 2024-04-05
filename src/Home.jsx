import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './index.css'


function Home() {


    const [perso, setPerso] = useState([])
    const [estado , setEstado] = useState('Alive')
    const [nome, setNome] = useState("")

    useEffect(() => {
        buscarRicks()
    }, [])


    async function buscarRicks() {
        const result = await axios.get("https://rickandmortyapi.com/api/character")
        setPerso(result.data.results)
    }

    const buscaProfunda = async () => {
        const result = await axios.get(`https://rickandmortyapi.com/api/character/?name=${nome}&status=${estado}`)
        setPerso(result.data.results)
    }

    console.log(perso)

    return (

        <div>
            <h1>Lista de personagems</h1>

            <input
        type='text' value={nome}
        onChange={(evento) => setNome(evento.target.value)}
      />
      <input type="button" value='Pesquisar' onClick={buscaProfunda}></input>

      <select name="select" 
      onChange={(evento) => setEstado(evento.target.value)}>
        <option value="Alive">Vivo</option>
        <option value="Unknown">Desconhecido</option>
        <option value="Dead">Morto Morrido</option>
      </select>


            {perso.length >= 1 && (
                <ul className='listaPerso'>
                {perso.map((item, index) =>
                    <li key={index}>
                            <br></br>
                            <Link to={`/Personagem/${item.id}`}>
                                <img src={item.image} className='imagemLista'></img>
                            </Link>
                            {item.name}
                        </li>
                    )
                    }
                </ul>
            )
            }
        </div>
    )



}
export default Home