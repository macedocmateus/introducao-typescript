"use strict";
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
// -------------------------------------------->
// ---------variáveis ---------
// string, number, boolean
let x = 10;
x = 16;
console.log(x);
// inferência and annotation
let y = 12;
// y = "teste";
let z = 12;
// tipos básicos
let userName = "Mateus";
let age = 30;
const isUser = true;
// objects
const myNumbers = [1, 2, 3, 4];
console.log(myNumbers);
console.log(myNumbers.length);
// console.log(myNumbers.toUpperCase()); // no typescript ele já me da as funções apropriadas para cada tipo de dado coisa que o javascript não avisa
console.log(userName.toUpperCase()); // aqui ele já deixa usar pois typescript sabe q userName é um tipo string e a função toUpperCase é para strings
myNumbers.push(5);
console.log(myNumbers);
// tuplas - tuple
let myTuple; // é como se fosse um molde de tipos de dado em uma string
myTuple = ["mateus", 30, ["técnico", "desenvolvedor"]];
// object literals -> {prop:value} propriedade ou chave e valor
const user = {
    name: "Mateus",
    age: 18,
};
console.log(user);
console.log(user.age);
