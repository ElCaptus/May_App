import React, { useEffect, useState } from "react";
import levels from './levels'

function GameScoreTable({level = ''}){

    const [scores, setScores] = useState([])

    const TOP_SCORE= 5

    useEffect(()=>{
        fetch('/api/scores/')
        .then(data => data.json())
        .then(json =>{
            scores.push(...json)
            scores.sort((a,b)=>{
                return a.errors_attached - b.errors_attached
            })
            scores.sort((a,b)=>{
                return levels[b.level].size - levels[a.level].size
            })
            let filteredScores = scores
            if(level)
                filteredScores = scores.filter(score => score.level === level )
            setScores(filteredScores.slice(0,TOP_SCORE))
        })
    },[])

    return (
        <div className="game-score-table">
            <h5>Top {TOP_SCORE}</h5>
            <div className="score-table">
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
            </div>
        </div>
    )
}

export default GameScoreTable