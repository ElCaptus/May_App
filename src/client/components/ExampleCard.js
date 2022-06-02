import React from "react";

function ExampleCard({pokemon}){
    return (
        <div className="sample-card">
            <img src={pokemon.pict} className=""/>
            <h4>{pokemon.name}</h4>
        </div>
    )
}

export default ExampleCard