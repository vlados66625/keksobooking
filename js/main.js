import { generateApartmentsData } from './data.js';
import { generatingPopup } from './generating-popup.js';
import { toggleForms, deactivatedForm } from './toggle-form.js';
import './form-validate.js';
import { generateMap } from './map.js';
import { createSlider } from './slider.js';

const SliderSettings = {
  MIN_VALUE: 0,
  MAX_VALUE: 100000,
  START_VALUE: 5000,
  STEP_VALUE: 100,
  CONNECT_VALUE: 'lower'
};


const data = generateApartmentsData();
generateMap(data);
createSlider(SliderSettings);
