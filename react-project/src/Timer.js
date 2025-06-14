import React from 'react';
import {createRoot} from 'react-dom/client';

var interval ;

class Timer extends React.Component {
    constructor () {
        super ();
        this.state = {
            time : new Date().toLocaleTimeString()
        }
    }

componentDidMount () {
console.log("componetDidMount");

  interval = setInterval(
        () => {
          this.setState(

             { time : new Date().toLocaleTimeString() }
            
          )
        },1000
)
}

componentDidUpdate () {
   console.log(this.state.time);
if ( this.state.time == "4:11:00 PM" )
 {
 clearInterval (interval) ;
}
    
}

componentWillUnmount () {

}

render () {
console.log("render");

return (
<h2 className='timer'>
it is {this.state.time}
</h2>
)
}
}

export default Timer;