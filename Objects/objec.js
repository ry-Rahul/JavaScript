let marks = {
    rahul: 34,
    rohit: 45,
    raj: 67,
    rohan: 89
}

// let arr = Object.keys(marks);
// console.log(arr);

for (let i = 0; i < Object.keys(marks).length;  i++) {
    
    console.log("The marks of " + Object.keys(marks)[i] + " is " + Object.values(marks)[i]);
}

for( let key in marks){
    console.log(`The marks of ${key} is ${marks[key]}`);
}