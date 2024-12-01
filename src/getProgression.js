import getNumber from './getNumber.js';

export default (length) => {
  const firstNumber = getNumber(10);
  const difference = getNumber(10) + 1;
  const progression = [firstNumber];

  let progressionElement = firstNumber;
  for (let i = 1; i < length; i += 1) {
    progressionElement += difference;
    progression.push(progressionElement);
  }
  return progression;
};
