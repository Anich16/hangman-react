import React from 'react';
import './App.css';

function App(props) {
  const changeTopic = (value) => {
    props.changeTopic(value)
  };

  const findLetter = (value) => {
    props.findLetter(value);
  };

  return (
    <div className="App">
      <h1 className='title'>React Hangman</h1>
       <div className='mainContent'>
         <div className='wordPart'>
           <div className='selectBlock'>
             <h2 className='selectTitle'>Choose a topic</h2>
             <select value={props.topic} onChange={(e) => changeTopic(e.target.value)} className='selectElement'>
               <option value='wordsFoodArr'>Food</option>
               <option value='wordsAnimalsArr'>Animals</option>
               <option value='wordsFurnitureArr'>Furniture</option>
             </select>
           </div>
           <div className='wordBlock'>
             {
               props.viewWord.map((el, index) => {
                 return <span key={index} className='letter'>{el}</span>
               })
             }
           </div>
           <div className='retriesBlock'>
             <p>Retries left: <span className='retrieNum'>{props.retries}</span></p>
           </div>
           <div className='VirtualKeyboard'>
              <div>
                {
                  props.keyboard.map((el, key) => {
                    return <div key={key} className="row">
                              {
                                el.map(elem => {
                                  return <button disabled={elem.status} key={elem.value} className="key" onClick={() => findLetter(elem.value)}>{elem.value.toUpperCase()}</button>
                                })
                              }
                            </div>
                  })
                }
              </div>
           </div>
         </div>
         <div className='imgPart'>
           img
         </div>
       </div>
    </div>
  );
}

export default App;
