import React from 'react';
import {createRoot} from 'react-dom/client';
import Salam from './Salam';
import Timer from './Timer';
// import './style.css'

class App extends React.Component {
  
render () {

return (
<div className='main'>
<Salam/>
<Timer/>
</div>
)
}
}

export default App;