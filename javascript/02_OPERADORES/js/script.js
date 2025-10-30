// 1 - Number
console.log(typeof 2);        // number
console.log(typeof 5.14);     // number
console.log(typeof -127);     // number

// 2 - Ops. Aritiméticas
console.log(10 + 4);  // 14
console.log(10 - 5);  // 5 
console.log(10 / 4);  // 2.5
console.log(10 * 5);  // 50

console.log(5 + (4 * 2)); // 13
console.log((5 + 4) * 2); // 18

// 3 - Special numbers
console.log(typeof Infinity); // number

console.log(typeof -Infinity); // number

console.log(12 * "asd"); // NaN

console.log(typeof NaN);

// 4 - String
console.log("Um texto");
console.log('Mais um texto');
console.log(`Outro texto`);

console.log(typeof "Um texto");
console.log(typeof 'Mais um texto');
console.log(typeof `Outro texto`);

// 5 - Símbolos especiais em string
console.log("Testando a \n quebra de linha"); // Quebra de linha

console.log("Espaçamento \t de tab"); // Espaçamento

// 6 - Concatenação
console.log("Oi, " + "tudo" + " bem?") // Concatenar 

console.log(`Testando ` + `com ` + `a crase!`)

// 7 - Template Strings
console.log(`A soma de 2 + 2 é: ${2 + 2}`);

console.log(`Podemos esxecutar qualquer coisa aqui ${console.log("teste")}`);

// 8 - Boolean
console.log(true);

console.log(5 > 20)

console.log(30 > 10)

console.log(typeof false)

// 9 - Comparações
console.log(5 <= 5); // menor ou igual
console.log(5 >= 5); // maior ou igual

console.log(5 < 5); // menor que
console.log(5 > 5); // maior que

console.log(10 == 10); // igual

console.log(10 == 9); // igual

console.log(10 != 9); // diferente

// 10 - Idêntico
console.log(9 == "9"); // igual

console.log(9 != "9"); // diferente

console.log(9 + "9"); // concatenar "unir, juntar"

console.log(9 === "9"); // exatamente igual

console.log(9 !== "9"); // exatamente diferente  

//11 - Operadores lógicos 
console.log(true && true);

console.log(true && false);

console.log(5 > 2 && 2 < 10);

console.log(5 > 2 && "Matheus" === 1);

console.log(5 > 2 || "Matheus" === 1);

console.log(5 < 2 || 5 > 100);

console.log(!true);

console.log(5 > 2);
console.log(!5 > 2); 

// 12 - Empty values
console.log(typeof null, typeof undefined);

console.log(null == undefined);
console.log(null === undefined);

console.log(null == false);
console.log(undefined == false);

// 13 - Mudança de dados 
console.log(5 * null);

console.log("teste" * "opa");

console.log("10" + 1);

console.log("10" - 1);
