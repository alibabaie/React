import React from 'react';
import {createRoot} from 'react-dom/client';

var interval ;

class Timer extends React.Component {
    constructor () {
        super ();
        this.state = {
            time : 10
        }
    }

componentDidMount () {

  interval = setInterval(
        () => {
          this.setState(

             { time : this.state.time - 1 }
            
          )
        },1000
)
}

componentDidUpdate () {
if ( this.state.time == 0 )
 {
 clearInterval (interval) ;
}
    
}

componentWillUnmount () {

}

render () {
console.log("render");

return (
  <>
  <h2 className='timer'>
it is {this.state.time}
</h2>
<button onClick={this.props.x}>Change</button>
</>

)
}
}

export default Timer;