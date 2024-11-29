import getSign from "../src/getSign.js"
import getNumber from "../src/getNumber.js"
import getName from "../src/getName.js"
import readlineSync from "readline-sync";



const isCorrect = (question) => {

const mathSigns = ['+', '-', '*'];
const name = getName();
console.log(`What is the result of the expression?`);
question = `${getNumber(100)} ${getSign(mathSigns)} ${getNumber(100)}`;
console.log(question);

    
for (let i = 0; i < 3; i += 1) {
    
  let result = eval(question);
  let correctAnswer = result.toString();
  
  let answer = readlineSync.question("Your answer: ");
    if (answer === correctAnswer) {
       
        console.log("Correct!");
        
        
      } else {
        return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${name}!`);
      }
      question = `${getNumber(100)} ${getSign(mathSigns)} ${getNumber(100)}`;
      console.log(question);
}

console.log(`Congratulations, ${name}!`);
};

isCorrect();







