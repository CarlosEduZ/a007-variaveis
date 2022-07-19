const nome = prompt("qual seu nome?")
const idade = Number(prompt("qual sua idade?"))
console.log(typeof nome);
console.log(typeof idade);

// deu undefined, visto que não recebeu informações
// deu dois String, ja que o prompt é um texto 

console.log("olá", nome,"você tem", idade,"anos");

