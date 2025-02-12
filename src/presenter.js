import sumar from "./sumador";
import multiplicar from "./multiplicador";

const sumForm = document.querySelector("#sumar-form");
const sumFirst = document.querySelector("#primer-numero-suma");
const sumSecond = document.querySelector("#segundo-numero-suma");
const sumDiv = document.querySelector("#resultado-suma");

const multForm = document.querySelector("#multiplicar-form");
const multFirst = document.querySelector("#primer-numero-mult");
const multSecond = document.querySelector("#segundo-numero-mult");
const multDiv = document.querySelector("#resultado-multiplicacion");

sumForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number(sumFirst.value); 
  const secondNumber = Number(sumSecond.value);

  sumDiv.innerHTML = "<p>La suma es: " + sumar(firstNumber, secondNumber) + "</p>";
});

multForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number(multFirst.value); 
  const secondNumber = Number(multSecond.value);

  multDiv.innerHTML = "<p>La multiplicación es: " + multiplicar(firstNumber, secondNumber) + "</p>";
});
