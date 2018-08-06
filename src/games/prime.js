import gameStart from '..';
import generateRandInt from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Is the given number prime?.';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameIsPrime = () => {
  const question = generateRandInt(2, 999);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  const game = cons(question, correctAnswer);
  return game;
};

const launch = () => gameStart(description, gameIsPrime);

export default launch;
