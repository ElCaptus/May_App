import React from "react";
import Game from "./Game";
import Pokemons from "./Pokemons"
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";

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
            <Router>
                <Routes>
                    <Route exact path="/" element={<Game/>}/>
                    <Route exact path="/pokemons.html" element={<Pokemons/>}/>
                </Routes>
            </Router>
            </div>
        </div>
    )
}

export default App; 