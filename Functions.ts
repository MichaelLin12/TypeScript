function add(n1: number, n2: number)
{
    return n1 + n2;
}

function addHandle(n1: number, n2: number,cb: (number)=>number)
{
    cb(n1 + n2);
}


function printResult(num: number){
    console.log('Result: ' + num);
}

printResult(add(5,12));

// undefined is a valid type

let combineValues:Function;
let functionType: (a: number,b: number) => number;
combineValues = add;
console.log(combineValues(8,8));