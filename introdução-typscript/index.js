"use strict";
let x = 10;
x = 16;
console.log(x);
let y = 12;
let z = 12;
let userName = "Mateus";
let age = 30;
const isUser = true;
const myNumbers = [1, 2, 3, 4];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(userName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);
let myTuple;
myTuple = ["mateus", 30, ["técnico", "desenvolvedor"]];
const user = {
    name: "Mateus",
    age: 18,
};
console.log(user);
console.log(user.age);
let something = 0;
something = "teste";
something = true;
something = [];
let userId = "10";
userId = 20;
const userIdent = 10;
const productId = "00223";
const shirId = 1234;
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
;
const camisa = {
    name: "camisa polo",
    size: Size.M,
};
console.log(camisa);
let teste;
teste = "logado";
teste = null;
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 8));
function sayHalloTo(name) {
    return `olá ${name}`;
}
console.log(sayHalloTo("Mateus Macedo"));
function logger(msg) {
    console.log(msg);
}
logger("Logado!");
function greeting(name, greet) {
    if (greet) {
        console.log(`olá ${greet} ${name}`);
        return;
    }
    console.log(`olá ${name}`);
}
;
greeting("Mateus");
greeting("Macedo", "Senhor");
;
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 3, n2: 1 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10,
};
console.log(multiplyNumbers(someNumbers));
