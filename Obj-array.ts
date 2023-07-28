// const person:{
//     name:string;
//     age:number
// } = {
const person:{
    name:string;
    age:number;
    hobbies:string[];
    role:[number,string]
} = {
    name: 'Michael',
    age: 21,
    hobbies: ['Sports', 'Cooking'],
    role:[2,'author']
}; // this is an object and has object types

//person.role.push('admin'); --> Beaware that this is still possible
//person.role[1] = 10; --> Not Possible
//person.role = [0, 'admin', 'user']; --> Not Possible



let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Cooking'];
console.log(person.name);


for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}