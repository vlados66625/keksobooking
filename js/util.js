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
  const lengthNewArray = getRandomNumber(1, array.length, 0);
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

const isEscape = (evt) => evt.key === 'Escape';

const synchronizeFields = (field1, field2) => {
  field1.addEventListener('change', () => {
    field2.value = field1.value;
  });
  field2.addEventListener('change', () => {
    field1.value = field2.value;
  });
};


const debounce = (cb, timeoutDelay = 500) => {
  let timeout;
  return (...rest) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => cb.apply(this, rest), timeoutDelay);
  };
};

export { getRandomNumber, getRandomItemArray, getRandomItemsArray, getRandomIntegerWithZero, isEscape, synchronizeFields, debounce };
