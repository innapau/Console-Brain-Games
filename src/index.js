import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

// Welcome message and rules description.
const greeting = (description) => {
  console.log('Welcome to the Brain Games!');
  if (description === String(description)) {
    console.log(description);
  }
};

// Ask for user name.
const getUserName = () => {
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!\n`);

  return name;
};

// Main game cycle.
const gameEngine = (userName, gameData) => {
  const questionCount = 3;
  for (let i = 0; i < questionCount; i += 1) {
    const game = gameData();
    const question = car(game);
    const correctAnswer = cdr(game);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`\n${userAnswer} is a wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}.`);
      return;
    }
    console.log('Correct!\n');
  }
  console.log(`Congratulations, ${userName}!\n`);
};

// Launch the game.
const gameStart = (description, gameData) => {
  greeting(description);
  const userName = getUserName();
  gameEngine(userName, gameData);
};
export default gameStart;
