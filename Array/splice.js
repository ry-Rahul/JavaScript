let nums = [3,5,7,8,9,0,12,11];

// return deleted elements as an array
let deletedItems = nums.splice(2, 3, 109, 110, 102);
console.log(deletedItems); 
console.log(nums);

// For each loop is used to iterate over the array
nums.forEach(element => {
    console.log(element);
})


//Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
let str = "Rahul";
let str2 = Array.from(str);
console.log(str2);


for ( let i in nums){
    console.log(i);
}

console.log()
for( let i in nums){
    console.log(i);
}