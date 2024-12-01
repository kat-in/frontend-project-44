import mainLogic from '../index.js';
import getNumber from '../getNumber.js';
import getGcd from '../getGcd.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const number1 = getNumber(100);
  const number2 = getNumber(100);
  const question = `${number1} ${number2}`;
  const result = getGcd(number1, number2);
  const correctAnswer = result.toString();
  return [question, correctAnswer];
};

const startGcdGame = () => mainLogic(getGameData, description);

export default startGcdGame;
