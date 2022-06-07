import React, { useEffect, useState } from "react";
import GameTable from './GameTable'
import Loader from "./Loader";

function Game ({level}){

    useEffect(()=>{
        fetch('/api/pokes')
        .then(data => data.json())
        .then(pokemonResponse => {
            setPokemons(pokemonResponse.content.value)
        })
    },[])
    const [pokemons, setPokemons] = useState([])

    let pokes = pokemons.sort(()=> Math.random() -0.5).slice(0,level.size)
    pokes = [...pokes, ...pokes.map(elem => {return {...elem}})].sort(()=> Math.random() -0.5)

    return (
        <div className="game-container">
            { 
            pokemons.length ? 
                <GameTable pokemones={pokes} level={level}/>
            : 
                <div className="loader">
                    <Loader/>
                </div>
            }
        </div>
    )
}

export default Game; 