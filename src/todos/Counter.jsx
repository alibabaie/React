import React, { useReducer, useState } from 'react';

const init = 0

const reducer = (state , action)=>{

    // if (action === 'increment') return state + 1;
    // if (action === 'decrement') return state - 1;
    // if (action === 'reset') return init;

    switch (action) {
        case 'increment':
            return state + 1

            case 'decrement':
                return state - 1  

                case 'reset':
                 return init
            
    
        default:
            return state
    }

// return state + action;
}

const Counter = () => {

    const [count , dispatch] = useReducer(reducer , init)

    // const [count , setCount] = useState(0)

    // const handleCount = ()=>{

        //   dispatch(1)

        // setCount((prevCount)=>{
        //     // action .....
        //   return  prevCount + 1
        // })
    // }

    return (
        <div className='text-center my-3'>
            <h1 className='text-center'>{count}</h1>
            <button className='btn btn-success' onClick={()=>dispatch('increment')}>افزایش</button>
            <button className='btn btn-danger' onClick={()=>dispatch('decrement')}>کاهش</button>
            <button className='btn btn-warning' onClick={()=>dispatch('reset')}>ریست</button>
        </div>
    );
}

export default Counter;
