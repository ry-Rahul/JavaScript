/*
const hello =() => {
    console.log('hello from module2');
}

const goodbye = () => {
    console.log('goodbye from module2');
}

module.exports = { hello, goodbye };

*/

export const hello =() => {
    console.log('hello from module2');
}

export const goodbye = () => {
    console.log('goodbye from module2');
}

const rahul = () => {
    console.log('hello rahul');
}

export default rahul;