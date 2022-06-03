import React, { useState } from "react";
import Game from "./Game";

function GameMenu({levelInit}){
    const levels = {
        easy:{
            name:'easy',
            size: 8,
            attempts: 15,
            class: ''
        },
        medium:{
            name:'medium',
            size: 12,
            attempts: 15,
            class: 'medium-table'
        },
        hard:{
            name:'hard',
            size: 15,
            attempts: 15,
            class: 'hard-table'
        },
        insane:{
            name:'insane',
            size: 21,
            attempts: 21,
            class: 'insane-table'
        }
    }

    const [level, setLevel] = useState('')

    function handleClick({level = 'easy'}){
        if(levels[level])
            setLevel(levels[level])
    }

    if (levelInit && level == '')
        handleClick({level:levelInit})

    return (
        <div className="full-size">
            {
                level == '' ? 
                <div className="game-menu">
                    <input type="button" className="menu-button" value="Easy" onClick={()=> handleClick({level:'easy'})}/>
                    <input type="button" className="menu-button" value="Medium" onClick={()=> handleClick({level:'medium'})}/>
                    <input type="button" className="menu-button" value="Hard" onClick={()=> handleClick({level:'hard'})}/>
                    <input type="button" className="menu-button" value="Insane" onClick={()=> handleClick({level:'insane'})}/>
                </div>
                :
                (<Game level={level}/>)
            }
        </div>
    )
}

export default GameMenu