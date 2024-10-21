import { toggleForm } from './toggle-form.js';
import { handleradFormSubmit, adForm } from './form.js';
import { generateMap } from './map.js';
import { generateUsualMarker, handlerFilterFormChange, mapFiltersForm } from './generate-usual-marker.js';
import { createSlider } from './slider.js';
import { getData } from './api.js';
import { generateErrorMessage } from './generating-markup.js';
import { debounce } from './util.js';

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
handleradFormSubmit();

getData('/data', 'Ошибка загрузки данных')
  .then((data) => {
    generateUsualMarker(data);
    handlerFilterFormChange(debounce(() => generateUsualMarker(data)), 300);
    toggleForm(mapFiltersForm, false);
  })
  .catch((err) => {
    generateErrorMessage(err.message, filter);
  });


