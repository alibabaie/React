
import { testNumber as Number  } from "./module2.js";


export var testString = "Hello";


export const testFunc = () => {
    return "I am a Function and x:" + Number
}


export class TestClass {
    constructor (x) {
      this.x = x
    }

    handleLog () {
        console.log("this is " + this.x + " in test class");
        
    }
}

export default "i am a default"