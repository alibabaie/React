import React , { useState , useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Salam from './Salam';
import Timer from './Timer';
import TimerList from './TimerList';

// import './style.css'


// Create Componenet With Function

const App = () => {

    const [title , setTitle] = useState("سلام ایران");
    const [isLight , setIsLight] = useState(false);
    const [timerArr , settimerArr] = useState(["00:00:00" , "00:01:01"]);


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
            <Timer isLight={isLight} handlesetIsLight={handlesetIsLight}/>
            <TimerList>
                {timerArr}
            </TimerList>
        </div>
    )

}

export default App;