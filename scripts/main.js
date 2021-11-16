// import { getFish } from './database.js';
// import { getTips } from './database.js'
// import { getLocations } from './database.js'
import { FishList } from './fish/FishList.js';
import { tipList } from './tips/tipList.js';
import { quotesList } from './quotes/quotesList.js'
import { locationsList } from './locations/locationsList.js';


// const allFish = getFish();

// for (const fish of allFish) {
//     console.log(fish);
// }

const parentHTMLElement = document.querySelector(".content");
parentHTMLElement.innerHTML += FishList() + quotesList() + locationsList();

const parentHTMLElementTips = document.querySelector(".tips");
parentHTMLElementTips.innerHTML += tipList();
