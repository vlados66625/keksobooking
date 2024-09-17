const getRandomNumber = (min, max, afterCommaNumbers) => {
  if (min >= max) {
    return NaN;
  }
  let randomValue;
  if (afterCommaNumbers === 0) {
    randomValue = min + (max - min + 1) * Math.random();
    return Math.trunc(randomValue);
  }
  randomValue = min + (max - min) * Math.random();
  return Number(randomValue.toFixed(afterCommaNumbers));
};

const getRandomItemArray = (array) => array[getRandomNumber(0, array.length - 1, 0)];

const getRandomItemsArray = (array) => {
  const lengthNewArray = getRandomNumber(1, array.length - 1, 0);
  const newArray = [];
  while (newArray.length < lengthNewArray) {
    const newArrayItem = getRandomItemArray(array);
    if (!newArray.includes(newArrayItem)) {
      newArray.push(newArrayItem);
    }
  }
  return newArray;
};

const getRandomIntegerWithZero = (min, max) => {
  const value = getRandomNumber(min, max, 0);
  if (value < 10 && value > -10) {
    return `0${value}`;

  }
  return value.toString();
};

export { getRandomNumber, getRandomItemArray, getRandomItemsArray, getRandomIntegerWithZero };
