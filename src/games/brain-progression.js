import mainLogic from '../index.js';
import getProgression from '../getProgression.js';
import getNumber from '../getNumber.js';

const description = 'What number is missing in the progression?';

const getGameData = () => {
  const progression = getProgression(10);
  const hidenNumber = getNumber(10) - 1;
  const result = progression[hidenNumber];
  const correctAnswer = result.toString();
  progression[hidenNumber] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const startProgressionGame = () => mainLogic(getGameData, description);

export default startProgressionGame;
