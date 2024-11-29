import isEven from "./isEven.js";
import random from "../src/random-number.js";
import readlineSync from "readline-sync";

export default (number) => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  number = random(100);

  for (let i = 0; i < 3; i += 1) {
    const correctAnswer = isEven(number) ? "yes" : "no";
    console.log(`Question: ${number}`);
    let answer = readlineSync.question("Your answer: ").toLowerCase();
    if (answer === correctAnswer) {
      console.log("Correct!");
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
      Let's try again!`);
    }
    number = random(100);
  }

  console.log(`Congratulations, ${name}!`);
};
