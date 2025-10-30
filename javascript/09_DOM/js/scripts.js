// // 01 - Movendo-se pel DOM
// console.log(document.body);
// console.log(document.body.childNodes);
// console.log(document.body.childNodes[1]);
// console.log(document.body.childNodes[1].childNodes);
// console.log(document.body.childNodes[1].childNodes[1].textContent);

// // 02 - Selecionando por tag
// const listItens = document.getElementsByTagName("li");
// console.log(listItens);

// // 03 - Selecionando por id
// const title = document.getElementById("main-container");
// console.log(title);

// // 04 - Selecionando por classe
// const products = document.getElementsByClassName("product");
// console.log(products);

// // 05 - Selecionando os elementos po CSS
// const productQuery = document.querySelectorAll(".product");
// console.log(productQuery);

// const mainConteainer = document.querySelector("#main-container");
// console.log(mainConteainer);

// // 06 - insertBefore
// const p = document.createElement("p");
// console.log(p);
// const header = title.parentElement;
// console.log(header);
// header.insertBefore(p, title);

// // 07 - appendChild
// const navLinks = document.querySelector("nav ul");
// const li = document.createElement("li");

// navLinks.appendChild(li);

// // 08 - replaceChild
// const h2 = document.createElement("h2");
// h2.textContent = "Meu novo título!";
// header.replaceChild(h2, title);

// // 09 - createTexteNode
// const myText = document.createTextNode("Agora vamos colocar mais um título");
// console.log(myText);
// const h3 = document.createElement("h3");

// h3.appendChild(myText);
// console.log(h3);

// mainConteainer.appendChild(h3);

// // 10 - trabalhando com atributos
// const firstLink = navLinks.querySelector("a");
// console.log(firstLink);

// firstLink.setAttribute("href", "https://www.google.com");
// console.log(firstLink.getAttribute("href"));

// firstLink.setAttribute("target", "_blank");

// // 11 - altura e largura
// const footer = document.querySelector('footer')
// console.log(footer.offsetWidth);
// console.log(footer.offsetHeight);

// console.log(footer.clientWidth);
// console.log(footer.clientHeight);

// // 12 - posiçao do elemento
// const product1 = products[1]
// console.log(product1.getBoundingClientRect());

// // 13 - CSS com JS
// mainConteainer.style.color = 'red'
// mainConteainer.style.backgroundColor = 'grey'
// mainConteainer.style.paddingBottom = '15px'

// // 14 - alterando estilos de varios elementos 
// for (const li of listItens) {
//     li.style.backgroundColor = 'red'
// }