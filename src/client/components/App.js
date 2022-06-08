import React from "react";
import GameMenu from "./GameMenu";
import Pokemons from "./Pokemons"
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation
  } from "react-router-dom";

function App (){
    return (
        <Router>
            <WebApp/>
        </Router>
    )
}

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

function WebApp (){
    let query = useQuery()
    return (
        <>
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
            <Routes>
                <Route exact path="/" element={<GameMenu levelInit={query.get("level")}/>}/>
                <Route exact path="/pokemons.html" element={<Pokemons/>}/>
            </Routes>
        </>
    )
}

export default App; 