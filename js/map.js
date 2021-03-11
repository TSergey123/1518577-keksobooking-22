/* global L:readonly */
import {cardElement,createSimilarPopup} from './popup.js';
import {address} from './form.js';
import {similarOffer,createPublication} from './create-publication.js';

const pub = createPublication();

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
  {
    title: 'Ginza',
    lat: 35.677262355752454,
    // lat: pub.offer.address.location.x,
    lng: 139.78065734089898,
    // lng: pub.offer.address.location.y,
  },
];

const createCustomPopup = () => {
  const balloonTemplate = document.querySelector('#balloon').content.querySelector('.balloon');
  const popupElement = balloonTemplate.cloneNode(true);
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

// mainPinMarker.on('moveend', (evt) => {
//   const showLoc = evt.target.getLatLng();
//   const parseLoc = showLoc.toString().replace(/[a-zA-Z-()]+/g, '');
//   address.value = parseLoc;
// });

mainPinMarker.on('moveend', function (evt) {
  address.value = evt.target.getLatLng().lat.toFixed(5) + ' ' + evt.target.getLatLng().lng.toFixed(5);
});

// similarOffer.forEach(function(createOffer){
//   const lat = pub.location.x;
//   const lng = pub.location.y;
// });

similarOffer.forEach((createOffer) => {
  const lat = createOffer.location.x;
  const lng = createOffer.location.y;

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
      createSimilarPopup(createOffer),
      {
        keepInView: true,
      },
    );
});

const createPin = (pinData) => {
  
}

export {createCustomPopup};
