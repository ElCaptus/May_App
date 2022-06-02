import React, { useState, useEffect } from "react";
import Card from './GameCard'


function GameTable ({pokemones}){

    useEffect(()=>{
        setPokemons(pokemones)
    },[])

    const [pokemons, setPokemons] = useState(null)

    function check(current){
        if(pokemons[current]._id === pokemons[prev]._id){
            pokemons[current].stat = 'correct'
            pokemons[prev].stat = 'correct'
            setCardsFound(cardsFound+1)
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
                setAttempts(attempts+1)
        }
    }
    
    const [attempts, setAttempts] = useState(0)

    const [cardsFound, setCardsFound] = useState(0)

    const [prev, setPrev] = useState(-1)

    const cards = pokemones.map((pokemon,index) =>{
        return <Card key={index} pokemon={pokemon} id={pokemon._id} index={index} handleClick={handleClick}/>
    })

    return( 
        <div>
            <nav className="game-nav">
                <ul>
                    <li><h4>Cards: {cardsFound}/{pokemones.length /2}</h4></li>
                    <li><h4>Attempts: {attempts}</h4></li>
                </ul>
            </nav>
            <div className="table-container">
                {cards}
            </div>
        </div>
        )
}

export default GameTable