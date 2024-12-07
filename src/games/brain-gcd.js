import mainLogic from '../index.js';
import getNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  const maxNum = Math.max(num1, num2);
  const minNum = Math.min(num1, num2);
  let res = minNum;
  for (let i = minNum; i > 0; i -= 1) {
    if (maxNum % res === 0 && minNum % res === 0) {
      return res;
    }
    res -= 1;
  }
  return res;
};

const getGameData = () => {
  const number1 = getNumber(1, 100);
  const number2 = getNumber(1, 100);
  const question = `${number1} ${number2}`;
  const result = getGcd(number1, number2);
  const correctAnswer = result.toString();
  return [question, correctAnswer];
};

const startGcdGame = () => mainLogic(getGameData, description);

export default startGcdGame;
