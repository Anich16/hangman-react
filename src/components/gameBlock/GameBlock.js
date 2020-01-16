import React from 'react';
import '../../App.css';
import SelectBlockContainer from "../selectBlock/SelectBlockContainer";
import WordBlock from "../winBlock/WordBlock";
import KeyboardContainer from "../keyboard/KeyboardCobtainer";
import WinBlock from "../winBlock/WinBlock";
import LoseBlock from "../LoseBlock";
function GameBlock(props) {

    const newGame = () => {
        props.changeKeyboard(null, true);
        props.changeTopic();
        props.startNewGame();
    };
    return (
        <div className='wordPart'>
            <SelectBlockContainer/>
            <WordBlock viewWord={props.viewWord}/>
            <div className='retriesBlock'>
                <p>Retries left: <span className='retrieNum'>{props.retries}</span></p>
            </div>
            {
                props.statusGame === 'game' ? <KeyboardContainer/> :

                    <div>{ props.statusGame === 'win' && <WinBlock />}
                        { props.statusGame === 'lose' && <LoseBlock/>}
                        <button className="buttonGame" type="button" onClick={() => newGame()}
                                style={{'backgroundColor': props.statusGame === 'win' ? '#d7ee17' : 'red'}}> Try again </button>
                    </div>
            }
        </div>
    )
}

export default GameBlock;
