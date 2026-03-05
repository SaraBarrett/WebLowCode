function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//primeira linha de código JS
let firstCode = "hello world";
let className = "Low Code";
let number = 9;

//reassignar um novo valor à variável
className = "Design UI/UX";

//concatenar variáveis
// alert(className + ": " + firstCode + "!");

// //forma alternativa de concatenar variáveis
// alert(`a turma é ${className}: ${firstCode}!`);

number = 8;
//if/else: validar se número é par ou impar e informar
//se for par
// if (number % 2 == 0) {
//   alert("número par");
// } else {
//   //se for impar
//   alert("número impar");
// }

//comparação == e ===
// let number1 = 16;
// let number2= '16';

// alert(number1 === number2)

// let firstName = "Sara";
// let lastName = "Monteiro";

// // alert('olá ' +firstName+' '+lastName[0]+'.');
// alert(firstName.toUpperCase().trim())

//tipo de dados undefinied
//alert(hello)

//tipo de dados null
// let hello = null;
// alert(hello)

//alert
// alert('olá sou um alerta!')

//console.log()
// console.log('estou loggado na consola e sou amigo dos programadores')

//perguntar algo ao user
// let userName = prompt('qual é o teu nome?');

// console.log('olá programador '+userName)

//condicionais -> if/else
// let weekDay = prompt("que dia da semana é hoje?").toLowerCase().trim();

// if (weekDay == "segunda" || weekDay == "segunda-feira") {
//   alert("força para esta semana!");
// } else if (weekDay == "quarta" || weekDay == "quarta-feira") {
//   alert("chegámos ao meio da semana");
// } else {
//   alert("já faltou mais para o fim de semana");
// }

//condicionais -> switch
// switch (weekDay) {
//   case "segunda":
//   case "segunda-feira":
//     alert("é segunda");
//     break;
//   case "terça":
//   case "terça-feira":
//     alert("é terça");
//     break;
//   case "quarta":
//   case "quarta-feira":
//     alert("é quarta");
//     break;
//   case "quinta":
//   case "quinta-feira":
//     alert("é quinta");
//     break;
//   case "sexta":
//   case "sexta-feira":
//     alert("é sexta");
//     break;
//   case "sábado":
//   case "domingo":
//     alert("é fim de semana");
//     break;
//   default:
//     alert("dia inválido");
// }

//array de strings
let alunos = ["Maria Cardoso", "Bruno Azevedo", "Beatriz Afonso"];

//array de números
let notas = [20, 15, 9];

//array com vários tipos de dados: string, número e boleano
let mixedArray = ["Cesae", 15, true];

//alert(`a aluna ${alunos[2]} tem nota ${notas[2]}`);

alunos[1] = "Bruno Silva";

// //perguntar ao user que index quer alterar
// let index = prompt('qual é o index a alterar?');

//perguntar ao user o novo nome
// let newName = prompt('qual é o novo nome?');

//alterar no array
// alunos[index] = newName;

//mostrar a ver se está ok
//alert(alunos);

//adicionar no fim do array
alunos.push("Andreia Ricardo");

//Perguntar ao utilziador o nome que quer adicionar
// let pushName = prompt('Qual é o novo aluno?');
// alunos.push(pushName)

//remover do início
// alunos.shift()
// alert(alunos);

// let courses = [
//   ["css", "html"],
//   "bases de dados",
//   "Inglês",
//   ["funções", "tipos de dados","ciclos"]
// ];

// alert(courses[1])

// let meals = [
//   "Arroz e feijão",
//   "lasanha",
//   "ramen",
//   "pizza",
//   "salada de feijão frade",
//   "francesinha",
// ];

// let randomIndex = meals[getRandomInt(meals.length)];
// alert(`o prato do dia é ${randomIndex}`);

//object Literals
// let course = {
//   cname: "Programador de Low Code",
//   responsible: "Inês Castro",
//   hours: 1100,
//   modules: ["Programação Web", "Algoritimia", "Inglês"],
// };

// //reasignar novos valores
// course.hours = 1150;

// //pergunta ao utilizador o módulo a acrescentar
// //let newModule = prompt('qual é o módulo a adicionar?');

// course.modules.push(prompt('qual é o módulo a adicionar?'));
// alert(course.modules)

// //chamar pelos dados dentro de um objecto
// alert(
//   "o curso de " +
//     course.cname +
//     " e tem " +
//     course.hours +
//     "h e o módulo mais importante é " +
//     course.modules[1],
// );

// let pass = 1;

// while (pass.length <4) {
//  pass = prompt("a pass não tem pelo menos 4caracteres. Insira uma nova pass");
// }

// alert('pass ok');

//ciclos for tradicionais (para todas as linguagens)
// for(let count = 10; count>0; count= count-2){
//   alert(count);
// }

// let shoppingList = ['bananas', 'maçãs','salada','sopa'];
// alert('comprar '+shoppingList[0])
// alert('comprar '+shoppingList[1])
// alert('comprar '+shoppingList[2])

// for(let count=0; count<shoppingList.length;count++){
//   alert('comprar '+shoppingList[count])
// }
// for(let element of shoppingList){
//   alert('comprar '+element)
// }

//funções
function hello(helloName) {
  
  alert("hello "+helloName);
}
