import mainLogic from '../index.js';
import getNumber from '../getNumber.js';
import getSign from '../getSign.js';

const description = 'What is the result of the expression?';

const getGameData = () => {
  const question = `${getNumber(100)} ${getSign()} ${getNumber(100)}`;
  // eslint-disable-line no-eval
  const result = eval(question);
  const correctAnswer = result.toString();
  return [question, correctAnswer];
};

const startCalcGame = () => mainLogic(getGameData, description);

export default startCalcGame;
