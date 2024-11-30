import mainLogic from '../index.js';
import isEven from '../isEven.js';
import random from '../getNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const question = random(100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startEvenGame = () => mainLogic(getGameData, description);

export default startEvenGame;
