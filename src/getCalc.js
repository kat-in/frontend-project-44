export default (num1, num2, sign) => {
  if (sign === '+') {
    return num1 + num2;
  }
  if (sign === '-') {
    return num1 - num2;
  }
  if (sign === '*') {
    return num1 * num2;
  }
  return console.log('Неизвестный оператор');
};
