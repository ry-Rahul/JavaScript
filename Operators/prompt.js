let a = prompt("Hey What's your age?"); //it takes input as a string
a = Number.parseInt(a);
console.log(typeof(a));

if(a>18){
    alert("You can drink water")
}

// In browser
// prompt("What is your name?");

console.log(a>50? "You are old" : "You are young")