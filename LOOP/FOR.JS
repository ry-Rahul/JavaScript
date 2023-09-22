const obj = {
    "Rahul": 2,
    "Rohit": 3,
    "Raj": 4
}

// For in loop is used to iterate over the object
for(let key in obj){
    console.log(key, obj[key])
}

// For of loop is used to iterate over the array
let arr = [1,2,3,4,5,6,7,8,9,10]
for(let val of arr){
    console.log(val)
}