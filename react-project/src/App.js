import React from 'react';
import {createRoot} from 'react-dom/client';
import Salam from './Salam';
import Timer from './Timer';
// import './style.css'

class App extends React.Component {
 
constructor () {
    super () ;
    this.state = {
        title : "سلام ایران"
    }
}

render () {

return (
<div className='main'>
<Salam a = {this.state.title}/>
<Timer/>
</div>
)
}
}

export default App;