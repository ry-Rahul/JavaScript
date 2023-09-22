// const regex = /very/g;
// g means global

const regex = /.arry/gi;
// i means case insensitive
const text = "Rahul is very very good boy very is relative term larry parry";
console.log(text.replace(regex, "VERY"));