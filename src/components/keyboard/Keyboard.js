import React from 'react';
import '../../App.css';

function Keyboard(props) {
    const findLetter = (value) => {
        props.changeKeyboard(value);
        props.findLetter(value);
        props.checkStatusGame();
    };

    return (
        <div className='VirtualKeyboard'>
            <div>
                {
                    props.keyboard.map((el, key) => {
                        return <div key={key} className="row">
                            {
                                el.map(elem => {
                                    return <button disabled={elem.status} key={elem.value} className="key"
                                                   onClick={() => findLetter(elem.value)}>{elem.value.toUpperCase()}</button>
                                })
                            }
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Keyboard;