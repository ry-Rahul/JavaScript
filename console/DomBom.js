let number = prompt("Enter a number");
number = Number.parseInt(number);

if(number>4){
    location.href = "http://google.com";
}


let color = prompt("Enter a color");
document.body.style.backgroundColor = color;

//document.documentElement for html tag it return object

//document.title for title tag it return string