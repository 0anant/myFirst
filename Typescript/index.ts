// type person = {
//     name: string;
// } ;

// const person: person = {
//     name: "John Doe",
// }
// console.log(person.name);


//ANNOTATIONS
//String
let myName : string = "John Doe";
myName = "Praveen Sen";
console.log(myName);
// myName = "Praveen Sen";
// console.log(myName);
//Numbers

let myAge : number = 30;
console.log(myAge);
myAge = 31;
console.log(myAge);
//BOolean
let myVal : boolean = true;
console.log(myVal);


//Type Inference
//--type inference is a feature in typescript that allows the compiler to automatically determine the type of a variable based on its initial value.
let myVal2 = "Hello World"; // TypeScript infers this as a string
console.log(myVal2);
console.log(typeof myVal2); // Output: string

//ANY TYPE
//typescript has a special type that can be used to represent any type.
//typescript will allow it to have any value and disable all type checking for that var and its properties.
// let myVal3: any = "Hello World";
// console.log(myVal3);
// myVal3 = 42; // Now it's a number
// console.log(myVal3);
// myVal3 = true; // Now it's a boolean
// console.log(myVal3);
// myVal3 = { name: "John" }; // Now it's an object
// console.log(myVal3);

//ANY TYPE(WARNING)
// it should be used sparinglyoveruse of ANY can  lead to untyped code and make it harder to catch type-related bugs during developement/

//Function Parameters Annotations
//function parameters annotation in typescript are used to specify the expected types of the parameters that a function takes
function greet(name: string){
    return `Hello, ${name}!`;
} 

const result = greet("Praveen");
console.log(result); // Output: Hello, Praveen!

const double = (x: number , y: number) => x * y ;
console.log(double(2, 3)); // Output: 6