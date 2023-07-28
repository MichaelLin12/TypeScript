type Combinable = number|string;
type ConversionDescriptor = 'as-num' | 'as-text'
function combine(
    n1: Combinable,
    n2: Combinable, 
    resultConversion: ConversionDescriptor){
    let result;
    if(typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-num'){
        result = +n1 + +n2;
    }else{
        result = n1.toString() + n2.toString()
    }
    // if(resultConversion === 'as-num'){
    //     return +result;
    // }
    // return result.toString();
    return result;
}

const combinedAges = combine(30,26,'as-num');
console.log(combinedAges);

const combined = combine('30','26','as-num');
console.log(combined);

const combineNames = combine('Max', 'Anna','as-text');
console.log(combineNames)