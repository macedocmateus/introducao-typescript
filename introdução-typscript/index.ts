// <!-- ------Instalação do typescript---------

// para instalar o typescript

// npm i -g typescript

// para verificar se o typescript foi instalado corretamente

// tsc -v

// para criar o arquivo de configuração tsc --init

// *se caso o powershell estiver barrando os scripts por causa das politicas da microsoft executar os comandos abaixo*:

// abra o powershell do windows como  administrador e execute os comandos abaixo:

// get-executionpolicy

// set-executionpolicy unrestricted

// digite "s" ou "y"

// pronto só aproveitar

// para transcrever typescript para javascript use o comando:

// tsc

// -------------------------------------------->

// ---------variáveis ---------
// string, number, boolean

let x:number = 10;

x = 16;

console.log(x);

// inferência and annotation

let y = 12;

// y = "teste";

let z: number = 12;

// tipos básicos

let userName: string = "Mateus";
let age: number = 30;
const isUser: boolean = true;

// objects

const myNumbers: number[] = [1,2,3,4];
console.log(myNumbers);
console.log(myNumbers.length);
// console.log(myNumbers.toUpperCase()); // no typescript ele já me da as funções apropriadas para cada tipo de dado coisa que o javascript não avisa
console.log(userName.toUpperCase()); // aqui ele já deixa usar pois typescript sabe q userName é um tipo string e a função toUpperCase é para strings
myNumbers.push(5);

console.log(myNumbers);

// tuplas - tuple

let myTuple: [string, number, string[]]; // é como se fosse um molde de tipos de dado em uma string

myTuple = ["mateus", 30, ["técnico", "desenvolvedor"]];

// object literals -> {prop:value} propriedade ou chave e valor

const user: {name: string, age: number} = {  // a primeira chave é para tipagem
  name: "Mateus",
  age: 18,
};

console.log(user);

console.log(user.age);

// user.job = "desenvolvedor";

// any  aceita qualquer tipo de dados e com a redeclaração
// porem usar any vai contra as boas praticas do typescript

let something:any = 0;
something = "teste";
something = true ;
something = [];

// unio type para mais de 1 tipo de dados

let userId: string | number = "10"

userId = 20;

//userId = true;
//userId = [];

// type alias

type myIdType = number | string;

const userIdent: myIdType = 10;
const productId: myIdType = "00223";
const shirId: myIdType = 1234;

// enum  enumera dados complexos
// exemplo: tamanho de roupas (size:médio, size:pequeno, size:grande)

enum Size {
  P = "Pequeno",
  M = "Médio",
  G = "Grande",
};

const camisa = {
  name: "camisa polo",
  size: Size.M,
};

console.log(camisa);

// literal types

let teste: "logado" | null;

//teste = "outro valor"

teste = "logado";
teste = null;

// functions

function sum (a: number, b: number) { // funções agora precisam ser tipadas
  return a + b
}

console.log(sum(5, 8));

//console.log(sum("12", true)); // errado pois são tipos diferentes

function sayHalloTo(name: string): string { // quando é colocado um tipo de dado após o parâmetro, significa que a saída tem que ser uma string
  return `olá ${name}`
}

console.log(sayHalloTo("Mateus Macedo"));

function logger(msg: string): void { // criada uma função que não retorna nada
  console.log(msg);
}

logger("Logado!");

function greeting(name:string, greet?: string): void { // a interrogação significa que ela pode ou não aparecer
  //console.log(`olá ${greet} ${name}`); // erro de lógica pois o argumento é opcional porem não estou passando ele

  // tratando o dado o código acima

  if(greet) {
    console.log(`olá ${greet} ${name}`);
    return
  } 
    console.log(`olá ${name}`);
  
};

greeting("Mateus");
greeting("Macedo", "Senhor");

// interfaces

interface mathFunctionParams {
  n1: number,
  n2: number,
};

function sumNumbers (nums: mathFunctionParams) { // ele está sendo tipado pela interface e só posso passar 2 parâmetros do tipo numérico
  return nums.n1 + nums.n2;
}

console.log(sumNumbers({n1:3, n2:1})); // aqui no console log precisou passar os parâmetros e os valores

function multiplyNumbers(nums: mathFunctionParams) {
  return nums.n1 * nums.n2;
}

const someNumbers: mathFunctionParams = {
  n1: 5,
  n2: 10,
}

console.log(multiplyNumbers(someNumbers)); // aqui só precisou passar a constante someNumbers no console.log pois o retorno da função foi jogada na constante someNumbers

// narrowing ou checagem de tipos

function doSomething(info: number | boolean) {
  if(typeof info === "number") {
    console.log(`o numero é ${info}`);
    return;
  }
  console.log("não foi passado um número");
}

doSomething(5);
doSomething(false);

// generics ou dados genéricos

function showArraysItems<T>(list: T[]) { // o T representa dados genéricos que estaram dentro do array
  list.forEach((item) => {
    console.log(`Item: ${item}`);
  });
};

const list1 = [1,2,3,4,5];
const list2 = ["olá", "tudo bem ?", "tchau!"];

showArraysItems(list1);
showArraysItems(list2);

// classes
class Users {
  name
  age
  isLogin

  constructor(name: string, age:number, isLogin: boolean) {
    this.name = name
    this.age = age
    this.isLogin = isLogin
  }

  showUserName() {
    console.log(`nome do usuário é ${this.name}`);
  }
  
  showUserAge(canShow: boolean) {
    if (canShow) {
      console.log(`Idade do usuário é de ${user1.age} anos`);
      return
    }
    console.log("informação restrita");
  }
}

const user1 = new Users("Mateus", 30, true)
console.log(user1);

user1.showUserName();
user1.showUserAge(true);
user1.showUserAge(false);

// interfaces em classes

interface iVehicle {
  brand: string
  showBrand():void
}

class Car implements iVehicle {

  brand;
  wheels;

  constructor(brand: string, wheels: number) {
    this.brand = brand;
    this.wheels = wheels;
  }

  showBrand(): void {
    console.log(`a marca do carro é: ${this.brand}`);
  }
}
  const fiesta = new Car("vw" , 4);
  fiesta.showBrand();

  // herança

  class superCar extends Car { // extends serve para reutilizar como herança os dados da classe Car
    engine; // esse engine foi criado exclusivamente para classe superCar

    constructor(brand:string, wheels:number, engine:number) { // e no construtor é preciso tipar tantos os dados vindo como herança como o dado exclusivo da classe superCar
      super(brand, wheels) // aqui está estabelecendo o uso da herança
      this.engine = engine
    }
  }

  const a5 = new superCar("Audi", 4, 2.0) // e na construção do carro é passado como parametro o brand, o wheels pois são da herança e o 2.0 que é do engine exluciso do superCar

  console.log(a5);
  a5.showBrand();

  // decorators (utilizado para validação de dados e intervir em um ponto específico)
  
  // constructor decorator
  function baseParameters() {
    return function <T extends {new (...args:any[]):{}}>(constructor: T) {
      return class extends constructor {
        id = Math.random();
        createdAt = new Date();
      };
    };
  };
  
  @baseParameters()
  class Person {
    name

    constructor(name:string) {
      this.name = name;
    };
  };

  const mateus = new Person ("Mateus")
  
  console.log(mateus);



