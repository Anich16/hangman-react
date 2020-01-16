import React from 'react';
import iconWin from '../../src/cool.png';
import '../../App.css';

function WinBlock (props) {
    return (
        <div>
            <h1>Win!!!</h1>
            <img src={iconWin} alt="icon" width="200"/>
        </div>
    )
}

export default WinBlock;