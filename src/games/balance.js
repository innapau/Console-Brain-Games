import gameStart from '..';
import generateRandInt from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Balance the given number.';

const sumOfDigits = (number, length) => {
  const str = String(number);
  let result = 0;
  for (let i = 0; i < length; i += 1) {
    result += Number(str[i]);
  }
  return result;
};

const getBalancedNum = (num) => {
  const str = String(num);
  let len = str.length;
  let summ = sumOfDigits(num, len);
  let balanced = '';
  for (let j = len; j > 0; j -= 1) {
    const average = Math.floor(summ / len);
    summ -= average;
    len -= 1;
    balanced += String(average);
  }
  return balanced;
};

const gameBalance = () => {
  const question = generateRandInt(1, 9999);
  const correctAnswer = getBalancedNum(question);
  const game = cons(question, correctAnswer);
  return game;
};

const launch = () => gameStart(description, gameBalance);

export default launch;
