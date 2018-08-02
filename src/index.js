import readlineSync from 'readline-sync';

export const greeting = (rule) => {
  console.log('Welcome to the Brain Games!');
  if (rule === String(rule)) {
    console.log(rule);
  }
};

export const userName = () => {
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!\n`);

  return name;
};
