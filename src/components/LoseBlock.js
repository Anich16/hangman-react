import React from 'react';
import '../App.css';
import iconLose from './../src/losing.png';

function LoseBlock() {
    return (
        <div>
            <h1>Game over!!!</h1>
            <img src={iconLose} alt="icon" width='200'/>
        </div>
    )
}

export default LoseBlock;