import { useContext } from "react";
import Item from "./Item";
import { TestContext } from "./testContext";

const TimerList = (props)=>{

const context = useContext(TestContext);   
return(
    <div className="main_time_list">
        {context.timerArr.map((c)=>(

         < Item key={Math.random()} >
            {c}
            </Item>

        ))}
     
    </div>
)

}

export default TimerList ;