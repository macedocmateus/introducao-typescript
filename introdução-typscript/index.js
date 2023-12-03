"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`o numero é ${info}`);
        return;
    }
    console.log("não foi passado um número");
}
doSomething(5);
doSomething(false);
function showArraysItems(list) {
    list.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}
;
const list1 = [1, 2, 3, 4, 5];
const list2 = ["olá", "tudo bem ?", "tchau!"];
showArraysItems(list1);
showArraysItems(list2);
class Users {
    constructor(name, age, isLogin) {
        this.name = name;
        this.age = age;
        this.isLogin = isLogin;
    }
    showUserName() {
        console.log(`nome do usuário é ${this.name}`);
    }
    showUserAge(canShow) {
        if (canShow) {
            console.log(`Idade do usuário é de ${user1.age} anos`);
            return;
        }
        console.log("informação restrita");
    }
}
const user1 = new Users("Mateus", 30, true);
console.log(user1);
user1.showUserName();
user1.showUserAge(true);
user1.showUserAge(false);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`a marca do carro é: ${this.brand}`);
    }
}
const fiesta = new Car("vw", 4);
fiesta.showBrand();
class superCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a5 = new superCar("Audi", 4, 2.0);
console.log(a5);
a5.showBrand();
function baseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
;
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
    ;
};
Person = __decorate([
    baseParameters()
], Person);
;
const mateus = new Person("Mateus");
console.log(mateus);
