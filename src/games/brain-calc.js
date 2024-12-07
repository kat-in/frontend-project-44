import mainLogic from '../index.js';
import getNumber from '../utils.js';

const description = 'What is the result of the expression?';

const getSign = () => {
  const array = ['+', '-', '*'];
  return array[getNumber(0, 2)];
};

const getCalc = (num1, num2, sign) => {
  let result;
  switch (sign) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      throw new Error(`Неизвестный оператор: '${sign}'!`);
  }
  return result;
};

const getGameData = () => {
  const number1 = getNumber(0, 50);
  const number2 = getNumber(0, 50);
  const sign = getSign();
  const question = `${number1} ${sign} ${number2}`;
  const result = getCalc(number1, number2, sign);
  const correctAnswer = result.toString();
  return [question, correctAnswer];
};

const startCalcGame = () => mainLogic(getGameData, description);

export default startCalcGame;
