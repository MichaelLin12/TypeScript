// const username = 'Max';
// let age = 30;
// age = 29;


// const ADD = (a: number, b: number = 1)=>a+b; //default arguments have to be last

// console.log(ADD(2,5));
// console.log(ADD(2));

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if(button){
//     button.addEventListener('click', (event: MouseEvent) => console.log(event));
// }

const hobbies = ['Sports','Cooking'];
const activeHobbies = ['Hiking',...hobbies];

//activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push(...hobbies);


const person = {
    firstname: 'Max',
    age: 30
};

const copiedPerson = {...person};
console.log(copiedPerson);


const ADD = (...numbers: number[])=>{
    return numbers.reduce((a,b)=>{
        return a+b;
    },0);
};


const addedNumbers = ADD(5, 10, 2, 3.7);
console.log(addedNumbers);


const [hobby1,hobby2, ...remainingHobbies] = hobbies;//array destructuring -> hobby1 is first element, hobby2 is second element, remaningHobbies is the rest

const {firstname,age} = person; // object destructuring -> get values of specified key


