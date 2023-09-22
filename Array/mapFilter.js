let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

// map creates a new array with the results of calling a provided function on every element in the calling array.

let b = arr.map((val, index) => {
    console.log(val,index);
    return val * 4;
});

console.log(b); 


// Not changing the original array but creating a new array
let arr2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
let a2 = arr2.filter((val) =>{
     return val>6;
});

console.log(a2);

//Array reduce method is used to reduce the array to a single value
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9 ];
let c = arr3.reduce((val,val2)=>{
    console.log(val,val2)
    return val+val2;
});

console.log(c);