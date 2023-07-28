console.log('Your code goes here...')

// Core Types

/** 
* Integer 1,5.3,-10
* String "Hi", 'Hi', `Hi`
* Boolean true, false
* Object {age: 30}
* Enum enum{New,Old}
* */

function add(n1: number, n2: number, showResult: boolean,resultPhrase: string){
    console.log(typeof n1);
    if(showResult){
        console.log(resultPhrase + ' ' +(n1+n2));
    }else{
        return n1+n2;
    }
}

let number1 = 5; // all numbers are float in typescript
let number3:number; // this is also a number
let number4; // this is any type
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is:'
add(number1,number2,printResult, resultPhrase);

