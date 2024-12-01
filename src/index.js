import readlineSync from 'readline-sync';

const mainLogic = (getGameData, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
       console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
       console.log(`Let's try again, ${name}!`);
       return;
      }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default mainLogic;
