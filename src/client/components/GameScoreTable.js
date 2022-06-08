import React, { useEffect, useState } from "react";
import levels from './levels'

function GameScoreTable({level = ''}){

    const [scores, setScores] = useState([])

    const TOP_SCORE= 15

    useEffect(()=>{
        fetch('/api/scores/')
        .then(data => data.json())
        .then(json =>{
            let filteredScores = json.reverse()
            filteredScores.sort((a,b)=>{
                return a.errors_attached - b.errors_attached
            })
            filteredScores.sort((a,b)=>{
                return levels[b.level].size - levels[a.level].size
            })
            if(level)
                filteredScores = filteredScores.filter(score => score.level === level )
            setScores(filteredScores.slice(0,TOP_SCORE))
        })
    },[])

    return (
        <div className="game-score-table" onClick={(e)=>{ e.stopPropagation()}}>
            <h5>Top {TOP_SCORE}</h5>
            <div className="score-table">
                {
                    scores.length ?
                    <>
                    <div>
                        {
                            scores.map((score,index)=>
                                    <div key={index}>{score.name}</div>
                                )
                        }
                    </div>
                    <div>
                        {
                            scores.map((score,index)=>
                                    <div key={index}>{score.errors_attached}</div>
                                )
                        }
                    </div>
                    <div>
                        {
                            scores.map((score, index)=>
                                    <div key={index}>{score.level}</div>
                                )
                        }
                    </div>
                    </>
                    :
                    <p>No winners yet.</p>
                }
            </div>
        </div>
    )
}

export default GameScoreTable