import React from 'react';
import './App.css';
import Hangman from "./components/Hangman";
import GameBlockContainer from "./components/gameBlock/GameBlockContainer";



function App(props) {
    return (
        <div className="App">
            <h1 className='title'>React Hangman</h1>
            <div className='mainContent'>
                <GameBlockContainer/>
                <div className='imgPart'>
                   <Hangman retries={props.retries}/>
                </div>
            </div>
        </div>
    );
}

export default App;
