import { toggleForms, deactivatedForm } from './toggle-form.js';
import { generatingPopup } from './generating-popup.js';

const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const ZOOM = 12.5;
const cityCenter = {
  lat: 35.68065,
  lng: 139.75742,
};
const addressField = document.querySelector('#address');

const generateMap = (data) => {
  toggleForms(deactivatedForm, true);

  const map = L.map('map-canvas')
    .on('load', () => {
      toggleForms(deactivatedForm, false);
    })
    .setView(cityCenter, ZOOM);

  L.tileLayer(TILE_LAYER, {
    attribution: COPYRIGHT
  }).addTo(map);

  const mainIcon = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const mainMarker = L.marker(
    cityCenter,
    {
      icon: mainIcon,
      draggable: true
    });

  mainMarker.addTo(map);

  mainMarker.on('moveend', (evt) => {
    const lat = evt.target.getLatLng().lat.toFixed(5);
    const lng = evt.target.getLatLng().lng.toFixed(5);
    addressField.value = `lat: ${lat}, lng: ${lng}`;
  });


  const usualIcon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  data.forEach((dwelling, index) => {
    const usualMarker = L.marker(
      dwelling.location,
      { icon: usualIcon });
    usualMarker
      .addTo(map)
      .bindPopup(generatingPopup(data).querySelectorAll('.popup')[index]);
  });
};

export { generateMap };
