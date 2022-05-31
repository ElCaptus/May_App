import React, { Component } from "react";
import Game from "./Game";

function App (){
    return (
        <div className="full-size">
            <nav className="light-blue darken4">
                <div className="container">
                    <a className="brand-logo" href="/"> Poke Memo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/">Game</a></li>
                        <li><a href="pokemons.html">Pokemons</a></li>
                        <li><a href="https://github.com/ElCaptus/May_App" target="_blank">GitHub Repo</a></li>
                    </ul>
                </div>
            </nav>
            <div className='full-size'>
                <Game/>
            </div>
        </div>
    )
}

export default App; 