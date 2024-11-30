export default (num1, num2) => {
  const maxNum = Math.max(num1, num2);
  const minNum = Math.min(num1, num2);
  let res = minNum;
  for (let i = minNum; i > 0; i -= 1) {
    if (maxNum % res === 0 && minNum % res === 0) {
      return res;
    }
    res -= 1;
  }
  return res;
};
