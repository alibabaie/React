import React from 'react';
import {createRoot} from 'react-dom/client';
import TimerList from './TimerList';
import { TestContext } from './testContext';

var interval ;

class Timer extends React.Component {
    constructor () {
        super ();
        this.state = {
            hour: 0,
            minute: 0,
            seccond: 0,
            isStart:false
        }
    }

    static contextType = TestContext

startInterval = () => {
  if (this.state.isStart === false) {
  this.setState(
             { 
              isStart : true
              }
          )

      interval = setInterval(
        () => {
          this.setState(
             { 
              seccond:this.state.seccond + 1
              }
          )

          if (this.state.seccond === 59) {
           this.setState(
             { 
              seccond:0 ,
              minute:this.state.minute + 1
              }
          )
          }

          
          if (this.state.minute === 59) {
           this.setState(
             { 
              minute:0 ,
              hour:this.state.hour + 1
              }
          )
          }
        },1000
)
}
}  

stopInterval = () => {
clearInterval (interval) ;
  this.setState(
             { 
              isStart : false
              }
          )

}

resetInterval = () => {
this.stopInterval();
  this.setState(
             { 
            hour: 0,
            minute: 0,
            seccond: 0
            }
          )
}

handleSaveTime = ()=>{
let h = this.state.hour
let m = this.state.minute
let s = this.state.seccond
let newTime = `${h > 9 ? h : "0"+h} : ${m > 9 ? m : "0"+m} : ${s > 9 ? s : "0"+s}`
this.context.settimerArr([ ...this.context.timerArr , newTime])
}

render () {
let h = this.state.hour
let m = this.state.minute
let s = this.state.seccond

return (
  <>
  <h2 className='timer' onClick={this.handleSaveTime} style={{color:this.context}}>
  {/* { {this.state.hour + ":" + this.state.minute + ":" + this.state.seccond} } */}
  {`${h > 9 ? h : "0"+h} : ${m > 9 ? m : "0"+m} : ${s > 9 ? s : "0"+s}`}
</h2>

<div>
<button className='btn btn-success btn-lg m-2 fw-bold rounded rounded-circle' onClick={this.startInterval}>Start</button>
<button className='btn btn-danger btn-lg m-2 fw-bold rounded rounded-circle' onClick={this.stopInterval}>Stop</button>
<button className='btn btn-info btn-lg m-2 fw-bold rounded rounded-circle' onClick={this.resetInterval}>Reset</button>
<button className='btn btn-warning btn-lg m-2 fw-bold rounded rounded-circle' 
onClick={this.props.handlesetIsLight}
style={{
  background: this.props.isLight ? "black" : "white" ,
  color: this.props.isLight ? "white" : "black"
}}
>
  { this.props.isLight ? "Dark" : "Light" }
</button>
</div>

 <TimerList>
    {this.context.timerArr}
  </TimerList>
</>

)
}
}

export default Timer;