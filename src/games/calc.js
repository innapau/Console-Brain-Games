import gameStart from '..';
import generateRandInt from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'What is the result of the expression?';

const gameCalc = () => {
  const n1 = generateRandInt(1, 25);
  const n2 = generateRandInt(1, 25);
  const getOperator = generateRandInt(0, 3);
  let correctAnswer = 0;
  let operator = '';
  if (getOperator === 0) {
    correctAnswer = n1 + n2;
    operator = '+';
  } else if (getOperator === 1) {
    correctAnswer = n1 - n2;
    operator = '-';
  } else {
    correctAnswer = n1 * n2;
    operator = '*';
  }
  const question = `${n1} ${operator} ${n2}`;
  const game = cons(question, String(correctAnswer));
  return game;
};

const launch = () => gameStart(description, gameCalc);

export default launch;
