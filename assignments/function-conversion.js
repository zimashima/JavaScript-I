// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

const myFunction = () =>{
    console.log('Function was invoked!')
};

myFunction();
// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

const anotherFunction = (param) => {
    return param;
};

console.log(anotherFunction("Example"));

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
const add = (param1, param2) => {
    return param1 + param2;
};

console.log(add(20,30));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

const substract = (param1, param2) => {
    return param1 - param2;
};

console.log(substract(50,25));


// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

theArray = [5,4,3,2,1]

const triple = theArray.map((num) => {
    return num *3;
});
console.log(triple)