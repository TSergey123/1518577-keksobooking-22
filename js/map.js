// /* global L:readonly */
// const map = L.map('map')
//   .setView({
//     lat: 35.680330045327075,
//     lng: 139.76846938336072,
//   }, 13);

// L.tileLayer(
//   'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
//   {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
//   },
// ).addTo(map);

// const points = [
//   {
//     title: 'Футура',
//     lat: 35.680330045327075,
//     lng: 139.76846938336072 ,
//     draggable: true,
//   },
//   {
//     title: 'Шаверма',
//     lat: 59.96783,
//     lng: 30.31258,
//   },
//   {
//     title: 'Франк',
//     lat: 59.95958,
//     lng: 30.30228,
//   },
//   {
//     title: 'Ginza',
//     lat: 59.97292,
//     lng: 30.31982,
//   },
// ];

// const createCustomPopup = (point) => {
//   const balloonTemplate = document.querySelector('#balloon').content.querySelector('.balloon');
//   const popupElement = balloonTemplate.cloneNode(true);

//   popupElement.querySelector('.balloon__title').textContent = point.title;
//   popupElement.querySelector('.balloon__lat-lng').textContent = `Координаты: ${point.lat}, ${point.lng}`;

//   return popupElement;
// };

// points.forEach((point) => {
//   const {lat, lng} = point;

//   const icon = L.icon({
//     iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
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
//     {
//       draggable: true,
//     },
//   );

//   marker
//     .addTo(map)
//     .bindPopup(
//       createCustomPopup(point),
//       {
//         keepInView: true,
//       },
//     );
// });

/* global L:readonly */
const map = L.map('map')
  .setView({
    lat: 35.680330045327075,
    lng: 139.76846938336072,
  }, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const marker = L.marker(
  {
    lat: 35.680330045327075,
    lng: 139.76846938336072 ,
  },
  {
    draggable: true,
  },
);

const createCustomPopup = (point) => {
  const balloonTemplate = document.querySelector('#balloon').content.querySelector('.balloon');
  const popupElement = balloonTemplate.cloneNode(true);

  popupElement.querySelector('.balloon__title').textContent = point.title;
  popupElement.querySelector('.balloon__lat-lng').textContent = `Координаты: ${point.lat}, ${point.lng}`;

  return popupElement;
};

// marker
//   .addTo(map);
//   createCustomPopup(point),
//       {
//         keepInView: true,
//       },
const points = [
  {
    title: 'Футура',
    lat: 35.680330045327075,
    lng: 139.76846938336072 ,
    draggable: true,
  },
  {
    title: 'Шаверма',
    lat: 35.682561018216354,
    lng: 139.75919966917667,
  },
  {
    title: 'Франк',
    lat: 59.95958,
    lng: 30.30228,
  },
  {
    title: 'Ginza',
    lat: 59.97292,
    lng: 30.31982,
  },
];

points.forEach((point) => {
  const {lat, lng} = point;

  const icon = L.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  marker
    .addTo(map)
    .bindPopup(
      createCustomPopup(point),
      {
        keepInView: true,
      },
    );
})
