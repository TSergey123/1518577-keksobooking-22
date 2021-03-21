import { PUBLICATION_LENGTH } from "./data.js";
import { reRenderMarkers } from "./map.js";

const mapFilters = document.querySelector('.map__filters');
const housingType = mapFilters.querySelector('#housing-type');
const housingPrice = mapFilters.querySelector('#housing-price'); 
const housingRoom = mapFilters.querySelector('#housing-rooms'); 
const housingGuest = mapFilters.querySelector('#housing-guests'); 

// const mapFiltersVal = {
//     TYPES: [
//         'any',
//         'palace',
//         'flat',
//         'house',
//         'bungalow',
//     ],
//     PRICES: [
//         'any',
//         'middle',
//         'low',
//         'hight',
//     ],
//     ROOMS: [
//         '1',
//         '2',
//         '3,',
//     ],
//     GUESTS: [
//         'any',
//         '2',
//         '1',
//         '0',
//     ],
//     FEATURES: [
//         'wifi',
//         'dishwasher',
//         'parking',
//         'washer',
//         'elevator',
//         'conditioner',
//     ],
// };

// const renderSimilarList = (similarApp) => {
//     const similarListFragment = document.createDocumentFragment();
//     similarApp
//     .slice()
//     .sort()
//     .slice(0, PUBLICATION_LENGTH);


//     const sameType = similarApp.filter(() => {});
//     const samePrice = similarApp.filter(() => {});
//     const sameRoom = similarApp.filter(() => {});
//     const sameGuest = similarApp.filter(() => {});
//     const sameFeature = similarApp.filter(() => {});

//     similarApp.forEach(({type, price, room, guest, feature}) => {
//         createPublication();
//     });
// }

// housingType.addEventListener('change', (evt) => {
//     const housingTypeVal = housingType.value;
// });

// const addFilter = (offers) => {
//     housingType.addEventListener('change', () => {
//         if(housingType.value === 'any') {
//             reRenderMarkers(offers);
//         } else {
//             const filteredOffers = offers.filter((item) => item.offers.type === houseType.value);
//             reRenderMarkers(filteredOffers);
//         }
//         });
// }
// addFilter();

const checkFilterConditions = (offer) => {
    return housingType.value === 'any' || housingType.value === offer.type;
  }
  
  const addFilterListener = (offers) => {
    housingType.addEventListener('change', function () {
  
      const filteredOffers = [];
      for (let offer of offers) {
        if (checkFilterConditions(offer.offer)) {
          filteredOffers.push(offer);
          if (filteredOffers.length >= PUBLICATION_LENGTH) {
            break;
          }
        }
      }
      reRenderMarkers(filteredOffers);
    });
  }

  export {addFilterListener};