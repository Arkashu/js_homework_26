'use strict'
//Task#1
/*
const getFactorial = arg => {
    if (arg === 1) return arg;
    return arg * getFactorial(arg-1);
}
console.log(getFactorial(4))*/

//Task#2
/*const pow = (num, degree) => {
    if (degree === 1) return num;
    return num * pow(num, degree-1);
}
console.log(pow(5,2))*/

//Task#3
const sum = (a, b) => {
    if (b === 0) return a;
    return sum(a+1, b-1);
}
console.log(sum(4,6))