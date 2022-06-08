import React, { useState } from "react";
import Game from "./Game";
import GameScoreTable from './GameScoreTable'
import levels from './levels'

function GameMenu({levelInit}){

    const [level, setLevel] = useState('')

    function handleClick({level = 'easy'}){
        if(levels[level])
            setLevel(levels[level])
    }

    if (levelInit && level == '')
        handleClick({level:levelInit})

    return (
        <>
            {
                level == '' ? 
                <div className='full-size centered-section'>
                    <div className="game-menu">
                        <input type="button" className="menu-button" value="Easy" onClick={()=> handleClick({level:'easy'})}/>
                        <input type="button" className="menu-button" value="Medium" onClick={()=> handleClick({level:'medium'})}/>
                        <input type="button" className="menu-button" value="Hard" onClick={()=> handleClick({level:'hard'})}/>
                        <input type="button" className="menu-button" value="Insane" onClick={()=> handleClick({level:'insane'})}/>
                    </div>
                    <GameScoreTable/>
                </div>
                :
                (<Game level={level}/>)
            }
        </>
    )
}

export default GameMenu