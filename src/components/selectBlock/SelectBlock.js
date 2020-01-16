import React from 'react';
import '../../App.css';

function SelectBlock(props) {
    const changeTopic = (value) => {
        props.changeKeyboard(null, true);
        props.changeTopic(value)
    };
    return (
        <div className='selectBlock'>
            <h2 className='selectTitle'>Choose a topic</h2>
            <select value={props.topic} onChange={(e) => changeTopic(e.target.value)}
                    className='selectElement'>
                <option value='wordsFoodArr'>Food</option>
                <option value='wordsAnimalsArr'>Animals</option>
                <option value='wordsFurnitureArr'>Furniture</option>
            </select>
        </div>
    )
}

export default SelectBlock;