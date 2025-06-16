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
    // this.handleSetTitle = this.handleSetTitle.bind(this)
}

handleSetTitle = () => {
    this.setState(
    { title : "سلام بابل"}
    ) 
}

// handleSetTitle () {
//     this.setState(
//     { title : "سلام بابل"}
//     ) 
// }

render () {

return (
<div className='main'>
<Salam title = {this.state.title}/>
<Timer x = {this.handleSetTitle}/>
</div>
)
}
}

export default App;