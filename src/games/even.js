import readlineSync from 'readline-sync';
import { greeting, userName } from '..';
import generateRandomNum from '../math';


export const isEven = num => num % 2 === 0;
export const rulesEven = "Answer 'yes' if number even, otherwise answer no'.";

const gameIsEven = () => {
  greeting(rulesEven);
  const name = userName();
  for (let i = 0; i < 3; i += 1) {
    const questNum = generateRandomNum(1, 100);
    console.log(`Question: ${questNum}`);
    const correctAnswer = (isEven(questNum) ? 'yes' : 'no');
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`\n${userAnswer} is a wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}.`);
      return;
    }
    console.log('Correct!\n');
  }
  console.log(`Congratulations, ${name}!\n`);
};

export default gameIsEven;
