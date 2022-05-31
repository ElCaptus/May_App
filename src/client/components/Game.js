import React, { Component, useEffect, useState } from "react";
import GameTable from './GameTable'
import Loader from "./Loader";

function Game (){

    useEffect(()=>{
        fetch('/api')
        .then(data => data.json())
        .then(pokemonResponse => {
            setPokemons(pokemonResponse.content.value)
        })
    },[])
    const [pokemons, setPokemons] = useState([])
    
    let pokes = pokemons.sort(()=> Math.random() -0.5).slice(0,8)
    pokes = [...pokes, ...pokes.map(elem => {return {...elem}})].sort(()=> Math.random() -0.5)

    return (
        <div className="game-container full-size">
            <h1>Poke Memo</h1>
            { pokemons.length > 0 ? <GameTable pokemones={pokes} />: <Loader/>}
        </div>
    )
}

export default Game; 