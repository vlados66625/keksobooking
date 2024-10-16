import { toggleForm } from './toggle-form.js';
import './form.js';
import { generateMap, generateUsualMarker } from './map.js';
import { createSlider } from './slider.js';
import { getData } from './api.js';
import { generateErrorMessage } from './generating-markup.js';

const mapFiltersForm = document.querySelector('.map__filters');
const adForm = document.querySelector('.ad-form');
const filter = document.querySelector('.map__filters-container');

const SliderSettings = {
  MIN_VALUE: 0,
  MAX_VALUE: 100000,
  START_VALUE: 5000,
  STEP_VALUE: 100,
  CONNECT_VALUE: 'lower'
};

toggleForm(mapFiltersForm, true);
toggleForm(adForm, true);
createSlider(SliderSettings);
generateMap();

getData('/data', 'Ошибка загрузки данных')
  .then((data) => {
    generateUsualMarker(data);
    toggleForm(mapFiltersForm, false);

  })
  .catch((err) => {
    generateErrorMessage(err.message, filter);
  });


