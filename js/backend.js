import { disableForm, setUserFormSubmit } from "./form.js";
import { getData, sendData } from "./fetch.js";
import { initMap } from "./map.js";
import {showAlert} from "./util.js";

getData((offer) => {
    initMap(offer)
},
() => {
    showAlert('Data not found error');
}
);
setUserFormSubmit();
