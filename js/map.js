/* global L:readonly */
import {cardElement} from './popup.js';
import {address} from './form.js';

const map = L.map('map')
  .setView({
    lat: 35.68074835749536,
    lng: 139.7693276902296,
  }, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

const points = [
  // {
  //   title: 'Футура',
  //   lat: 35.68074835749536,
  //   lng: 139.7693276902296,
  // },
  // {
  //   title: 'Шаверма',
  //   lat: 35.68967182797921,
  //   lng: 139.76812606061316,
  // },
  // {
  //   title: 'Франк',
  //   lat: 35.66331682598815,
  //   lng: 139.75542311895353,
  // },
  {

    title: 'Ginza',
    lat: 35.677262355752454,
    lng: 139.78065734089898,
  },
];

const createCustomPopup = (point) => {
  const balloonTemplate = document.querySelector('#balloon').content.querySelector('.balloon');
  const popupElement = balloonTemplate.cloneNode(true);
  // const customLoc = `${point.lat.toFixed(5)}, ${point.lng.toFixed(5)}`;
  // popupElement.querySelector('.balloon__title').textContent = point.title;
  // popupElement.querySelector('.balloon__lat-lng').textContent = `${point.lat}, ${point.lng}`;
  // popupElement.querySelector('.balloon__lat-lng').textContent = customLoc;

  popupElement.querySelector('.balloon__lat-lng').append(cardElement);

  return popupElement;
};

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.68325818445154,
    lng: 139.75387816658954,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const showLoc = evt.target.getLatLng();
  const parseLoc = showLoc.toString().replace(/[a-zA-Z-()]+/g, '');
  address.value = parseLoc;
});

points.forEach((point) => {
  const {lat, lng} = point;

  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(
      createCustomPopup(point),
      {
        keepInView: true,
      },
    );
});

export {createCustomPopup};
