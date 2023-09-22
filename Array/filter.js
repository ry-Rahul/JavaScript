let arr = [ 34,5,90,30,43,60,20,78];

let ans = arr.filter((val)=>{
    return val%10==0;
})

console.log(ans);

let ans2 = arr.map((val)=>{
    return val*val;
});

console.log(ans2);