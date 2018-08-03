import gameStart from '..';
import generateRandInt from '../utils';
import { cons } from 'hexlet-pairs';

const description = "Answer 'yes' if number even, otherwise answer no'.";

const gameIsEven = () => {
  const isEven = num => num % 2 === 0;
  const question = generateRandInt(1, 100);
  const correctAnswer = (isEven(question) ? 'yes' : 'no');
  const game = cons(question, correctAnswer);
  return game;
};

const launch = () => gameStart(description, gameIsEven);

export default launch;
