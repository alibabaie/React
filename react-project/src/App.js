import React , { useState , useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Salam from './Salam';
import Timer from './Timer';


// import './style.css'


// Create Componenet With Function

const App = () => {

    const [title , setTitle] = useState("سلام ایران");
    const [isLight , setIsLight] = useState(false);
    const [timerArr , settimerArr] = useState([]);


    useEffect(
    () => {
    console.log("useEffect");
    return () => {

    }
    } , [isLight]
    )

   const handlesetIsLight = () => {

        setIsLight(!isLight)
    }

    return (
        <div className='main' style={{ background: isLight ? "white" : "black" }}>
            <Salam a={title} />
            <Timer
             isLight={isLight} 
             handlesetIsLight={handlesetIsLight}
             timerArr={timerArr}
             settimerArr={settimerArr}
             />
        </div>
    )

}

export default App;