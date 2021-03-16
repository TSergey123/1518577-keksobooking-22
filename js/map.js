import {createSimilarPopup} from './popup.js';
import {address, disableForm, activateForm} from './form.js';
import {similarOffer} from './create-publication.js';

// const map = L.map('map-canvas');

// disableForm();
//   map.setView({
//     lat: 35.68074835749536,
//     lng: 139.7693276902296,
//   }, 12);

// L.tileLayer(
//   'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
//   {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
//   },
// ).addTo(map);

// const mainPinIcon = L.icon({
//   iconUrl: 'img/main-pin.svg',
//   iconSize: [52, 52],
//   iconAnchor: [26, 52],
// });

// const mainPinMarker = L.marker(
//   {
//     lat: 35.68325818445154,
//     lng: 139.75387816658954,
//   },
//   {
//     draggable: true,
//     icon: mainPinIcon,
//   },
// );


// mainPinMarker.addTo(map);
// mainPinMarker.on('moveend', function (evt) {
//   address.value = evt.target.getLatLng().lat.toFixed(5) + ' ' + evt.target.getLatLng().lng.toFixed(5);
// });

// mainPinMarker.addEventListener('dragend', () => {
//   activateForm();
// });


// similarOffer.forEach((createOffer) => {
//   const lat = createOffer.location.x;
//   const lng = createOffer.location.y;

//   const icon = L.icon({
//     iconUrl: 'img/pin.svg',
//     iconSize: [40, 40],
//     iconAnchor: [20, 40],
//   });

//   const marker = L.marker(
//     {
//       lat,
//       lng,
//     },
//     {
//       icon,
//     },
//   );

//   marker
//     .addTo(map)
//     .bindPopup(
//       createSimilarPopup(createOffer),
//       {
//         keepInView: true,
//       },
//     );
// }); 
const TOKYO_LAT = 35.712977129360546;
const TOKYO_LNG = 139.7540842153831;
const MAIN_ZOOM = 10;

const map = window.L.map('map-canvas');
disableForm()
const createMarker = (lat, lng, draggable, icon) => {
  return window.L.marker({
    lat,
    lng,
  },
  {
    draggable,
    icon,
  })
}

const createPin = (lat, lng) => {
  return createMarker(lat, lng, false, window.L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  }));
}

const createMainPin = (lat, lng) => {
  return createMarker(lat, lng, true, window.L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [46, 46],
    iconAnchor: [23, 46],
  }));
}

const initMap = (offers) => {
  
  map.on('load', () => {
    activateForm();
    // address.value = `${TOKYO_LAT}, ${TOKYO_LNG}`;
  })
    .setView({
      lat: TOKYO_LAT,
      lng: TOKYO_LNG,
    }, MAIN_ZOOM);
  window.L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  mainPin.on('moveend', (evt) => {
  address.value = evt.target.getLatLng().lat.toFixed(5) + ', ' + evt.target.getLatLng().lng.toFixed(5);
});

  mainPin.addTo(map);

  offers.forEach((offer) => {
    const pin = createPin(offer.location.lat, offer.location.lng);
    pin.addTo(map);
    pin.bindPopup(() => createSimilarPopup(offer));
  });
}

const resetMainMarker = () => {
  mainPin.setLatLng([TOKYO_LAT, TOKYO_LNG])
  map.setView(new window.L.LatLng(TOKYO_LAT, TOKYO_LNG), MAIN_ZOOM);
};

const setAddress = () => {
  address.value = TOKYO_LAT, TOKYO_LNG;
};

const mainPin = createMainPin(TOKYO_LAT, TOKYO_LNG);

export {initMap,resetMainMarker, setAddress};