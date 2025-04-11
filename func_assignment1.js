// function as parameter
//Write a program to demonstrate how a function can be passed as a parameter to another function.
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function operate(func, x, y) {
    return func(x, y);
}

console.log(operate(add, 5, 3));      
console.log(operate(multiply, 4, 2)); 
