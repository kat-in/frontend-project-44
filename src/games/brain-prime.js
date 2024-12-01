import mainLogic from '../index.js';
import getNumber from '../getNumber.js';
import isPrime from '../isPrime.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
  const question = getNumber(100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startPrimeGame = () => mainLogic(getGameData, description);

export default startPrimeGame;
