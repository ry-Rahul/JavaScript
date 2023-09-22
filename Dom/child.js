//document.documentElement for html tag it return object

//document.title for title tag it return string

console.log(document.body.firstChild);
console.log(document.body.lastChild);
let arr = Array.from(document.body.childNodes);

let a = document.body.firstChild;
console.log(a.parentElement);
console.log(a.parentNode);
console.log(a.firstChild.nextSibling);

