import Item from "./Item";

const TimerList = (props)=>{

return(
    <div className="main_time_list">
        {props.children.map((c)=>(

         <Item key={Math.random()}>{c}</Item>

        ))}
     
    </div>
)

}

export default TimerList ;