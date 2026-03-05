//p13
//declarar variáveis
// let myLuckyNumber = 16;
// let myName = 'Sara';

// alert('o meu nome é '+myName+ ' e o meu número preferido é o '+myLuckyNumber);

//pp 24
// const MESSAGE = ' TASTE THE RAINBOW  ';

// let whisper = MESSAGE.toLowerCase().trim();
// alert(whisper)

//pp25: ex extra
// let fullName = 'Sara Monteiro';

// //procurar pelo index onde iremos fazer o 'corte'
// let cutIndex = fullName.indexOf(' ');

// //usando o método slice, partir o primeiro nome
// let firstName = fullName.slice(0,cutIndex);

// //usando o método slice, partir o último nome
// let lastName = fullName.slice(cutIndex+1);
// alert(lastName);

//pp26
// const WORD = 'skateboard';
// let facialHair = WORD.slice(5).replace('o','e');
// alert(facialHair);

//pp 31
// let myFirstName = prompt('qual é o teu primeiro nome?');
// let mySurname = prompt('qual é o teu sobrenome?');

// alert('olá '+ myFirstName + ' '+ mySurname);

// 2. Crie um sistema que:

// Peça o nome do utilizador
// Peça a idade

// Se for maior de idade, mostre um menu com indicações personalizadas (tratando pelo nome):
// Ver saldo: simule com um alerta 'tem 1.0000 de euros'
// Fazer levantamentos: pergunte ao utilizador o valor a levantar. No final do levantamento, indique quanto ficou em conta.
// Depositar dinheiro: lance um alerta a indicar 'depósito de 600euros efectuado!'
// Se for menor, mostre: "Acesso negado"

// let userName = prompt("qual é o seu nome?");
// let userAge = prompt("qual é a sua idade?");

// if (userAge > 17) {
//   //bloco de código para a condição maiores de idade
//   alert(userName + " tens acesso");

//   //perguntar ao user maior de idade que operação ele quer
//   let option = prompt(
//     "que operação pretende efectuar? \n 1-ver saldo \n 2-Fazer Levantamentos \n 3-depositar dinheiro",
//   );

//   switch (option) {
//     case "1":
//       alert(userName + " tens 10.000 de euros");
//       break;
//     case "2":
//       let value = prompt("quanto quer levantar?");
//       alert(
//         "levantou " + value + " ,tem disponível " + parseInt(10000 - value),
//       );
//       break;
//     case "3":
//       alert("depósito de 600euros efectuado!");
//       break;
//     default:
//       alert("Opção inválida");
//   }
// } else {
//   alert(userName + " lamento mas não tens acesso a esta funcionalidade");
// }

//pp36
// let planetas = [
//   "Mercúrio",
//   "Vénus",
//   "Terra",
//   "Mart",
//   "Jupiter",
//   "Saturno",
//   "Urano",
//   "Neptuno",
//   "Plutão",
// ];

// planetas[3] = "Marte";
// planetas.pop();
// planetas.unshift("laranjas");
// alert(planetas);

// const airplaneSeats = [
//   ["Ruth", "Anthony", "Stevie"],
//   ["Amelia", "Pedro", "Maya"],
//   ["Xavier", "Ananya", "Luis"],
//   ["Luke", null, "Deniz"],
//   ["Rin", "Sakura", "Francisco"],
// ];

// airplaneSeats[3][1] = 'Sara';
// console.log(airplaneSeats)

//pp 44
// let product = {
//   pname: "Lápis",
//   inStock: true,
//   price: 1.99,
//   colors: ["vermelho", "azul", "verde"],
// };
// product.price = 2.55
// console.log(product.price,product.colors[2])

// Palavra-passe
// a) Cria um script que:
// • Define uma palavra-passe correta, por exemplo "segredo123";
// • Usa um ciclo while para pedir a palavra-passe ao utilizador até ele acertar;
// • Sempre que erra, mostra "Palavra-passe errada, tenta novamente";
// • Quando acerta, mostra "Acesso concedido" e termina o ciclo.
// b) Adiciona uma limitação de tentativas:
// • Máximo de 3 tentativas;
// • Se falhar 3 vezes, mostra "Conta bloqueada" e termina sem conceder acesso

// Construa uma lista de compras.
// Dicas:
// A lista é um array.
// Fazer prompt para o utilizador adicionar items na lista, e
// adicionar esses items ao array.
// Criar uma variável "código" e se o utilizador digitar isso, o
// ciclo acaba e a lista aparece. Por exemplo, se digitar 'fim',
// deixam de aparecer prompts

//ex lista compras - pp 52
// let shoppingList = [];
// let item = "";

// while (item != "fim") {
//   item = prompt("qual é o item?Quando acabar, digite fim").toLowerCase().trim();
//   if (item != "fim") {
//     shoppingList.push(item);
//   }
// }

// alert(shoppingList);

//pp51
// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

// for(let item of people){
//   alert(item.toUpperCase());
// }

// for(let i=0; people.length; i++){
//    alert(people[i].toUpperCase());
// }

//pp55
function printHeart() {
  alert("❤️");
}


//pp59
function rant(message, numTimes) {
  for (let i = 0; i < numTimes; i++) {
    alert(("odeio " + message).toUpperCase());
  }
}
