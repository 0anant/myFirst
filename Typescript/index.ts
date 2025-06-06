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


//for RETURN annotations

function add(x : number) :number //you have to specify the number keyword 
{
    return x + 10;
}

console.log(add(5)); // Output: 15


const  add2 = (x: number) : number => x * x;
console.log(add2(5)); // Output: 25

//VOID in typescript
//void is a type that represents the absence of a value, it is often used as a return type for functions that do not return a value.
//NEVER
// never keyword is used to indicate that a function will never return a value, it is often used for functions that throw an error or run indefinitely.

//Never used in 3 cases 
//--a function that always throws an error
//--a function that has an infinite loop
//--a function that never returns a value



//Arrays in typescript
//arrays in typescript are used to store a collection of values of the same type, they can be defined using the array type or the generic array type.

let myArray: number[] = [1, 2, 3, 4, 5];
console.log(myArray); // Output: [1, 2, 3, 4, 5]


let myArray2: Array<number> = [1, 2, 3, 4, 5];
console.log(myArray2); // Output: [1, 2, 3, 4, 5]


//object in typescript

const person : {firstName: string, lastName: string, age: number} = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
console.log(person); // Output: { firstName: 'John', lastName: 'Doe' }

//object as function return value
function printPerson (): {firstName: string, lastName: string, age: number} {
    return {
        firstName: "Jane",
        lastName: "Doe",
        age: 25
    };
}
console.log(printPerson()); // Output: { firstName: 'Jane', lastName: 'Doe', age: 25 }

//Type Aliases
//type aliases in typescript are used to create a new name for a type, they can be used to create more readable and maintainable code.

//? is an optional propeerty in typescript, it is used to indicate that a property is optional and may not be present in an object.
type Person = {
    readonly firstName: string;
    readonly lastName: string;
    age?: number;
}
const user: Person = {
    firstName: "Alice",
    lastName: "Smith",
};
//  user.firstName = "Alison";

console.log(`firstName: ${user.firstName}, age: ${user.age}`); // Output: { firstName: 'Alice', lastName: 'Smith' }

//Intersection Types
//intersection types in typescript are used to combine multiple types into a single type, they can be used to create more complex types that can represent multiple values.
type Person1 = {
    firstName: string;
    age: number;
}
type Employee = {
    employeeId: number;
    department: string;
}

type EmployeeDetails = Person1 & Employee;
const person3 : EmployeeDetails = {
    firstName: "Bob",
    age: 28,
    employeeId: 12345,
    department: "Engineering"
};
console.log(person3); // Output: { firstName: 'Bob', age: 28, employeeId: 12345, department: 'Engineering' }

//Union Types
//union types in typescript are used to represent a value that can be one of multiple types, they can be used to create more flexible and reusable code.
let value: string | number = 20;
value = "Hello"; // value is a string
console.log(value); // Output: Hello
value = 42; // value is now a number
console.log(value); // Output: 42
value = true; // Error: Type 'boolean' is not assignable to type 'string | number'.


//literal variables
//literal types in typescript are used to represent a specific value, they can be used to create more precise and type-safe code.
let direction: "up" | "down" | "left" | "right";
direction = "up"; // Valid
// direction = "forward"; // Error: Type '"forward"' is not assignable to type '"up" | "down" | "left" | "right"'.

//Tuple Types
//tuple types in typescript are used to represent an array with a fixed number of elements, each with a specific type, they can be used to create more structured and type-safe code.
let personTuple: [string, number] = ["Alice", 30];
console.log(personTuple); // Output: [ 'Alice', 30 ]
// personTuple = [30, "Alice"]; // Error: Type 'number' is not assignable to type 'string' at index 0.
// personTuple = ["Alice", 30, "Engineer"]; // Error: Tuple type '[string, number]' of length '2' has no element at index '2'.  
// personTuple[0] = 42; // Error: Type 'number' is not assignable to type 'string'.
personTuple[1] = 31; // Valid, updating the number value
console.log(personTuple); // Output: [ 'Alice', 31 ]        
// personTuple[2] = "Engineer"; // Error: Tuple type '[string, number]' of length '2' has no element at index '2'.
// personTuple.push("Engineer"); // Error: Property 'push' does not exist on type '[string, number]'.
// personTuple.pop(); // Error: Property 'pop' does not exist on type '[string, number]'.
// personTuple.shift(); // Error: Property 'shift' does not exist on type '[string, number]'.
// personTuple.unshift("Engineer"); // Error: Property 'unshift' does not exist on type '[string, number]'.
// personTuple.splice(0, 1); // Error: Property 'splice' does not exist on type '[string, number]'.
// personTuple.slice(0, 1); // Error: Property 'slice' does not exist on type '[string, number]'.
// personTuple.forEach((item) => console.log(item)); // Error: Property 'forEach' does not exist on type '[string, number]'.
// personTuple.map((item) => item.toUpperCase()); // Error: Property 'map' does not exist on type '[string, number]'.
// personTuple.filter((item) => item === "Alice"); // Error: Property 'filter' does not exist on type '[string, number]'.
// personTuple.reduce((acc, item) => acc + item); // Error: Property 'reduce' does not exist on type '[string, number]'.
// personTuple.find((item) => item === "Alice"); // Error: Property 'find' does not exist on type '[string, number]'.
// personTuple.findIndex((item) => item === "Alice"); // Error: Property 'findIndex' does not exist on type '[string, number]'.
// personTuple.includes("Alice"); // Error: Property 'includes' does not exist on type '[string, number]'.

//Enum Types
//enum types in typescript are used to define a set of named constants, they can be used to create more readable and maintainable code.
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
let move: Direction = Direction.Up;
console.log(move); // Output: UP
move = Direction.Down; // Valid
console.log(move); // Output: DOWN
// move = "FORWARD"; // Error: Type '"FORWARD"' is not assignable to type 'Direction'.
// move = 42; // Error: Type 'number' is not assignable to type 'Direction'.
// move = true; // Error: Type 'boolean' is not assignable to type 'Direction'.
// move = Direction.Up | Direction.Down; // Error: Type 'Direction.Up | Direction.Down' is not assignable to type 'Direction'.
// move = Direction.Left | Direction.Right; // Error: Type 'Direction.Left | Direction.Right' is not assignable to type 'Direction'.
// move = Direction.Up | Direction.Down | Direction.Left | Direction.Right; // Error: Type 'Direction.Up | Direction.Down | Direction.Left | Direction.Right' is not assignable to type 'Direction'.

