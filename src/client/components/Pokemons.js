import React, { useEffect, useState } from "react";
import ExampleCard from "./ExampleCard";
import Loader from "./Loader";

function Pokemons(){
    
    useEffect(()=>{
        fetch('/api/pokes')
        .then(data => data.json())
        .then(pokemonResponse => {
            setPokemons(pokemonResponse.content.value)
        })
    },[])
    
    const [pokemons, setPokemons] = useState([])

    return (
        
        <div className="poke-info">
            <h1>Pokedex</h1>
            <h5> Here you can see every pokemon that can be shown in the game.</h5>
            <div className="poke-table">
                { pokemons ? pokemons.map( (pokemon, index) =>{
                    return <ExampleCard key={index} pokemon={pokemon}/>
                }) : <Loader/>}
            </div>
        </div>
    )
}

export default Pokemons