import React, { Component } from "react";

function Card ({pokemon, id, index, handleClick}){
    const pokemonClass = pokemon.stat ? ` active ${pokemon.stat}` : ""
    const vacio = ()=>{}
    handleClick = pokemon.stat == 'correct' ? vacio : handleClick;
    return (
        <div className={"card-container"+pokemonClass} onClick={()=>handleClick({index})}>
            <img src={pokemon.pict} alt={pokemon.name} />
        </div>
    )
}

export default Card