import getSign from "../getSign.js"
import getNumber from "../getNumber.js"
import getName from "../getName.js"
import readlineSync from "readline-sync";


export default () => {

const name = getName();
console.log(`What is the result of the expression?`);
let question = `${getNumber(100)} ${getSign()} ${getNumber(100)}`;
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
      question = `${getNumber(100)} ${getSign()} ${getNumber(100)}`;
      console.log(question);
}

console.log(`Congratulations, ${name}!`);
};









