//Three Common Primitives: Number(int,float), String, Boolean

//Arrays
let a:number[] = [1,2,3]
let b:string[] = ["A","B","C"]


let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed 
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

// When you declare a variable using const, var, or let, 
// you can optionally add a type annotation to explicitly specify 
// the type of the variable:
// In most cases, this isn't needed

// Parameter type annotation
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}

// You can also add return type annotations. 
// Return type annotations appear after the parameter list
function getFavoriteNumber(): number {
    return 26;
}

// Much like variable type annotations, you usually don’t need a return type 
// annotation because TypeScript will infer the function’s return type based 
// on its return statements. The type annotation in the above example doesn’t
// change anything. Some codebases will explicitly specify a return type for 
// documentation purposes, to prevent accidental changes, or just for personal 
// preference.