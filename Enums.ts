const ADMIN = 0;
const READ_ONLY = 1;
enum Role {ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR};
const human = {
    name: 'Michael',
    age: 21,
    hobbies: ['Sports', 'Cooking'],
    role:Role.ADMIN
};

if(human.role === Role.AUTHOR){
    console.log(Role.AUTHOR)
}