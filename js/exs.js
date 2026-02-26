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

let userName = prompt("qual é o seu nome?");
let userAge = prompt("qual é a sua idade?");

if (userAge > 17) {
  //bloco de código para a condição maiores de idade
  alert(userName + " tens acesso");

  //perguntar ao user maior de idade que operação ele quer
  let option = prompt(
    "que operação pretende efectuar? \n 1-ver saldo \n 2-Fazer Levantamentos \n 3-depositar dinheiro",
  );

  switch (option) {
    case "1":
      alert(userName + " tens 10.000 de euros");
      break;
    case "2":
      let value = prompt("quanto quer levantar?");
      alert(
        "levantou " + value + " ,tem disponível " + parseInt(10000 - value),
      );
      break;
    case "3":
      alert("depósito de 600euros efectuado!");
      break;
    default:
      alert("Opção inválida");
  }
} else {
  alert(userName + " lamento mas não tens acesso a esta funcionalidade");
}
