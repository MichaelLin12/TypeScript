const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function
names.forEach(function (s) {
  console.log(s.toUpperCase())})

// Contextual typing also applies to arrow functions
names.forEach((s) => {
    console.log(s.toUpperCase())});


// Apart from primitives, the most common sort of type you’ll 
// encounter is an object type.
// This refers to any JavaScript value with properties, 
// which is almost all of them! To define an object type, 
// we simply list its properties and their types.


//Object types can also specify that some or all of their properties are optional. 
//To do this, add a ? after the property name
function printName(obj: { first: string; last?: string }) {
    // ...
  }
  // Both OK
  printName({ first: "Bob" });
  printName({ first: "Alice", last: "Alisson" });


/*
TypeScript’s type system allows you to build new types 
out of existing ones using a large variety of operators. 
Now that we know how to write a few types, it’s time to start 
combining them in interesting ways. 
*/

/*
The first way to combine types you might see is a union type. 
A union type is a type formed from two or more other types, 
representing values that may be any one of those types. 
We refer to each of these types as the union’s members.
 */

function printId(id: number | string) {
    console.log("Your ID is: " + id);
  }
  // OK
  printId(101);
  // OK
  printId("202");

/*
TypeScript will only allow an operation if it is valid for every member of the union. 
For example, if you have the union string | number, you can’t use methods that are 
only available on string:
*/


// function printId(id: number | string) {
//     console.log(id.toUpperCase());

/**
 * The solution is to narrow the union with code, the same as you would in JavaScript 
 * without type annotations. Narrowing occurs when TypeScript can deduce a more 
 * specific type for a value based on the structure of the code.
 */

 function printId2(id: number | string) {
    if (typeof id === "string") {
      // In this branch, id is of type 'string'
      console.log(id.toUpperCase());
    } else {
      // Here, id is of type 'number'
      console.log(id);
    }
  }

  function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      // Here: 'x' is 'string[]'
      console.log("Hello, " + x.join(" and "));
    } else {
      // Here: 'x' is 'string'
      console.log("Welcome lone traveler " + x);
    }
  }


  //Sometimes you’ll have a union where all the members have something in common. 
  //For example, both arrays and strings have a slice method. 
  //If every member in a union has a property in common, 
  //you can use that property without narrowing


  // Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
    return x.slice(0, 3);
  }