import React , { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Salam from './Salam';
import Timer from './Timer';
// import './style.css'

// Create Componenet With Class

// class App extends React.Component {

// constructor () {
//     super () ;
//     this.state = {
//         title : "سلام ایران"
//     }
// }

// render () {

// return (
// <div className='main'>
// <Salam a = {this.state.title}/>
// <Timer/>
// </div>
// )
// }
// }

// Create Componenet With Function

const App = () => {

    const [title, setTitle] = useState("سلام ایران");

   const handleSetTitle = () => {

        setTitle("سلام مازندران")
    }

    return (
        <div className='main'>
            <Salam a={title} />
            <Timer x={handleSetTitle}/>
        </div>
    )

}

export default App;