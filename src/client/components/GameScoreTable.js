import React, { useEffect, useState } from "react";
import levels from './levels'

function GameScoreTable({level = ''}){

    const [scores, setScores] = useState([])

    const TOP_SCORE= 15

    useEffect(()=>{
        fetch('/api/scores/')
        .then(data => data.json())
        .then(json =>{
            scores.push(...json)
            scores.sort((a,b)=>{
                return a.date < b.date
            })
            scores.sort((a,b)=>{
                return a.errors_attached - b.errors_attached
            })
            scores.sort((a,b)=>{
                return levels[b.level].size - levels[a.level].size
            })
            let score = scores
            if(level)
                score =scores.filter(score => score.level === level )
            setScores(score.slice(0,TOP_SCORE))
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