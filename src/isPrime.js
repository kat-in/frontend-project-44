import getNumber from './getNumber.js';

export default (number) => {
  
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
