import React, { useState, useEffect } from "react";
import Card from './GameCard'


function GameTable ({pokemones, maxAttempts, levelName, levelClass}){

    useEffect(()=>{
        setPokemons(pokemones)
    },[])

    const [pokemons, setPokemons] = useState(null)

    const [currentClass, setCurrentClass] = useState('')

    function check(current){

        if(cardsFound+1 >= pokemons.length /2){
            pokemons.map((pokemon)=>{
                pokemon.stat = 'win'
            })
            setCurrentClass(pokemons[current].stat)
            setPokemons(pokemons)
            setCardsFound(cardsFound+1)
            return
        }
        if(attempts+1 >= maxAttempts){
            pokemons.map((pokemon)=>{
                pokemon.stat = 'wrong'
            })
            setAttempts(attempts+1)
            setPokemons(pokemons)
            return
        }
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
        <div className="full-size">
            <nav className={'game-nav '+currentClass}>
                <ul>
                    <a className="reset-button back-to-menu" href='/'>
                        <img src="https://www.tienda.naturf.net/imagenes/icon/ecommerce/ico-volver.png" alt="Back to menu button"/>
                    </a>
                    <li><h4>Cards: {cardsFound}/{pokemones.length /2}</h4></li>
                    <li><h4>Attempts: {attempts}/{maxAttempts}</h4></li>
                    <a className="reset-button" href={`/?level=${levelName}`}>
                        <img src="https://icons.veryicon.com/png/o/miscellaneous/regular-icon/refresh-209.png" alt="refresh"/>
                    </a>
                </ul>
            </nav>
            <div className={'table-container '+(levelClass||'')}>
                {cards}
            </div>
        </div>
        )
}

export default GameTable