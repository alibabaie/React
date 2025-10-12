import React from 'react';
import Counter from './Counter'

const HoverCount = (props)=>{

    const {count , handleIncreaseCount} = props
return(
<div className='text-center w-100'>
<button className='btn btn-danger mt-2' onMouseEnter={handleIncreaseCount}>count  :  {count}</button>
</div>
)

}

export default Counter(HoverCount);