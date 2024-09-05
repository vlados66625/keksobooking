const checksIsPolindrome = (text) => {
  text += '';
  let textReverse = '';
  const textLowerNoSpace = text.replaceAll(' ', '').toLowerCase();
  for (let i = 1; i <= textLowerNoSpace.length; i++) {
    textReverse += textLowerNoSpace.at(-i);
  }
  return textReverse === textLowerNoSpace;
};

// const checksIsPolindrome = (text) => {
// Приводим текст к строке, убираем пробелы и приводим к нижнему регистру
// const textLowerNoSpace = text.toString().replace(/\s/g, '').toLowerCase();

// Преобразуем строку в массив, переворачиваем его и соединяем обратно в строку
// const textReverse = textLowerNoSpace.split('').reverse().join('');

// Сравниваем перевернутую строку с исходной
// return textReverse === textLowerNoSpace;
// };

const getNumber = (value) => {
  value = value.toString().replaceAll(' ', '');
  let valueNumber = '';
  for (let i = 0; i < value.length; i++) {
    if (!isNaN(value.at(i)) || value.at(i) === '-') {
      valueNumber += value.at(i);
    }
  }

  return valueNumber === '' ? NaN : Number(valueNumber);
};

// const getNumber = (value) => {
//   const valueNumber = value
//     .toString()        // '213bnvjg6666hjbk21'
//     .split('')         // ['2', '1', '3', 'b', 'n', 'v', 'j', 'g', '6', '6', '6', '6', 'h', 'j', 'b', 'k', '2', '1']
//     .filter(char => !isNaN(char) && char !== ' ') // ['2', '1', '3', '6', '6', '6', '6', '2', '1']
//     .join('');         // '213666621'

//   return Number(valueNumber); // 213666621
// }

// const getNumber = (value) => {
//   const valueNumber = value.toString().replace(/\D/g, '');
//   return Number(valueNumber);
// }

const addLimitedString = (text, limited, string) => {
  let newText = text;

  if (text.length < limited) {
    const SYMBOL_ADD = limited - text.length;
    const ADD_STRING_TIMES = Math.floor(SYMBOL_ADD / string.length);
    const ADD_STRING_SYMBOL = SYMBOL_ADD % string.length;

    for (let i = 1; i <= ADD_STRING_TIMES; i++) {
      newText = string + newText;
    }

    newText = string.slice(0, ADD_STRING_SYMBOL) + newText;
  }

  return newText;
};

const getRandomNumber = (min, max, afterCommaNumbers) => {
  if (min >= max) {
    return NaN;
  }
  const randomValue = min + (max - min) * Math.random();

  return Number(randomValue.toFixed(afterCommaNumbers));
};
