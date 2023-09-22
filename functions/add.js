function calSum(a,b){

    return a+b;

}

const calSum2 = (a,b) => a+b;
const calAvg = (a,b) => {
    return (a+b)/2;
}

let a = 10;
let b = 20;
let c = calSum2(a,b);
console.log(c);

let d = calAvg(a,b);
console.log(d);