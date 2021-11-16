import { getFish } from "../database.js";
import { mostHolyFish } from "./fishData.js";
import { soldierFish } from "./fishData.js";
import { nonHolyFish } from "./fishData.js";

export const FishList = () => {
  // Invoke the function that you imported from the database module
  // const fishes = getFish();

  const fishArrays = [mostHolyFish(), soldierFish(), nonHolyFish()];

  // Start building a string filled with HTML syntax
  let htmlString = '<article class="content__fish-list">';

  // Create HTML representations of each fish here
  for (const fishes of fishArrays) {
    for (const fish of fishes) {
      htmlString += `<section class="fish-card">
            <div><img  class="fish-card__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.size}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
        `;
    }
  }

  htmlString += `</article>`;

  return htmlString;
};
