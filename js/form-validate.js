const adForm = document.querySelector('.ad-form');
const roomNumberField = adForm.querySelector('#room_number');
const capacityField = adForm.querySelector('#capacity');
const priceField = adForm.querySelector('#price');
const housingTypeField = adForm.querySelector('#type');
const timeinField = adForm.querySelector('#timein');
const timeoutField = adForm.querySelector('#timeout');

const RoomCapacityValue = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0'],
};

const HousingTypeMinValue = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000
};

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'text-help'
}, false);

pristine.addValidator(
  capacityField,

  (value) => RoomCapacityValue[roomNumberField.value].includes(value),

  () => {
    const roomNumber = roomNumberField.value;
    return roomNumber === '100'
      ? '100 комнат не доступны для гостей'
      : `Для ${roomNumber} комнат${/1$/.test(roomNumber) ? 'ы' : ''} доступное количество гостей - до ${roomNumber}`;
  }
);

pristine.addValidator(
  priceField,

  (value) => value >= HousingTypeMinValue[housingTypeField.value],

  () => `Для выбранного типа жилья минимальная цена за ночь - ${HousingTypeMinValue[adForm.querySelector('#type').value]} руб.`
);

timeinField.addEventListener('change', () => {
  timeoutField.value = timeinField.value;
});

timeoutField.addEventListener('change', () => {
  timeinField.value = timeoutField.value;
});

adForm.addEventListener('submit', (evt) => {
  // evt.preventDefault();
  // pristine.validate();
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});


