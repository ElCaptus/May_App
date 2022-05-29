import React, { Component } from "react";

class App extends Component{
    render(){
        return (
            <div>
                <nav className="light-blue darken4">
                    <div className="container">
                        <a className="brand-logo" href="/"> Poke Memo</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="memo.html">Game</a></li>
                            <li><a href="pokemons.html">Pokemons</a></li>
                            <li><a href="info.html">Info</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default App; 