import { getRandomNumber, getRandomItemArray, getRandomItemsArray, getRandomIntegerWithZero } from './util.js';

const TITLES = [
  'Закат у моря',
  'Горное озеро',
  'Уличный арт',
  'Зимний лес',
  'Город в огнях',
  'Тропический рай',
  'Закат в горах',
  'Парк весной',
  'Река в тумане',
  'Цветочное поле'
];

const DESCRIPTIONS = [
  'Прекрасный вид на закат с побережья.',
  'Тишина и покой у кристально чистого горного озера.',
  'Цветная граффити на стенах старого города.',
  'Заснеженные деревья и холодный воздух в лесу.',
  'Ночной город с яркими огнями улиц.',
  'Пальмы, белый песок и лазурная вода на острове.',
  'Закатное солнце освещает вершины гор.',
  'Свежая зелень и цветущие деревья в городском парке.',
  'Туманное утро над рекой, скрывающее дальний берег.',
  'Яркие цветы на огромном поле за городом.'
];

const TIPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const generateData = () => {
  const LAT = getRandomNumber(35.65000, 35.70000, 5);
  const LNG = getRandomNumber(139.70000, 139.80000, 5);

  const DATA = {
    author: {
      avatar: `img/avatars/user${getRandomIntegerWithZero(1, 10)}.png`,
    },
    offer: {
      title: getRandomItemArray(TITLES),
      address: `${LAT}, ${LNG}`,
      price: getRandomNumber(1000, 5000, 0),
      type: getRandomItemArray(TIPE),
      rooms: getRandomNumber(1, 4, 0),
      guests: getRandomNumber(1, 16, 0),
      checkin: getRandomItemArray(CHECKIN),
      checkout: getRandomItemArray(CHECKOUT),
      features: getRandomItemsArray(FEATURES),
      description: getRandomItemArray(DESCRIPTIONS),
      photos: getRandomItemsArray(PHOTOS),
    },
    location: {
      lat: LAT,
      lng: LNG,
    }
  };

  return DATA;
};

const generateApartmentsData = () => Array.from({ length: 10 }, generateData);

export { generateApartmentsData };
