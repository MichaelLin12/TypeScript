//Classes can implement multiple interfaces
//Interfaces can extend multiple interfaces
//Classes can only extend one class

//type AddFn = (a: number, b: number) => number;

interface AddFn{
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number)=>{
    return n1 + n2;
}

interface Named{
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named{ //Interfaces are used to define objects
    readonly age: number;

    greet(phrase: string):void;
}

class Person1 implements Greetable{
    age = 30;
    name?: string;
    constructor(name: string){
        if(name)
            this.name = name;
    }

    greet(phrase: string){
        console.log(phrase)
    }
}

interface Person { //Interfaces are used to define objects
    name: string;
    age: number;

    greet(phrase: string):void;
}

let user1: Person;

user1 = {
    name: 'Max',
    age: 30,
    greet(phrase: string){
        console.log(phrase + ' ' + this.name);
    }
};

console.log(user1.greet("Hi there,"));

let user2: Greetable;

user2 = new Person1('Max');

user2.greet("Hi there - I am");
console.log(user1);