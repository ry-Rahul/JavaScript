// There is 7 data types in JS
// 1. Number----N
// 5. Null------N
// 2. String----S
// 7. Symbol----S
// 3. Boolean---B
// 6. BigInt----B
// 4. Undefined--U

// Non Primitive Data Types
// 1. Object
// 2. Array
// 3. Function

let a = null;
let b = 345;
let c = true;
let d = BigInt("40000")+ 1n +BigInt("10");
let e = "string";
let f = Symbol("This is a symbol");
let g = undefined;

console.log(a, b, c, d, e, f, g);
console.log(typeof a);


// Objects
const items = {
    "Rahul" : 23,
    "Rohan" : true,
    "Rohit" : null,
    "Raj" : undefined,
}

console.log(items);
console.log(items["Rahul"]);