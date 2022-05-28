
import React, { Component } from "react";
import ReactDom, { render } from "react-dom";

class App extends Component{
    render(){
        return (
            <h1>May App</h1>
        )
    }
}

render(<App/>, document.getElementById('app'))