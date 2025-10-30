// // 1 - Arrays
// const lista = [1, 2, 3, 4, 5];
// console.log(lista); // [1, 2, 3, 4, 5]
// console.log(typeof lista); // object

// const itens = ["Paulo", true, 2, 4.12, []];
// console.log(itens); // [ 'Paulo', true, 2, 4.12, [] ]

// // 2 - Mais sobre arrays
// const arr = ["a", "b", "c", "d", "e"];
// console.log(arr[0]); // a
// console.log(arr[3]); // d
// console.log(arr[83]); // undefined

// // 3 - Propriedades
// const numbers = [5, 3, 4];
// console.log(number.length); // 3
// console.log(number["length"]); // 3

// const myName = "Nantet";

// console.log(myName.length);

// // 4 - Métodos

// const numbers = [5, 3, 4];
// const otherNumbers = [1, 2, 3];
// const allNumbers = numbers.concat(otherNumbers);
// console.log(allNumbers); // [5, 3, 4, 1, 2, 3]

// const text = "Algum texto";
// console.log(text.toUpperCase()) // ALGUM TEXTO
// console.log(typeof text.toUpperCase) // function
// console.log(text.indexOf("c")) // -1
// console.log(text.indexOf("a")) // -1
// console.log(text.indexOf("x")) // 8

// // 5 - Objetos
// const person = {
//   name: "Paulo",
//   age: 35,
//   job: "Desenvolvedor",
// };

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person["job"]);
// console.log(person.name.length);
// console.log(
//   "O nome " + person.name + " pussui " + person.name.length + " caracteres"
// );
// console.log(`O nome ${person.name} pussui ${person.name.length} caracteres`);

// const newPerson = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName1: function () {
//     return this.firstName + " " + this.lastName;
//   },
//   fullName2: () => {
//     return newPerson.firstName + " " + newPerson.lastName;
//   },
//   fullName3: () => `${newPerson.firstName} ${newPerson.lastName}`,
// };

// console.log(newPerson.firstName);
// console.log(newPerson.lastName);
// console.log(newPerson.id);
// console.log(newPerson.fullName1());
// console.log(newPerson.fullName2());
// console.log(newPerson.fullName3());

// 6 - Criando e deletando propriedades
// const car = {
//   engine: 2.0,
//   brand: "vw",
//   model: "Tiguan",
//   km: 20000,
// };
// console.log(car);

// car.door = 4;  // Adicionando uma nova propriedade
// console.log(car);

// delete car.km; // Deletando uma propriedade
// console.log(car);

// // Vamos fazer um teste
// const char = {
//   ataque: 45,
//   defesa: 20,
//   evasao: 15,
// };

// const div1 = document.createElement("div");
// div1.classList.add("leve-up");

// const h2 = document.createElement("h2");
// h2.textContent = "Teste level up";

// const button = document.createElement("button");
// button.textContent = "level up";

// const paragrafo = document.createElement("p");
// let level = 1;
// paragrafo.textContent = `Level: ${level}`;

// const div2 = document.createElement("div");
// div2.classList.add("atributos");

// const ataque = document.createElement("p");
// const defesa = document.createElement("p");
// const evasao = document.createElement("p");

// ataque.textContent = `ataque: ${char.ataque}`;
// defesa.textContent = `defesa: ${char.defesa}`;
// evasao.textContent = `evasao: ${char.evasao}`;

// div1.appendChild(h2);
// div1.appendChild(button);
// div1.appendChild(paragrafo);

// div2.appendChild(ataque);
// div2.appendChild(defesa);
// div2.appendChild(evasao);

// document.body.appendChild(div1);
// document.body.appendChild(div2);

// function charLevelUp() {
//   level += 1;

//   char.ataque += 4;
//   char.defesa += 2;
//   char.evasao += 3;

//   paragrafo.textContent = `Level: ${level}`;
//   ataque.textContent = `ataque: ${char.ataque}`;
//   defesa.textContent = `defesa: ${char.defesa}`;
//   evasao.textContent = `evasao: ${char.evasao}`;

//   if (level == 5) {
//     //
//     char.especial_1 = "Flecha explosiva";
//     const especial_1 = document.createElement("p");
//     especial_1.textContent = `especial_1: ${char.especial_1}`;
//     div2.appendChild(especial_1);
//     //
//   } else if (level == 10) {
//     //
//     char.especial_2 = "Rajada de flecha";
//     const especial_2 = document.createElement("p");
//     especial_2.textContent = `especial_2: ${char.especial_2}`;
//     div2.appendChild(especial_2);
//     //
//   } else if (level == 15) {
//     //
//     char.especial_3 = "Flechas congelantes";
//     const especial_3 = document.createElement("p");
//     especial_3.textContent = `especial_3: ${char.especial_3}`;
//     div2.appendChild(especial_3);
//     //
//   }
// }

// button.addEventListener("click", charLevelUp);

// const pessoas = [
//   {
//     nome: "João",
//     idade: 25,
//     cidade: "São Paulo",
//   },
//   { nome: "Maria", idade: 30, cidade: "Rio de Janeiro" },
//   {
//     nome: "Carlos",
//     idade: 22,
//     cidade: "Belo Horizonte",
//   },
// ];
// console.log(pessoas)

// // 7 - Mais sobre objetos
// const obj1 = {
//   a: "teste",
//   b: true,
// };

// console.log(obj1 instanceof Object); // instanceof => Conseguimos ver se o objeto é filho de uma classe

// const obj2 = {
//   c: [],
// };

// Object.assign(obj2, obj1);

// console.log(obj2);
// console.log(obj1);

// // 8 - Conhecendo melhor os objetos
// const obj3 = {
//   a: "teste",
//   b: true,
// };
// const obj4 = {
//   c: [],
// };
// const car3 = {
//   engine: 2.0,
//   brand: "vw",
//   model: "Tiguan",
//   km: 20000,
// };
// // keys => Mostra os nome das chaves
// console.log(Object.keys(obj3))
// console.log(Object.keys(obj4))
// console.log(Object.keys(car3))
// // entries => Mostra os nome das chaves e valores
// console.log(Object.entries(car3))

// // 9 - Mutação
// const a = {
//   nome: "Paulo",
// };
// const b = a;
// console.log(a);
// console.log(b);
// console.log(a === b);

// a.age = 31;
// console.log(a);
// console.log(b);

// delete b.age;
// console.log(a);
// console.log(b);

// // 10 - loops em arrays
// const users = ["Matheus","João","Pedro","Miguel"]

// for(let i = 0; i < users.length; i++){
//   console.log(`Listando o usuário: ${users[i]}`)
// }

// // 11 - Push e pop
// const array = ["a", "b", "c"];

// array.push("d");
// console.log(array);
// console.log(array.length);

// array.pop()
// console.log(array);

// const itemRemovido = array.pop()
// console.log(itemRemovido)

// array.push("x","y","z");
// console.log(array)

// // 12 - shift e unshift

// const letters = ["a", "b", "c"];

// const letter = letters.shift();
// console.log(letter);

// console.log(letters);

// letters.unshift("p","q","r")
// console.log(letters);

// letters.unshift("z")
// console.log(letters);

// // 13 - indexOf e lastIndexOf

// const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];

// console.log(myElements.indexOf("Maçã"));
// console.log(myElements.indexOf("Abacate"));

// console.log(myElements[2]);
// console.log(myElements[myElements.indexOf("Abacate")]);

// console.log(myElements.lastIndexOf("Abacate"));

// console.log(myElements.indexOf("Mamão"));

// console.log(myElements.lastIndexOf("Mamão"));

// // 14 - slice

// const testeSlice = ["a", "b", "c", "d", "e", "f"];
// const subArray1 = testeSlice.slice(2, 4);
// console.log(subArray1);

// console.log(testeSlice);

// const subArray2 = testeSlice.slice(2, 4 + 1);
// console.log(subArray2);

// const subArray3 = testeSlice.slice(10, 20);
// console.log(subArray3);

// const subArray4 = testeSlice.slice(2);
// console.log(subArray4);

// // 15 - forEach

// const nums = [1, 2, 3, 4, 5];

// nums.forEach((numero) => {
//   console.log(`O número é ${numero}`);
// });

// const posts = [
//   { title: "Primero post", category: "PHP" },
//   { title: "Segundo post", category: "JavaScript" },
//   { title: "Terceiro post", category: "Python" },
// ];
// posts.forEach((post) => {
//   console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
// });

// // 16 - includes

// const brands = ["BMW", "VM", "Fiat"];

// console.log(brands.includes("Fiat"));
// console.log(brands.includes("KIA"));

// if (brands.includes("BMW")){
//     console.log("Há carros dessa marca BMW!")
// }

// // 17 - reverse
// const reverseTeste = [1, 2, 3, 4, 5];
// reverseTeste.reverse();

// console.log(reverseTeste);
// reverseTeste.reverse();

// console.log(reverseTeste);

// // 18 - trim
// const trimTest = "  testando \n  ";
// console.log(trimTest);
// console.log(trimTest.trim());
// console.log(trimTest.length);
// console.log(trimTest.trim().length);

// // 19 - padstart
// const testePadStart = "1";
// const newNumber = testePadStart.padStart(4, "0");

// console.log(testePadStart);
// console.log(newNumber);

// const testePadEnd = newNumber.padEnd(10, "0");

// console.log(testePadEnd);

// //testando os codigos

// document.body.innerHTML = `
//     <h1>Arrays e Objetos</h1>
//     <input type="text" />
//     <button>Adicionar</button>
//     <p class="pNum">Primeiro número: <span class="old-span"></span></p>
//     <p class="sNum">Segundo número: <span class="new-span"></span></p>
// `;

// const input = document.querySelector("input");
// const button = document.querySelector("button");
// const text1 = document.querySelector(".pNum");
// const text2 = document.querySelector(".sNum");
// const oldSpan = document.querySelector(".old-span");
// const newSpan = document.querySelector(".new-span");

// input.style.color = "green";
// input.style.paddingLeft = "5px";
// input.style.fontSize = "18px";

// button.style.fontSize = "18px";
// button.style.marginLeft = "10px";
// button.style.color = "green";
// button.style.borderBottom = "1px solid green";

// text1.style.fontSize = "18px";
// text1.style.color = "green";

// text2.style.fontSize = "18px";
// text2.style.color = "green";

// console.log(document.body);

// button.addEventListener("click", () => {
//   // Verifica se o input esta vazio
//   if (input.value == "") {
//     return;
//   } else {
//     // verifica se contem ,
//     if (input.value.includes(",")) {
//       // contem ,
//       oldSpan.textContent = `${input.value}`;
//       return;
//     } else {
//       // nao contem ,
//       newSpan.textContent = `${input.value},00`;
//     }
//   }
// });
// input.addEventListener("input", () => {
//   input.value = input.value.replace(/[a-zA-Z]/g, "");
// });

// // 20 - split
// const frase = "o rato roeu a roupa do rei de Roma";
// const arrayDaFrase = frase.split(" ");
// console.log(arrayDaFrase);
// const palavra = "JavaScript";
// const arrayDaPalavra = palavra.split(" ");
// console.log(arrayDaPalavra);

// // 21 - join
// const fraseSeparada = [
//   "o",
//   "rato",
//   "roeu",
//   "a",
//   "roupa",
//   "do",
//   "rei",
//   "de",
//   "Roma",
// ];
// const fraseNova = fraseSeparada.join(" ");
// console.log(fraseNova);
// const palavraSeparada = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"];
// const palavraNova = palavraSeparada.join("");
// console.log(palavraNova);
// const itensParaCompra = ["mouse", "teclado", "monitor"];
// const fraseDeCompra = `Precisamos comprar: ${itensParaCompra.join(", ")}.`
// console.log(fraseDeCompra);

// // 22 - repeat
// const palavra = "Testando "
// console.log(palavra.repeat(5));

// // 23 - rest operator
// const somaInfinita = (...arg) => {
//   let total = 0;
//   for (let i = 0; i < arg.length; i++) {
//     total += arg[i];
//   }
//   return total;
// };
// console.log(somaInfinita(1, 2, 3));
// console.log(somaInfinita(1, 20, 34, 3424, 12723, 12, 23, 54, 12));

// // 24 - for of
// const somaInfinita2 = (...arg) => {
//   let total = 0;
//   for (num of arg) {
//     total += num;
//   }
//   return total;
// };
// console.log(somaInfinita2(1, 2, 3));
// console.log(somaInfinita2(5, 6, 1, 23, 5, 6, 3, 5));

// // 25 - Desestructuring em objetos

// const userDetails = {
//     firstName:"Paulo",
//     lastName:"Nantet",
//     job:"Programador",
// }
// // Como seria tradicionalmente
// const firstName = userDetails.firstName
// console.log(firstName);

// // destrucring
// const {firstName, lastName, job} = userDetails
// console.log(firstName, lastName, job);

// // Renomear variaveis
// const {firstName:primeiroNome} = userDetails
// console.log(primeiroNome);

// // 26 - Desestructuring em arrays
// const myList = ["avião", "submarino", "carro"];
// const [veiculoA, veiculoB, veiculoC] = myList
// console.log(veiculoA, veiculoB, veiculoC);

// // 27 - JSON
// const myJSon =
//   '{"name":"Paulo","age":35,"skills":["PHP", "JavaScript", "SQL"]}';
// console.log(myJSon);
// console.log(typeof myJSon); 
