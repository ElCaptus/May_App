import React, { useState } from "react";
import GameScoreTable from './GameScoreTable'

const MAX_INPUT_LENGTH = 13

function GamescoreForm({state, errors, level, close}){

    const [inp, setInp] = useState('')

    const [inputClass, setInputClass] = useState('')

    async function submitScore(){
        let name = inp.trim().slice(0,MAX_INPUT_LENGTH)
        if(!name){
            name = 'Anonymous'
        }
        const errors_attached = level.attempts - errors
        const date = new Date().valueOf()
        const data = {
            name,
            errors_attached,
            date,
            level: level.name
        }
        fetch('/api/scores/',{
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(data),
            method: 'POST'
        })
        .catch(err =>{console.error(err)})
        close()
    }

    function onChangeInput (event){
        if (MAX_INPUT_LENGTH - event.target.value.length < 0){
            setInputClass('overflowed')
        }
        else{
            setInputClass('')
        }
        setInp(event.target.value)
    }

    return state ? 
    <div className="game-score-form" onClick={close}>
        <div className={'float-score-form '+state} onClick={e=> e.stopPropagation()}>
            <h1>You {state}!</h1>
            <p>You failed {level.attempts - errors} times.</p>
            {
                state=='win' ?
                <div className="score">
                    <input type="text" value={inp} onChange={onChangeInput} placeholder="Your name"
                    title={`Max length ${MAX_INPUT_LENGTH}, if you overflow your name will be cuted.`}
                    />
                    <span className={inputClass}>{MAX_INPUT_LENGTH - inp.length}</span>
                    <div className="menu-button" onClick={submitScore}>Submit Score</div>
                </div>
                :
                <div></div>
            }
        </div>
        <GameScoreTable level={level.name}/>
    </div>
    :
    <div></div>
}

export default GamescoreForm