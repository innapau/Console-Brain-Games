const generateRandInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const getGcd = (a, b) => {
  if (a % b === 0) {
    return b;
  }
  return getGcd(b, a % b);
};

export default generateRandInt;
