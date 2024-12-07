import mainLogic from '../index.js';
import getNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (length) => {
  const firstNumber = getNumber(0, 100);
  const difference = getNumber(0, 100) + 1;
  const progression = [firstNumber];

  let progressionElement = firstNumber;
  for (let i = 1; i < length; i += 1) {
    progressionElement += difference;
    progression.push(progressionElement);
  }
  return progression;
};

const getGameData = () => {
  const progression = getProgression(10);
  const hidenNumber = getNumber(0, 9);
  const result = progression[hidenNumber];
  const correctAnswer = result.toString();
  progression[hidenNumber] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const startProgressionGame = () => mainLogic(getGameData, description);

export default startProgressionGame;
