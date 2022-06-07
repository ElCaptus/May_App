import React, { useState, useEffect } from "react";
import Card from './GameCard'
import GameScoreForm from './GameScoreForm'
import GameScoreTable from './GameScoreTable'

function GameTable ({pokemones, level}){

    const [state, setState] = useState()

    useEffect(()=>{
        setPokemons(pokemones)
    },[])

    const [pokemons, setPokemons] = useState(null)

    const [currentClass, setCurrentClass] = useState('')

    function pokemonsStat(stat){
        pokemons.map((pokemon)=>{
            pokemon.stat = stat
        })
        setPokemons(pokemons)
    }

    function check(current){

        if(cardsFound+1 >= pokemons.length /2){
            const stat = 'win no-anim'
            setCurrentClass(stat)
            pokemonsStat(stat)
            setCardsFound(cardsFound+1)
            setState('win')
            return
        }
        if(pokemons[current]._id === pokemons[prev]._id){
            pokemons[current].stat = 'correct'
            pokemons[prev].stat = 'correct'
            setCardsFound(cardsFound+1)
            setPokemons([...pokemons])
        }else{
            if(attempts-1 == 0){
                pokemonsStat('wrong no-anim')
                setAttempts(attempts-1)
                setState('lose')
                return
            }
            if(attempts - 1 < 0){
                pokemonsStat('wrong no-anim')
                return
            }
            setAttempts(attempts-1)
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
        //si es la primera carta que levanta
        if(prev === -1 && !pokemons[index].stat){
            pokemons[index].stat = 'active'
            setPokemons([...pokemons])
            setPrev(index)
        }else{
            //si no es la primera que levanta pero no es la misma carta que antes
            if(prev != index)
                check(index)
        }
    }

    function closeScoreForm(){
        setState('')
    }
    
    const [attempts, setAttempts] = useState(level.attempts)

    const [cardsFound, setCardsFound] = useState(0)

    const [prev, setPrev] = useState(-1)

    const cards = pokemones.map((pokemon,index) =>{
        return <Card key={index} pokemon={pokemon} id={pokemon._id} index={index} handleClick={handleClick}/>
    })

    return( 
        <div class="">
            <GameScoreForm state={state} close={closeScoreForm} level={level} errors={attempts}/>
            <nav className={'game-nav '+currentClass}>
                <ul>
                    <li>
                    <a className="reset-button back-to-menu" href='/'>
                        <img src="https://www.tienda.naturf.net/imagenes/icon/ecommerce/ico-volver.png" alt="Back to menu button"/>
                    </a>
                    </li>
                    <li><h4>Cards: {cardsFound}/{pokemones.length /2}</h4></li>
                    <li><h4>Attempts: {attempts}</h4></li>
                    <li>
                    <a className="reset-button" href={`/?level=${level.name}`}>
                        <img src="https://icons.veryicon.com/png/o/miscellaneous/regular-icon/refresh-209.png" alt="refresh"/>
                    </a>
                    </li>
                </ul>
            </nav>
            <div className={`table-container ${level.class}`}>
                {cards}
            </div>
            <div className="game-score">
                <GameScoreTable level={level.name}/>
            </div>
        </div>
        )
}

export default GameTable