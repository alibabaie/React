import { useContext } from "react";
import { TestContext } from "./testContext";

const Item = (props) => {

    const context = useContext (TestContext);

    const handleDeleteItem = (e) => {
        
        context.settimerArr(context.timerArr.filter(t=> t !== e.target.innerHTML))
    } 
return(
    <div onClick={handleDeleteItem}>
        {props.children}
    </div>
)

}

export default Item;