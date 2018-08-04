import gameStart from '..';
import generateRandInt, { getGcd } from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Find the greatest common divisor of given numbers.';

const gameGcd = () => {
  const n1 = generateRandInt(1, 100);
  const n2 = generateRandInt(1, 100);
  const question = `${n1} ${n2}`;
  const correctAnswer = String(getGcd(n1, n2));
  const game = cons(question, correctAnswer);
  return game;
};

const launch = () => gameStart(description, gameGcd);

export default launch;
