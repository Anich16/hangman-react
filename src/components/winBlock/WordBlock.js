import React from 'react';
import '../../App.css';

function WordBlock(props) {
    return (
        <div className='wordBlock'>
            {
                props.viewWord.map((el, index) => {
                    return <span key={index} className='letter'>{el}</span>
                })
            }
        </div>
    )
}

export default WordBlock;
