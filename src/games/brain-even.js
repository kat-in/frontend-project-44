import mainLogic from '../index.js';
import random from '../getNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const question = random(100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startEvenGame = () => mainLogic(getGameData, description);

export default startEvenGame;
