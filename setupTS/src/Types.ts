let name : string = "John";
let age : number = 30;
let isStudent : boolean = true;

console.log(name);
console.log(age);
console.log(isStudent); 

let a : string | number = 12
a = " "

let arr1 = [12,32,32,10]
// in --> keys
// of --> values
for(let i of arr1){
    if( i % 2 == 0) break;
}

interface User{
    name: string,
    age: number
}

class User{
    name: string
    age: number

    constructor(name:string,age:number){
        this.name = name;
        this.age = age
    }
}

let User1:User = {
    name:"Ayush",
    age:22
}

let User2:User = new User("kanha",22)