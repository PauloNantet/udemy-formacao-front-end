// // 1 - variáveis
// let nome = "Matheus";
// console.log(nome);

// nome = "Matheus Battisti";
// console.log(nome);

// const idade = 31;
// console.log(idade);

// // idade = 32;

// console.log(typeof nome);
// console.log(typeof idade);

// // 2 - Mais sobre variáveis
// // let 2teste = "inválido";
// // let @teste = "inválido";

// let a = 10, 
//     b = 20, 
//     c = 30;
// console.log(a, b, c);

// const nomecompleto = "Matheus Battisti";
// const nomeCompleto = "João da Silva";

// console.log(nomecompleto);
// console.log(nomeCompleto);

// let _teste = "Ok";
// let $teste = "Ok";

// console.log(_teste);
// console.log($teste);

// // 3 - Prompt
// const age = prompt("Digite a sua idade:");
// console.log(`Você tem ${age} anos.`);

// // 4 - Alert
// alert("Testando!");

// const z = 10;
// alert(`O número é ${z}`);

// // 5 - Math
// console.log(Math.max(5, 2, 1, 10)); // Retorna o maior número
// console.log(Math.floor(5.14)); // Arredonda o número para baixo
// console.log(Math.ceil(5.14)); // Arredonda o número para cima

// // 6 - Console
// console.log("Teste!");
// console.error("Erro!");
// console.warn("Aviso!");

// // 7 - if

// const m = 10;
// // if  - Palavra reservada "se"
// // ( ) - Condição 
// // { } - Bloco de código
// if (m > 5) {
//     console.log("'m' é maior que 5!");
// }

// const user = "João";
// if(user === "João"){
//    console.log("Olá João!");
// }
// if(user === "Maria"){
//     console.log("Olá Maria!");
//  }
//  console.log(user === "João", user === "Maria");

// // 8 - else
// const loggedId = false;
// if (loggedId) {
//     console.log("Está autenticado!");
// } else {
//     console.log("Não está autenticado!");
// }

// const q = 10;
// const w = 15;
// if (q > 5 && w > 20) {
//     console.log("Números mais altos");
// } else {
//     console.log("Os números não são mais altos");
// }

// // 9 - else if
// if(1 > 2){
//     console.log("Teste");
// }else if(2 > 3){
//     console.log("Teste1");
// }else if(5 > 1){
//     console.log("Agora sim!");
// }
// const n1 = 1;
// const n2 = 2;
// const n5 = 0;
// if(n1 > 2){
//     console.log("Teste");
// }else if(n2 > 3){
//     console.log("Teste1");
// }else if(n5 > 1){
//     console.log("Agora sim!");
// }

// const userName = "Matheus";
// const userAge = 31;
// if(userName === "José"){
//     console.log("Bem vindo José!")
// }else if(userName === "Matheus" && userAge === 31){
//     console.log("Olá Matheus, você tem 31 anos!")
// }else{
//     console.log("Nenhuma condição aceita!")
// }

// // 10 - while
// let p = 0;
// while (p < 5){
//     console.log(`Repetindo ${p}`);
//     p = p + 1;
// }

// // loop infinito
// let x = 10;
// while (x > 5) {
//     console.log(`Imprimindo ${x}`)
// }

// // 11 - do while
// let o = 10;
// do {
//     console.log(`Valor de o: ${o}`)
//     o--;
// } while (o > 1);

// // 12 - for
// for(let t = 0; t < 10; t++){
//     console.log("Repitindo algo...")
// }
// let r = 10;
// for (r; r > 0; r = r - 1){
//     console.log(`O r está diminuindo ${r}`)
// }
// let zz = 10;
// for (zz; zz > 0; zz--) {
//     console.log(`O zz está diminuindo ${zz}`)
// }

// // 13 - identação
// for (let u = 0; u < 10; u++) {
//     if (u * 2 > 10) {
//         console.log(`Maior que 10! ${u}`)
//     } else {
//         if (u / 2 === 0) {
//             console.log("Deu 0")
//         }
//     }
// }
// // 14 - break
// for (let g = 20; g > 10; g--) {
//     console.log(`O valor de g é: ${g}`);
//     if (g === 12) {
//         console.log("O g é 12!")
//         break
//     }
// }

// // 15 - continue
// for (let s = 0; s < 10; s = s + 1) {
//     //operador resto
//     if (s % 2 === 0) {
//         console.log("Número par!");
//         continue
//     }
//     console.log(s);
// }
// for (let s1 = 0; s1 < 10; s1 = s1 + 1) {
//     //operador resto
//     if (s1 % 2 === 0) {
//         console.log(`Número par!`);
//         continue
//     } else if (s1 % 2 === 1) {
//         console.log(`Número impar!`);
//         continue
//     }
// }for (let s2 = 0; s2 < 10; s2 = s2 + 1) {
//     //operador resto
//     if (s2 % 2 === 0) {
//         console.log(`Número ${s2} par!`);
//         continue
//     } else if (s2 % 2 === 1) {
//         console.log(`Número ${s2} impar!`);
//         continue
//     }
// }

// // 16 - switch
// const job = "adivogado";
// switch (job) {
//     case "Programador":
//         console.log("Você é um Programador!");
//         break
//     case "Adivogado":
//         console.log("Você é um Adivogado!");
//         break
//     case "Engenheiro":
//         console.log("Você é um Engenheiro!");
//         break
//     default:
//         console.log("Você é um programador!");
//         break
// }
// // switch "errado"
// const l = 200;
// switch (l) {
//     case 200:
//         console.log("L é 200!")
//     case 100:
//         console.log("L é 100!")
//     case 10:
//         console.log("L é 10!")
//     default:
//         console.log("L não foi encontrado!")
// }