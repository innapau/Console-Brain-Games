import gameStart from '..';
import generateRandInt from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'What number is missing in this progression?';
const progressionLength = 10;

const createProgression = (startNum, step, missingElement) => {
  let result = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === missingElement) {
      result += ' ..';
      i += 1;
    }
    result += ` ${startNum + (step * i)}`;
  }
  return result;
};

const gameProgression = () => {
  const startNum = generateRandInt(0, 20);
  const step = generateRandInt(1, 10);
  const missingElement = generateRandInt(1, progressionLength - 1);
  const question = createProgression(startNum, step, missingElement);
  const correctAnswer = String(startNum + (step * missingElement));
  const game = cons(question, correctAnswer);
  return game;
};

const launch = () => gameStart(description, gameProgression);

export default launch;
