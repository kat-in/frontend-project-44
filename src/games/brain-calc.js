import mainLogic from '../index.js';
import getNumber from '../getNumber.js';
import getSign from '../getSign.js';
import getCalc from '../getCalc.js';

const description = 'What is the result of the expression?';

const getGameData = () => {
  const number1 = getNumber(100);
  const number2 = getNumber(100);
  const sign = getSign();
  const question = `${number1} ${sign} ${number2}`;
  const result = getCalc(number1, number2, sign);
  const correctAnswer = result.toString();
  return [question, correctAnswer];
};

const startCalcGame = () => mainLogic(getGameData, description);

export default startCalcGame;
