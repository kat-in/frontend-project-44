import mainLogic from '../index.js';
import getNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 1) {
    return true;
  }
  if (number === 0 || number % 2 === 0) {
    return false;
  }
  for (let i = 3; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const getGameData = () => {
  const question = getNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startPrimeGame = () => mainLogic(getGameData, description);

export default startPrimeGame;
