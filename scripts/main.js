import { getFish } from './database.js';
import { getTips } from './database.js'
import { getLocations } from './database.js'
import { FishList } from './fish/FishList.js';
import { tipList } from './tips/tipList.js';
import { locationsList } from './locations/locationsList.js';


// const allFish = getFish();

// for (const fish of allFish) {
//     console.log(fish);
// }

const parentHTMLElementFish = document.querySelector(".content");
parentHTMLElementFish.innerHTML += FishList();

const parentHTMLElementTips = document.querySelector(".tips");
parentHTMLElementTips.innerHTML += tipList();

const parentHTMLElementLocations = document.querySelector(".content");
parentHTMLElementLocations.innerHTML += locationsList();

