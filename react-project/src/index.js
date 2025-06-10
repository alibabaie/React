import React from 'react';
import {createRoot} from 'react-dom/client';

class Timer extends React.Component {
render () {
return (
<h2>
it is {new Date().toLocaleTimeString()}
</h2>
)
}
}

class Salam extends React.Component {
render () {
return (
<h1>salam</h1>
)
}
}

class App extends React.Component {
  
render () {

return (
<div>
<Salam/>
<Timer/>
</div>
)
}
}

// let elem = new App ()

const tick = () => {

createRoot(document.getElementById('root')).render(<App/>);

}

setInterval(
() => {
tick();
},1000
)





