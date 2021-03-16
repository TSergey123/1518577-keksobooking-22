import { disableForm } from "./form.js";
import { getData } from "./fetch.js";
import { initMap } from "./map.js";
import {showAlert} from "./util.js";

disableForm();

getData((offer) => {
    initMap(offer)
},
() => {
    showAlert('Data not found error');
}
);