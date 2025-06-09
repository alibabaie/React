import React from 'react';
import {createRoot} from 'react-dom/client';

// let elem = <h1>سلام</h1>

const tick = () => {

const elem = (
  <div>
    <h1>salam</h1>
    <h2>
      it is {new Date().toLocaleTimeString()}
    </h2>
  </div>
)
createRoot(document.getElementById('root')).render(elem);
}

setInterval(
() => {
tick();
},1000
)





