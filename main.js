// Var & Let & Const

if (true) {
    
    var x = 2 
    
    let y = 3 
    
    const z = 4 
    
    x=5
    y=5
    // z=5

    
// console.log("x:"+x);
// console.log("y:"+y);
// console.log("z:"+z);

}


// console.log("x:"+x);
// console.log("y:"+y);
// console.log("z:"+z);

// Arrow Function

function test (x , y) {

    console.log(x+y);

}

const test2 = (x , y) => {

    console.log(x+y);

}

const test3 =  y => {

    console.log(y);

}

const test4 =  y => {return y*2}

const test5 =  y =>  y*2
    


test(2 , 3)

test2(2 , 3)

test3(4)

console.log(test4(5));

console.log(test5(5));







