import React, { Component, useState, useEffect } from "react";
import Card from './Card'


function GameTable ({pokemones}){

    useEffect(()=>{
        setPokemons(pokemones)
    },[])

    const [pokemons, setPokemons] = useState(null)

    function check(current){
        if(pokemons[current]._id === pokemons[prev]._id){
            pokemons[current].stat = 'correct'
            pokemons[prev].stat = 'correct'
            setPokemons([...pokemons])
        }else{
            pokemons[current].stat = 'wrong'
            pokemons[prev].stat = 'wrong'
            setPokemons([...pokemons])
            setTimeout(()=>{
                pokemons[current].stat = ''
                pokemons[prev].stat = ''
                setPokemons([...pokemons])
            },1000)
        }
        setPrev(-1)
    }

    function handleClick({index}){
        if(prev === -1 && !pokemons[index].stat){
            pokemons[index].stat = 'active'
            setPokemons([...pokemons])
            setPrev(index)
        }else{
            if(prev != index)
                check(index)
        }
    }
    
    const [prev, setPrev] = useState(-1)

    const cards = pokemones.map((pokemon,index) =>{
        return <Card key={index} pokemon={pokemon} id={pokemon._id} index={index} handleClick={handleClick}/>
    })

    return( 
        <div className="table-container">
            {cards}
        </div>
        )
}

export default GameTable